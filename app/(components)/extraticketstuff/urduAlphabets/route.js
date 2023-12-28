import urduAlphabet from "../urduAlphabet";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("post ran");
  try {
    const body = await req.json();
    console.log("body ran");
    const LetterData = body.formData;
    console.log("body LetterData");
    await urduAlphabet.create(LetterData);

    return NextResponse.json({ message: "Letter Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Henny", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const urduAlphabet = await urduAlphabet.find();
    return NextResponse.json({ urduAlphabet }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Henny", error },
      { status: 500 }
    );
  }
}
