const balancedString = (s) => {
  return s.split("RL").length - 1;
};

console.log(balancedString("RLRRRLLRLL"));
