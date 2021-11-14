import { useRef } from "react";
import { IDivprops } from "../../../types/types";
import InputAnswerCSS from "./InputAnswer.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(InputAnswerCSS);

interface IProps {
  animal: string;
  setStateElements: React.Dispatch<React.SetStateAction<IDivprops[]>>;
  setincorrectAnswer: React.Dispatch<React.SetStateAction<number>>;
}

const InputAnswer = ({ animal, setStateElements, setincorrectAnswer }: IProps): JSX.Element => {
  const valueref = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (valueref.current) {
      valueref.current.value !== "" ? handleEntry() : alert("Please enter a value");
    }
  };

  const handleEntry = (): void => {
    if (animal.toLowerCase() === valueref.current?.value.toLowerCase()) {
      setStateElements(
        animal.split("").map((letter, index) => {
          return (
            <div key={index}>
              <p>{letter}</p>
            </div>
          );
        })
      );
    } else {
      setincorrectAnswer((prev) => prev + 1);
    }
  };

  return (
    <div className={cx("input-container")}>
      <input className={cx("inputfield")} ref={valueref} placeholder={"Enter Answer Here"}></input>
      <button className={cx("submit-button")} onClick={handleClick}>
        Submit Answer
      </button>
    </div>
  );
};
export default InputAnswer;
