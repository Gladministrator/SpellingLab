import React, { useEffect, useState } from "react";
import { IPoints, IDivprops } from "../../types/types";
import WordGameSass from "./WordGame.module.scss";
import classNames from "classnames/bind";
import Buttons from "./Buttons/Buttons";

let cx = classNames.bind(WordGameSass);

export interface IGameProps {
  points: IPoints;
  setPoints: (param: IPoints) => void;
  players: number | undefined;
  wordCategory: string[];
}

const WordGame = ({ points, setPoints, players, wordCategory }: IGameProps) => {
  const [nextButton, setNextButton] = useState<Boolean>(false);
  const [animal, setAnimal] = useState<string>(wordCategory[0]);
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
    //show button if all div classnames are undefined aka displayed
    if (stateElements.every((div) => div.props.className === undefined)) {
      setAnimal(wordCategory[wordCategory.indexOf(animal) + 1]);
      setNextButton(true);
      console.log("new_word");
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
  };

  return (
    <div>
      <h1>The Category is : {}</h1>
      {animal}
      <div className={cx("lettercontainer")}>{stateElements}</div>
      <Buttons animal={animal} stateElements={stateElements} setStateElements={setStateElements} />
      {nextButton && <button onClick={nextWord}>Next Word</button>}
    </div>
  );
};

export default WordGame;
