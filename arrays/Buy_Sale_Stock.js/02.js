var maxProfit = function (prices) {
  let maxProf = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      maxProf += prices[i] - prices[i - 1];
    }
  }

  return maxProf;
};

let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
