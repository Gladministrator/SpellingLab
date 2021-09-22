import { categories } from "./WordLists";
import { IQuestionsProps } from "../types/types";
import { ICategories } from "../types/types";

function Questions({ setCategory, setPlayers, setPoints, players }: IQuestionsProps) {
  function words() {
    let array: JSX.Element[] = [];
    for (let items in categories) {
      array.push(
        <button onClick={() => setCategory(categories[items as keyof ICategories])} key={items}>
          {items}
        </button>
      );
    }
    return array;
  }
  return (
    <div>
      {players === undefined && (
        <div>
          <p>Select the number of players:</p>
          <div>
            <button onClick={() => setPlayers(1)}>1</button>
            <button onClick={() => setPlayers(2)}>2</button>
            <button onClick={() => setPlayers(3)}>3</button>
          </div>
        </div>
      )}
      {players !== undefined && (
        <div>
          <p>Select the category</p>
          <div>{words()}</div>
        </div>
      )}
    </div>
  );
}

export default Questions;
