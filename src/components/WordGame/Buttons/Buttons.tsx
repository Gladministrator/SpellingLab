import { IButtonProps, IDivprops } from "../../../types/types";
import AlphabetCSS from "./Buttons.module.scss";
import classNames from "classnames/bind";
import { alphabet } from "./Alphabet";
import { useEffect, useRef, useState } from "react";

let cx = classNames.bind(AlphabetCSS);

const Buttons = ({
  animal,
  stateElements,
  setStateElements,
  setincorrectAnswer,
  incorrectAnswer,
}: IButtonProps) => {
  const refData = useRef<Array<string>>([]);
  const [buttonState, setButtonState] = useState<JSX.Element[]>(
    alphabet.map((item, index) => {
      return (
        <button className={cx("letter")} onClick={() => handleClick(item)} key={index}>
          {item}
        </button>
      );
    })
  );

  useEffect(() => {
    setButtonState(
      alphabet.map((item, index) => {
        if (refData.current.includes(item)) {
          return (
            <button className={cx("letter")} disabled={true} key={index}>
              {item}
            </button>
          );
        } else {
          return (
            <button className={cx("letter")} onClick={() => handleClick(item)} key={index}>
              {item}
            </button>
          );
        }
      })
    );
  }, [stateElements, incorrectAnswer]);

  function handleClick(letter: string): void {
    refData.current.push(letter);
    if (animal.toUpperCase().includes(letter)) {
      let char = animal.split("");
      let array: IDivprops[] = [...stateElements];
      char.map((item: string, index: number): IDivprops | boolean => {
        return (
          letter.toLowerCase() === item.toLowerCase() &&
          (array[index] = (
            <div key={index}>
              <p>{animal[index]}</p>
            </div>
          ))
        );
      });
      setStateElements(array);
    } else {
      setincorrectAnswer((prev) => prev + 1);
    }
  }

  return <div className={cx("alphabet-container")}>{buttonState}</div>;
};

export default Buttons;
