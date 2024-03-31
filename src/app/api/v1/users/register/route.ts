import connect from "@/dbConfig/dbConfig";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

connect();

// API url :- http://localhost:3000/api/v1/users/register

export async function GET(req: NextRequest) {
  return NextResponse.json({ Message: "GET request call..." });
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({ email });
    if (user) {
      NextResponse.json({ error: "User is already exit", status: 200 });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashpawword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashpawword,
    });

    const saveUser = await newUser.save();
    console.log(saveUser);

    //send verification email

    await sendEmail({ email, emailType: "VERIFY", userId: saveUser._id });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      saveUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    message: "User register successfully",
    success: true,
  });
}
