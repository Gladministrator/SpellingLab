import { IDivprops } from "../../../types/types";
import classNames from "classnames/bind";
import NextQuestionSass from "./NextQuestion.module.scss";
import { useEffect } from "react";

let cx = classNames.bind(NextQuestionSass);

interface IProps {
  setStateElements: React.Dispatch<React.SetStateAction<IDivprops[]>>;
  setincorrectAsnwer: React.Dispatch<React.SetStateAction<number>>;
  animal: string;
  setNextButton: React.Dispatch<React.SetStateAction<boolean>>;
  nextButton: boolean;
  setAnimal: React.Dispatch<React.SetStateAction<string>>;
  wordCategory: string[];
}

const NextQuestion = ({
  setStateElements,
  setincorrectAsnwer,
  animal,
  setNextButton,
  nextButton,
  setAnimal,
  wordCategory,
}: IProps) => {
  const nextWord = () => {
    setAnimal(wordCategory[wordCategory.indexOf(animal) + 1]);
    setincorrectAsnwer(0);
    setNextButton(false);
  };

  useEffect(() => {
    setStateElements(() =>
      animal.split("").map((item, index) => {
        return (
          <div className={cx(NextQuestionSass.box)} key={index}>
            <p className={cx(NextQuestionSass.letters)}>{item}</p>
          </div>
        );
      })
    );
  }, [animal]);
  return (
    <div>
      {nextButton && <button onClick={nextWord}>Next Word</button>}
      {!nextButton && <button onClick={nextWord}>SKIP</button>}
    </div>
  );
};

export default NextQuestion;
