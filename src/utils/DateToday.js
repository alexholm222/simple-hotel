
export function setDate() {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate()
  
 
  const dateText = `${day < 10 ? `0${day}` : `${day}`}.${month + 1 < 10 ? `0${month + 1}` : `${month + 1}`}.${year}`;
  return dateText;
};

