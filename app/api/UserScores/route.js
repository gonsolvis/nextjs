import UserScore from "../../(models)/UserScore";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("post ran");
  try {
    const body = await req.json();
    console.log("body", body);
    const userScoreData = body.scoreData;
    console.log("userScoreData", userScoreData);
    await UserScore.create(userScoreData);

    return NextResponse.json({ message: "UserScore Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Henny", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const scores = await UserScore.find();
    console.log(scores)
    return NextResponse.json({ scores }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Henny", error },
      { status: 500 }
    );
  }
}
