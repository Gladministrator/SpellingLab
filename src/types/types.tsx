export interface IDivprops extends JSX.Element {
  props: React.HTMLProps<HTMLDivElement>;
}

export type ICategory = string[] | "None";

export type ICategories = {
  Animals: string[];
  "Game Characters": string[];
};

export interface IQuestionsProps {
  setWordCategory: (param: ICategory) => void;
  setText: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

export interface IButtonProps {
  animal: string;
  stateElements: IDivprops[];
  setStateElements: React.Dispatch<React.SetStateAction<IDivprops[]>>;
  incorrectAnswer: number;
  setincorrectAnswer: React.Dispatch<React.SetStateAction<number>>;
  setChange: React.Dispatch<React.SetStateAction<number>>;
}
