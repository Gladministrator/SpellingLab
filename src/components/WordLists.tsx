interface ICategories {
  Animals: string[];
  "Game Characters": string[];
  Sports: string[];
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

export const sports: string[] = [
  "Sports",
  "Soccer",
  "Basketball",
  "Tennis",
  "Baseball",
  "Golf",
  "Hockey",
  "Cricket",
  "Football",
  "Badminton",
  "Wrestling",
  "Volleyball",
  "Boxing",
];

export const categories: ICategories = {
  Animals: categoryAnimals,
  "Game Characters": categoryVideoGameCharacter,
  Sports: sports,
};
