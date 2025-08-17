import { NextRequest, NextResponse } from "next/server";
import * as uuid from "uuid";
import { GameData } from "@/lib/types";
import { GAMES } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body: GameData = await req.json();
    const wordLength: number = body.wordLength;
    const allowRepetition: boolean = body.allowRepetition;

    const game: GameData = {
      id: uuid.v4(),
      wordLength,
      allowRepetition,
      answer: "",
      guesses: [],
      startTime: new Date(),
      endTime: undefined,
    };

    GAMES.push(game);
    return NextResponse.json({ wordLength, allowRepetition }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error, message: "Error creating game" },
      { status: 500 }
    );
  }
}
