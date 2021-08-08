export const shuffle = (array: any[]) => {
  let currentIndex = array.length;
  while (0 !== currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
