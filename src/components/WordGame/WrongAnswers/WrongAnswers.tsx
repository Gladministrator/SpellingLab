import classNames from "classnames/bind";
import WrongAnswerSass from "./WrongAnswers.module.scss";
import { IDivprops } from "../../../types/types";
import { useEffect } from "react";
let cx = classNames.bind(WrongAnswerSass);

interface IProps {
  incorrectAnswer: number;
  animal: string;
  setStateElements: React.Dispatch<React.SetStateAction<IDivprops[]>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const WrongAnswer = ({ incorrectAnswer, animal, setStateElements, setText }: IProps) => {
  useEffect((): void => {
    setStateElements(
      animal.split("").map((letter, index) => {
        return (
          <div key={index}>
            <p>{letter}</p>
          </div>
        );
      })
    );
    incorrectAnswer > 6 && setText("Wrong Answer");
  }, [incorrectAnswer > 6]);
  return (
    <div className={cx("xmarkcontainer")}>
      <div className={cx({ xmarkpending: incorrectAnswer < 1 })}>&#10060;</div>
      <div className={cx({ xmarkpending: incorrectAnswer < 2 })}>&#10060;</div>
      <div className={cx({ xmarkpending: incorrectAnswer < 3 })}>&#10060;</div>
      <div className={cx({ xmarkpending: incorrectAnswer < 4 })}>&#10060;</div>
      <div className={cx({ xmarkpending: incorrectAnswer < 5 })}>&#10060;</div>
      <div className={cx({ xmarkpending: incorrectAnswer < 6 })}>&#10060;</div>
      <div className={cx({ xmarkpending: incorrectAnswer < 7 })}>&#10060;</div>
    </div>
  );
};

export default WrongAnswer;
