import { categories } from "./WordLists";
import { IQuestionsProps } from "../types/types";
import { ICategories } from "../types/types";

function Questions({ setWordCategory, setPlayers, setPoints, players }: IQuestionsProps) {
  function words() {
    let array: JSX.Element[] = [];
    for (let items in categories) {
      array.push(
        <button onClick={() => setWordCategory(categories[items as keyof ICategories])} key={items}>
          {items}
        </button>
      );
    }
    return array;
  }
  return (
    <div>
      <>
        <p>Select the category</p>
        <div>{words()}</div>
      </>
    </div>
  );
}

export default Questions;
