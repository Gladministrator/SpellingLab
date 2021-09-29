import { IDivprops } from "../../../types/types";
import classNames from "classnames/bind";
import NextQuestionSass from "./NextQuestion.module.scss";

let cx = classNames.bind(NextQuestionSass);

interface IProps {
  setStateElements: React.Dispatch<React.SetStateAction<IDivprops[]>>;
  setincorrectAsnwer: React.Dispatch<React.SetStateAction<number>>;
  animal: string;
  setNextButton: React.Dispatch<React.SetStateAction<boolean>>;
  nextButton: boolean;
}

const NextQuestion = ({
  setStateElements,
  setincorrectAsnwer,
  animal,
  setNextButton,
  nextButton,
}: IProps) => {
  const nextWord = () => {
    setStateElements(
      animal.split("").map((item, index) => {
        return (
          <div className={cx(NextQuestionSass.box)} key={index}>
            <p className={cx(NextQuestionSass.letters)}>{item}</p>
          </div>
        );
      })
    );
    setincorrectAsnwer(0);
    setNextButton(false);
  };
  return (
    <div>
      {nextButton && <button onClick={nextWord}>Next Word</button>}
      {!nextButton && <button onClick={nextWord}>SKIP:FEATURE NOT AVAILABLE LOLS</button>}
    </div>
  );
};

export default NextQuestion;
