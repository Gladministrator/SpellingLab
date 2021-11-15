import React, { useEffect, useState } from "react";
import { IDivprops, ICategory } from "../../types/types";
import WordGameSass from "./WordGame.module.scss";
import Buttons from "./Buttons/Buttons";
import WrongAnswer from "./WrongAnswers/WrongAnswers";
import InputAnswer from "./InputAnswer/InputAnswer";
import NextQuestion from "./NextQuestion/NextQuestion";
import classNames from "classnames/bind";

let cx = classNames.bind(WordGameSass);

export interface IGameProps {
  text: JSX.Element;
  setText: React.Dispatch<React.SetStateAction<JSX.Element>>;
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

      incorrectAnswer < 7 &&
        setText(
          <>
            <h1 className={cx("correct-answer")}>Good Job!</h1>
            <div className={cx("firework")} id="firework1">
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
              <div className={cx("firework-element")}></div>
            </div>
          </>
        );
    }
  }, [stateElements]);

  return (
    <div className={cx("main-container")}>
      <>{text}</>
      <div className={cx("lettercontainer")}>{stateElements}</div>
      {!nextButton && (
        <WrongAnswer
          incorrectAnswer={incorrectAnswer}
          animal={animal}
          setStateElements={setStateElements}
          setText={setText}
        />
      )}
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
