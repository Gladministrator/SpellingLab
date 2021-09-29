import { useRef } from "react";
import { IDivprops } from "../../../types/types";
interface IProps {
  animal: string;
  setStateElements: React.Dispatch<React.SetStateAction<IDivprops[]>>;
  setincorrectAsnwer: React.Dispatch<React.SetStateAction<number>>;
}

const InputAnswer = ({ animal, setStateElements, setincorrectAsnwer }: IProps): JSX.Element => {
  const valueref = useRef<HTMLInputElement>(null);

  function handleClick(): void {
    if (valueref.current) {
      valueref.current.value !== "" ? handleEntry() : alert("Please enter a value");
    }
  }

  function handleEntry() {
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
      setincorrectAsnwer((prev) => prev + 1);
    }
  }

  return (
    <>
      <input ref={valueref} placeholder={"Enter Answer Here"}></input>
      <button onClick={handleClick}>Submit Answer</button>
    </>
  );
};
export default InputAnswer;
