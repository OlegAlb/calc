export interface IColors extends IBaseColors {
  transparent: string;
  white: string;
  black: string;
  orange: string;
  lightGrey: string;
  darkGrey: string;
}

interface IBaseColors {
  [key: string]: string;
}
