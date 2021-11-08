import { categories } from "../../WordLists";
import { IQuestionsProps } from "../../../types/types";
import { ICategories } from "../../../types/types";
import QuestionsCSS from "./Questions.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(QuestionsCSS);

function Questions({ setWordCategory, setPoints }: IQuestionsProps) {
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
        <h1 className={cx("category-heading")}>Select a category</h1>
        <div className={cx("categories-container")}>{words()}</div>
      </>
    </div>
  );
}

export default Questions;
