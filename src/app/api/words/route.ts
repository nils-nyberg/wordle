import { fetchWords } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const words: string[] = await fetchWords("english");
    const longest: string = words.reduce((prevValue, currentValue) => {
      return prevValue.length > currentValue.length ? prevValue : currentValue;
    });
    const shortest: string = words.reduce((prevValue, currentValue) => {
      return prevValue.length < currentValue.length ? prevValue : currentValue;
    });

    const minLetters: number = shortest.length;
    const maxLetters: number = longest.length;

    return NextResponse.json({ minLetters, maxLetters }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching words" },
      { status: 500 }
    );
  }
}
