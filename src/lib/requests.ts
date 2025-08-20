// The code used in this file, is ONLY used for client side of app
export async function postSettings(
  wordLength: number,
  allowRepetition: boolean,
  getGameId: (gameId: string) => void
) {
  try {
    const response = await fetch("/api/games", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wordLength,
        allowRepetition,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const payload = await response.json();
    const gameId: string = payload.id;

    getGameId(gameId);
  } catch (error) {
    console.error(error);
  }
}

export async function postAnswer(gameId: string) {
  try {
    const response = await fetch(`/api/games/${gameId}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Success",
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error(error);
  }
}
