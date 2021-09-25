import { useRef } from "react";

const InputAnswer = (): JSX.Element => {
  const valueref = useRef<null>(null);
  function handleClick() {
    const value: any = valueref.current;
    console.log(value.value);
  }
  return (
    <>
      <input ref={valueref}></input>
      <button onClick={handleClick}>Submit Answer</button>
    </>
  );
};
export default InputAnswer;
