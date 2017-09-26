export const textToName = (text) => {
  if (!text) {
    return null;
  } else {
    return text.replace(' ', '_').toLowerCase();
  }
};

export const concatClassNames = (...classes) => {
  const actualClasses = [];
  for (let classN of classes) {
    if (classN) {
      actualClasses.push(classN);
    }
  }
  return actualClasses.join(' ').trim();
};
