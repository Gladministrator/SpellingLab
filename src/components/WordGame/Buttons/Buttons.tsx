import { IButtonProps, IDivprops } from "../../../types/types";

const Buttons = ({ animal, stateElements, setStateElements }: IButtonProps) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  function handleClick(letter: string): void {
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
    }
  }

  const alphabutton = alphabet.map((item, index) => {
    return (
      <button onClick={() => handleClick(item)} key={index}>
        {item}
      </button>
    );
  });
  return <div>Here are your buttons{alphabutton}</div>;
};

export default Buttons;
