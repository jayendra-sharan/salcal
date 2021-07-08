export const getNumber = text => {
  return isNaN(parseInt(text, 10)) ? 0 : parseInt(text, 10);
};
