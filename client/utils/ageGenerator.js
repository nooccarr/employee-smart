const ageGenerator = () => {
  let ages = ['All'];
  for (let i = 18; i <= 80; i++) {
    ages.push(i);
  }
  return ages;
};

export default ageGenerator;