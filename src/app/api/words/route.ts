import { fetchWords } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const words: string[] = await fetchWords("english");
    const shortest: string = getMinLetters(words);
    const longest: string = getMaxLetters(words);

    const minLetters: number = shortest.length;
    const maxLetters: number = longest.length;

    return NextResponse.json({ minLetters, maxLetters }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

const getMinLetters = (words: string[]) => {
  return words.reduce((prevValue, currentValue) => {
    return prevValue.length < currentValue.length ? prevValue : currentValue;
  });
};

const getMaxLetters = (words: string[]) => {
  return words.reduce((prevValue, currentValue) => {
    return prevValue.length > currentValue.length ? prevValue : currentValue;
  });
};
