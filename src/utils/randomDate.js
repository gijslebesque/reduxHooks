export const randomDate = () => {
  const date = new Date(new Date() * Math.random());
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
