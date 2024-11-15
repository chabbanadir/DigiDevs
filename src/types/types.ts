// src/types/types.ts or a relevant TypeScript file

export type Quiz = {
  title: string;
  description: string;
  questions: Question[];
};

export type Question = {
  query: string;
  options: Option[];
  type: 'single' | 'multiple'; // Clearly define expected literal types
  icon: string;
  inputField: boolean;
};

export type Option = {
  text: string;
  value: string;
};
