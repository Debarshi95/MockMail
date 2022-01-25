export const getFilterText = (text, filter = '') => {
  const filterText = text.split(filter)[1];
  return filterText;
};
