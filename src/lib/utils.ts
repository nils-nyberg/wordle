import { promises as fs } from "fs";
import { GameData } from "@/lib/types";

// Array for currently running games
export const GAMES: GameData[] = [];

// Fetch words for a game
export async function fetchWords(language: string) {
  const file: string = await fs.readFile(
    process.cwd() + `/src/lib/language/${language}/words.json`,
    "utf8"
  );
  const data: { words: string[] } = JSON.parse(file);
  return data.words;
}
