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