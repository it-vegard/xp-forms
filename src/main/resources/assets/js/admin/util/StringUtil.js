export const textToName = (text) => {
  if (!text) {
    return null;
  }
  return text.replace(' ', '_').replace(/[()]/g, '').toLowerCase();
};

export const concatClassNames = (...classes) => classes.filter(classN => classN).join(' ').trim();
