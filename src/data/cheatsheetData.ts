export interface CheatItem {
  title: string;
  description: string;
  code: string;
  category: string;
}

export const cheatsheetData: CheatItem[] = [
  {
    title: "Variables (let, const, var)",
    description: "Use let and const instead of var for block scoping.",
    code: `let name = "Alice";\nconst age = 30;`,
    category: "Basics",
  },
  {
    title: "Arrow Functions",
    description: "Shorter function syntax.",
    code: `const add = (a, b) => a + b;`,
    category: "Functions",
  },
  // Add more...
];
