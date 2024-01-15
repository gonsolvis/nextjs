import User from "../../(models)/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("post ran");
  try {
    const body = await req.json();
    console.log("body", body);
    const userData = body.formData;
    console.log("userData", userData);
    await User.create(userData);

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Henny", error },
      { status: 500 }
    );
  }
}
