export const getFormattedDate = (date: Date) => {
  const newDate = new Date(date);

  let day = newDate.getDate().toString();
  let month = (newDate.getMonth() + 1).toString();
  const year = newDate.getFullYear();

  if (+day <= 9) {
    day = `0${day}`;
  }
  if (+month <= 9) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
};
