const choices = ["rock", "paper", "scissors"];

const computerPlay = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};
