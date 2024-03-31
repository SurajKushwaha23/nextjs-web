import connect from "@/dbConfig/dbConfig";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connect();

// API uri http://localhost:3000/api/v1/users/verifyemail

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    const user = await User.findOne({
      varifyToken: token,
      varifyTokenExpiry: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    console.log(user);

    user.isVarified = true;
    user.varifyToken = undefined;
    user.varifyTokenExpiry = undefined;

    await user.save();
    return NextResponse.json({
      message: "User varify successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
