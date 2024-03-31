import connect from "@/dbConfig/dbConfig";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

// API url :- http://localhost:3000/api/v1/users/login

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user) {
      NextResponse.json({ error: "User does not exit", status: 200 });
    }
    console.log("User exit");
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      NextResponse.json({ error: "Check your credintails", status: 400 });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const respose = NextResponse.json({
      message: "Log in success",
      success: true,
    });

    respose.cookies.set("token", token, {
      httpOnly: true,
    });
    return respose;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
