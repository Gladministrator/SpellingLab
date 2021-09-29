import { type } from "os";
import { HTMLProps } from "react";

export interface IDivprops extends JSX.Element {
  props: React.HTMLProps<HTMLDivElement>;
}

export type ICategory = string[];

export type ICategories = {
  Animals: string[];
  "Game Characters": string[];
};

export interface IPoints {
  Player1: number;
  Player2: number;
  Player3: number;
}

export interface IQuestionsProps {
  setWordCategory: (param: ICategory) => void;
  setPlayers: (param: number) => void;
  setPoints: (param: IPoints) => void;
  players: number | undefined;
}

export interface IButtonProps {
  animal: string;
  stateElements: IDivprops[];
  setStateElements: React.Dispatch<React.SetStateAction<IDivprops[]>>;
  setincorrectAsnwer: React.Dispatch<React.SetStateAction<number>>;
}
