import { InputStyleType } from '../components/atoms/Input/Input.tsx';

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isEnoughCharacters = (text: string): boolean => {
  if (!text || text.includes(' ')) {
    return false;
  }
  return text.length >= 8 && text.length <= 64;
};

export const isContainsDigit = (text: string): boolean => {
  return /\d/.test(text);
};

export const isContainsCasedLetters = (text: string): boolean => {
  const hasUpperCase = /[A-Z]/.test(text);
  const hasLowerCase = /[a-z]/.test(text);
  return hasUpperCase && hasLowerCase;
};

export const getInputStyle = (touched: boolean, containsErrors: boolean): InputStyleType => {
  if (!touched) return '';
  if (containsErrors) return 'error';
  return 'success';
};