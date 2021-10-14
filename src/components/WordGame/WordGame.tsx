import React, { useEffect, useState } from "react";
import { IPoints, IDivprops, ICategory } from "../../types/types";
import WordGameSass from "./WordGame.module.scss";
import Buttons from "./Buttons/Buttons";
import WrongAnswer from "./WrongAnswers/WrongAnswers";
import InputAnswer from "./InputAnswer/InputAnswer";
import NextQuestion from "./NextQuestion/NextQuestion";
import classNames from "classnames/bind";

let cx = classNames.bind(WordGameSass);

export interface IGameProps {
  points: IPoints;
  setPoints: (param: IPoints) => void;
  players: number | undefined;
  wordCategory: ICategory;
}

const WordGame = ({ points, setPoints, players, wordCategory }: IGameProps) => {
  const [incorrectAnswer, setincorrectAnswer] = useState<number>(0);
  const [nextButton, setNextButton] = useState<boolean>(false);
  const [animal, setAnimal] = useState<string>(wordCategory[1]);
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
      <h1>The Category is {wordCategory[0]}</h1>
      {incorrectAnswer > 7 && <h2>The Correct Answer was:</h2>}
      <div className={cx("lettercontainer")}>{stateElements}</div>
      <WrongAnswer
        incorrectAnswer={incorrectAnswer}
        animal={animal}
        setStateElements={setStateElements}
      />
      {!nextButton && (
        <Buttons
          animal={animal}
          stateElements={stateElements}
          setStateElements={setStateElements}
          setincorrectAnswer={setincorrectAnswer}
        />
      )}
      {!nextButton && (
        <InputAnswer
          animal={animal}
          setStateElements={setStateElements}
          setincorrectAnswer={setincorrectAnswer}
        />
      )}
      <>Incorrect Tries:{incorrectAnswer}</>
      <NextQuestion
        setStateElements={setStateElements}
        setincorrectAnswer={setincorrectAnswer}
        animal={animal}
        setNextButton={setNextButton}
        nextButton={nextButton}
        setAnimal={setAnimal}
        wordCategory={wordCategory}
      />
    </div>
  );
};

export default WordGame;
