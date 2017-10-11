export const textToName = (text) => {
  if (!text) {
    return null;
  }
  return text.replace(' ', '_').toLowerCase();
};

export const concatClassNames = (...classes) => classes.filter(classN => classN).join(' ').trim();
