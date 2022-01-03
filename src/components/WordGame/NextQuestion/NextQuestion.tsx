import { IDivprops, ICategory } from "../../../types/types";
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
  wordCategory: ICategory;
  setWordCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  setText: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

const NextQuestion = ({
  setStateElements,
  setincorrectAnswer,
  animal,
  setNextButton,
  nextButton,
  setAnimal,
  wordCategory,
  setWordCategory,
  setText,
}: IProps) => {
  const nextWord = () => {
    if (wordCategory[wordCategory.indexOf(animal) + 1]) {
      setAnimal(wordCategory[wordCategory.indexOf(animal) + 1]);
      setincorrectAnswer(0);
      setNextButton(false);
      setText(<h1>Category: {wordCategory[0]}</h1>);
    } else {
      setText(<h1>End of the Game! Click below to return to the menu</h1>);
    }
  };

  const skipWord = () => {
    setincorrectAnswer(7);
    setNextButton(true);
    setText(<h1>The Answer Was:</h1>);
    setStateElements(
      animal.split("").map((letter, index) => {
        return (
          <div key={index}>
            <p>{letter}</p>
          </div>
        );
      })
    );
  };

  const returnMainMenu = () => {
    setWordCategory("None");
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
        <button className={cx("skip-button")} onClick={skipWord}>
          <div className={cx("skip-text-container")}>
            <div className={cx("text")}>Skip Question</div>
            <div className={cx("arrow")}>&#10132;</div>
          </div>
        </button>
      )}
      <button className={cx("return-main")} onClick={returnMainMenu}>
        Return to Main Menu
      </button>
    </>
  );
};

export default NextQuestion;
