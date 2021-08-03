export const fruitFactory = () => {
  const FRUITS = [
    "Apple",
    "Banana",
    "Pineapple",
    "Watermelon",
    "Melon",
    "Orange",
    "Cucumber",
    "Peach",
    "Lemon",
    "Sugar cane",
    "Mango",
    "Guava",
    "Avocado?",
  ];
  let currentIndex = 0;

  return () => {
    currentIndex++;
    return FRUITS[currentIndex];
  };
};
