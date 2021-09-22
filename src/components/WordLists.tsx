interface ICategories {
  Animals: string[];
  "Game Characters": string[];
}

export const categoryAnimals: string[] = ["Goose", "Rat", "Moose", "Goat"];

export const categoryVideoGameCharacter: string[] = ["Mario", "Luigi", "Donkey Kong"];

export const categories: ICategories = {
  Animals: categoryAnimals,
  "Game Characters": categoryVideoGameCharacter,
};
