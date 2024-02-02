import HindiAlphabet from "../../(models)/HindiAlphabet";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("post ran");
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await HindiAlphabet.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Henny", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tickets = await HindiAlphabet.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Henny", error },
      { status: 500 }
    );
  }
}
