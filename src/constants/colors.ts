export type Theme = {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;    

  primary: string;
  primaryVariant: string;

  secondary: string;
  secondaryVariant: string;

  accentPurple: string;
  accentBrown: string;

  border: string;
  error: string;
  success: string;
  warning: string;
};

export const LightTheme: Theme = {
  background: '#FFFFFF',
  surface: '#F7F5F2',

  text: '#1A1A1A',
  textSecondary: '#6B6B6B',

  primary: '#AF52DE',
  primaryVariant: '#8E44AD',

  secondary: '#A2845E',
  secondaryVariant: '#7A6246',

  accentPurple: '#C084FC',
  accentBrown: '#C2A07A',

  border: '#E5E0D8',

  error: '#D92D20',
  success: '#2E7D32',
  warning: '#ED6C02',
};

export const DarkTheme: Theme = {
  background: '#121212',
  surface: '#1E1E1E',

  text: '#FFFFFF',
  textSecondary: '#B3B3B3',

  primary: '#BF5AF2',
  primaryVariant: '#9B4DCA',

  secondary: '#8B6F47',
  secondaryVariant: '#6A5335',

  accentPurple: '#D0A2FF',
  accentBrown: '#B89B72',

  border: '#2A2A2A',

  error: '#FF6B6B',
  success: '#4CAF50',
  warning: '#FFA726',
};