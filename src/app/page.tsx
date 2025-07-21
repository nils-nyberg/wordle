"use client";

import Game from "@/views/Game";
import Settings from "@/views/Settings";

export default function Home() {
  let gameStart: boolean = false;

  if (gameStart) {
    return <Game />;
  } else {
    return <Settings />;
  }
}
