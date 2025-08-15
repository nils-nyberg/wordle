export type GameData = {
  id: string;
  wordLength: number;
  allowRepetition: boolean;
  answer: string | undefined;
  guesses: string[];
  startTime: Date;
  endTime: Date | undefined;
};
