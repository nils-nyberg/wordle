import { NextRequest, NextResponse } from "next/server";
import * as uuid from "uuid";
import { cookies } from "next/headers";
import { GameData } from "@/lib/types";
import { fetchWords, GAMES } from "@/lib/utils";
import wordSelection from "@/lib/logic/algorithmB";

export async function POST(req: NextRequest) {
  try {
    const body: GameData = await req.json();
    const wordLength: number = body.wordLength;
    const allowRepetition: boolean = body.allowRepetition;

    const wordList: string[] = await fetchWords("english");
    const answer: string = wordSelection(wordList, wordLength, allowRepetition);
    const id = uuid.v4();

    const game: GameData = {
      id,
      wordLength,
      allowRepetition,
      answer,
      guesses: [],
      startTime: new Date(),
      endTime: undefined,
    };

    GAMES.push(game);

    const cookie = await cookies();
    cookie.set({
      name: "id",
      value: id,
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return NextResponse.json({ wordLength, allowRepetition }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error, message: "Error creating game" },
      { status: 500 }
    );
  }
}
