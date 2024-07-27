export const declensionOrder = (count: number) => {
  const remainder10 = count % 10;
  const remainder100 = count % 100;

  if (remainder10 === 1 && remainder100 !== 11) {
    return "Продукт";
  } else if (
    remainder10 >= 2 &&
    remainder10 <= 4 &&
    !(remainder100 >= 12 && remainder100 <= 14)
  ) {
    return "Продукта";
  } else {
    return "Подуктов";
  }
};
