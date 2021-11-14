import { IDivprops } from "../../../types/types";
import classNames from "classnames/bind";
import NextQuestionSass from "./NextQuestion.module.scss";
import { useEffect } from "react";

let cx = classNames.bind(NextQuestionSass);

interface IProps {
  setStateElements: React.Dispatch<React.SetStateAction<IDivprops[]>>;
  setincorrectAnswer: React.Dispatch<React.SetStateAction<number>>;
  animal: string;
  setNextButton: React.Dispatch<React.SetStateAction<boolean>>;
  nextButton: boolean;
  setAnimal: React.Dispatch<React.SetStateAction<string>>;
  wordCategory: string[];
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const NextQuestion = ({
  setStateElements,
  setincorrectAnswer,
  animal,
  setNextButton,
  nextButton,
  setAnimal,
  wordCategory,
  setText,
}: IProps) => {
  const nextWord = () => {
    setAnimal(wordCategory[wordCategory.indexOf(animal) + 1]);
    setincorrectAnswer(0);
    setNextButton(false);
    setText(`The category is ${wordCategory[0]}`);
  };

  useEffect(() => {
    setStateElements(() =>
      animal.split("").map((item, index) => {
        if (item === " ") {
          return (
            <div key={index}>
              <p> </p>
            </div>
          );
        } else {
          return (
            <div className={cx(NextQuestionSass.box)} key={index}>
              <p className={cx(NextQuestionSass.letters)}></p>
            </div>
          );
        }
      })
    );
  }, [animal]);
  return (
    <>
      {nextButton && (
        <button className={cx("next-button")} onClick={nextWord}>
          Next Word
        </button>
      )}
      {!nextButton && (
        <button className={cx("skip-button")} onClick={nextWord}>
          <div className={cx("skip-text-container")}>
            <div className={cx("text")}>Skip Question</div>
            <div className={cx("arrow")}>&#10132;</div>
          </div>
        </button>
      )}
    </>
  );
};

export default NextQuestion;
