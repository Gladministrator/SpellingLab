import React, { useEffect, useState } from "react";
import { IDivprops, ICategory } from "../../../types/types";
import WordGameSass from "./WordGame.module.scss";
import Buttons from "../Buttons/Buttons";
import WrongAnswer from "../WrongAnswers/WrongAnswers";
import InputAnswer from "../InputAnswer/InputAnswer";
import NextQuestion from "../NextQuestion/NextQuestion";
import classNames from "classnames/bind";

let cx = classNames.bind(WordGameSass);

export interface IGameProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  wordCategory: ICategory;
}

const WordGame = ({ text, setText, wordCategory }: IGameProps) => {
  const [incorrectAnswer, setincorrectAnswer] = useState<number>(0);
  const [nextButton, setNextButton] = useState<boolean>(false);
  const [animal, setAnimal] = useState<string>(wordCategory[1]);
  const [change, setChange] = useState(1);

  const [stateElements, setStateElements] = useState<IDivprops[]>(
    animal.split("").map((letter, index) => {
      return (
        <div className={cx(WordGameSass.box)} key={index}>
          <p className={cx(WordGameSass.letters)}></p>
        </div>
      );
    })
  );

  useEffect(() => {
    if (stateElements.every((div) => div.props.className === undefined)) {
      setNextButton(true);
    }
  }, [stateElements]);

  return (
    <div className={cx("main-container")}>
      <h1>{text}</h1>
      <div className={cx("lettercontainer")}>{stateElements}</div>
      <WrongAnswer
        incorrectAnswer={incorrectAnswer}
        animal={animal}
        setStateElements={setStateElements}
        setText={setText}
      />
      {!nextButton && (
        <Buttons
          key={change}
          animal={animal}
          stateElements={stateElements}
          setStateElements={setStateElements}
          incorrectAnswer={incorrectAnswer}
          setincorrectAnswer={setincorrectAnswer}
          setChange={setChange}
        />
      )}
      {!nextButton && (
        <InputAnswer
          animal={animal}
          setStateElements={setStateElements}
          setincorrectAnswer={setincorrectAnswer}
        />
      )}
      <NextQuestion
        setStateElements={setStateElements}
        setincorrectAnswer={setincorrectAnswer}
        animal={animal}
        setNextButton={setNextButton}
        nextButton={nextButton}
        setAnimal={setAnimal}
        wordCategory={wordCategory}
        setText={setText}
      />
    </div>
  );
};

export default WordGame;
