import connect from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connect();

// API uri http://localhost:3000/api/v1/users/profile

export async function POST(request: NextRequest) {
  const userId = await getDataFromToken(request);
  const user = await User.findOne({ _id: userId }).select("-password");
}
