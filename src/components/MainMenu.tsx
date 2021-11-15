import Questions from "../components/WordGame/Questions/Questions";
import WordGame from "./WordGame/WordGame";
import { useState } from "react";
import { ICategory } from "../types/types";
import classNames from "classnames/bind";
import MainMenuSass from "./MainMenu.module.scss";

let cx = classNames.bind(MainMenuSass);

const MainMenu = () => {
  const [wordCategory, setWordCategory] = useState<ICategory>();
  const [text, setText] = useState<JSX.Element>(<></>);
  return (
    <div className={cx("MainMenu")}>
      <h1 className={cx("title-heading")}>Guess The Word</h1>
      <div className={cx("gamecontainer")}>
        {wordCategory === undefined ? (
          <Questions setWordCategory={setWordCategory} setText={setText} />
        ) : (
          <WordGame text={text} setText={setText} wordCategory={wordCategory} />
        )}
      </div>
    </div>
  );
};

export default MainMenu;
