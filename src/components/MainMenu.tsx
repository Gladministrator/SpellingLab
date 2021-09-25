import Questions from "./Questions";
import WordGame from "./WordGame/WordGame";
import { useState } from "react";
import { ICategory } from "../types/types";
import { IPoints } from "../types/types";
import classNames from "classnames/bind";
import MainMenuSass from "./MainMenu.module.scss";

let cx = classNames.bind(MainMenuSass);

const MainMenu = () => {
  const [wordCategory, setWordCategory] = useState<ICategory>();
  const [players, setPlayers] = useState<number | undefined>();
  const [points, setPoints] = useState<IPoints>({ Player1: 0, Player2: 0, Player3: 0 });
  return (
    <div className={cx("MainMenu")}>
      <h1>Welcome to the spelling game</h1>
      <div className={cx("gamecontainer")}>
        {wordCategory === undefined ? (
          <Questions
            setWordCategory={setWordCategory}
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
