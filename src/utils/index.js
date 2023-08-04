const getLetter = (number) => {
  let letter;

  switch (number) {
    case 0:
      letter = "1";
      break;
    case 1:
      letter = "2";
      break;
    case 2:
      letter = "3";
      break;
    case 3:
      letter = "4";
      break;
    default:
      letter = null;
      break;
  }

  return letter;
};

export default getLetter;
