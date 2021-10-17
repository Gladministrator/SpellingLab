interface ICategories {
  Animals: string[];
  "Game Characters": string[];
}

export const categoryAnimals: string[] = [
  "Animals",
  "Goose",
  "Rat",
  "Moose",
  "Goat",
  "Dolphin",
  "Crocodile",
  "Wolf",
  "Bird",
  "Skunk",
  "Mouse",
  "Cheetah",
  "Lion",
  "Zebra",
  "Panda",
];

export const categoryVideoGameCharacter: string[] = [
  "Game Characters",
  "Mario",
  "Luigi",
  "Donkey Kong",
  "Kirby",
  "Princess Peach",
  "Lucario",
  "Pikachu",
  "Samus",
];

export const categories: ICategories = {
  Animals: categoryAnimals,
  "Game Characters": categoryVideoGameCharacter,
};
