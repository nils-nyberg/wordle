export type GameData = {
  id: string;
  wordLength: number;
  allowRepetition: boolean;
  answer: string;
  guesses: string[];
  startTime: Date;
  endTime: Date | undefined;
};

export type FeedbackData = {
  letter: string;
  result: string;
}[];
