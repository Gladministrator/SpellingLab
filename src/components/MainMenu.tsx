import Questions from "./Questions";
import WordGame from "./WordGame/WordGame";
import { useState } from "react";
import { ICategory } from "../types/types";
import { IPoints } from "../types/types";
const MainMenu = () => {
  const [wordCategory, setCategory] = useState<ICategory>();
  const [players, setPlayers] = useState<number | undefined>();
  const [points, setPoints] = useState<IPoints>({ Player1: 0, Player2: 0, Player3: 0 });
  return (
    <div>
      <h1>Welcome to the spelling game</h1>
      <div>
        {wordCategory === undefined ? (
          <Questions
            setCategory={setCategory}
            players={players}
            setPlayers={setPlayers}
            setPoints={setPoints}
          />
        ) : (
          <WordGame
            points={points}
            setPoints={setPoints}
            players={players}
            wordCategory={wordCategory}
          />
        )}
      </div>
    </div>
  );
};

export default MainMenu;
