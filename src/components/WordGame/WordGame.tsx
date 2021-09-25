import React, { useEffect, useState } from "react";
import { IPoints, IDivprops, ICategory } from "../../types/types";
import WordGameSass from "./WordGame.module.scss";
import classNames from "classnames/bind";
import Buttons from "./Buttons/Buttons";
import InputAnswer from "./InputAnswer/InputAnswer";

let cx = classNames.bind(WordGameSass);

export interface IGameProps {
  points: IPoints;
  setPoints: (param: IPoints) => void;
  players: number | undefined;
  wordCategory: ICategory;
}

const WordGame = ({ points, setPoints, players, wordCategory }: IGameProps) => {
  const [nextButton, setNextButton] = useState<Boolean>(false);
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
      setAnimal(wordCategory[wordCategory.indexOf(animal) + 1]);
      setNextButton(true);
    }
  }, [stateElements]);

  const nextWord = () => {
    setStateElements(
      animal.split("").map((item, index) => {
        return (
          <div className={cx(WordGameSass.box)} key={index}>
            <p className={cx(WordGameSass.letters)}>{item}</p>
          </div>
        );
      })
    );
    setNextButton(false);
  };

  return (
    <div className={cx("main-container")}>
      <h1>The Category is {wordCategory[0]}</h1>
      <div className={cx("lettercontainer")}>{stateElements}</div>
      <Buttons animal={animal} stateElements={stateElements} setStateElements={setStateElements} />
      {nextButton && <button onClick={nextWord}>Next Word</button>}
      {!nextButton && <button>SKIP:FEATURE NOT AVAILABLE LOLS</button>}
      <InputAnswer />
    </div>
  );
};

export default WordGame;
