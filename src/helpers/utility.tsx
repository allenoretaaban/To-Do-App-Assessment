export const formatLongDate = (date) => {
  return '${date.toLocaleDateString()} ${date.toLocaleTimeString()}';
};
