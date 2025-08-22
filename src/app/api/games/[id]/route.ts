import { GAMES } from "@/lib/utils";
import feedback from "@/lib/logic/algorithmA";
import { NextRequest, NextResponse } from "next/server";
import { FeedbackData } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const gameId: string = body.gameId;
    const guess: string = body.guess;

    const game = GAMES.find((session) => session.id === gameId);

    if (game) {
      const guesses: string[] = game.guesses;
      guesses.push(guess);

      const answer: string = game.answer;

      let data: FeedbackData | string;
      if (guess === answer) {
        data = "You won!";
      } else {
        data = feedback(guess, answer);
      }

      console.log(answer);

      return NextResponse.json({ feedback: data }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Game not found!" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
