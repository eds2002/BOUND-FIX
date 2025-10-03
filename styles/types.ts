// Type definitions for the styles system

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface BorderRadius {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

export interface FontSizes {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export interface FontWeights {
  normal: '400';
  medium: '500';
  semibold: '600';
  bold: '700';
}

export interface StyleConstants {
  spacing: Spacing;
  borderRadius: BorderRadius;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
}

export interface ThemeStyles {
  isDark: boolean;
  container: any;
  h1: any;
  h2: any;
  h3: any;
  body: any;
  bodySmall: any;
  label: any;
  caption: any;
  button: any;
  buttonText: any;
  buttonSecondary: any;
  buttonSecondaryText: any;
  card: any;
  input: any;
  inputFocused: any;
  foodCard: any;
  foodCardUnlocked: any;
  foodCardText: any;
  foodCardTextUnlocked: any;
  layout: any;
  spacing: any;
  utility: any;
  constants: StyleConstants;
}
