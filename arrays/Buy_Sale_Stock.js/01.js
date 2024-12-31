var maxProfit = function (prices) {
  //Brutforce approach Time: O(n²) - nested loops Space: O(1) - only stores maxProf and low
  //   let maxProf = 0;
  //   let low = Infinity;
  //   for (let i = 0; i < prices.length; i++) {
  //     low = prices[i];
  //     for (let j = i + 1; j < prices.length; j++) {
  //       if (low == prices[prices.length]) {
  //         maxProf = 0;
  //       } else {
  //         let high = prices[j];
  //         maxProf = Math.max(maxProf, high - low);
  //       }
  //     }

  //Optimized solution Time: O(n) - single pass Space: O(1) - only stores maxProf and lowerstPrice
  let lowerstPrice = Infinity;
  let maxProf = 0;
  for (let price of prices) {
    if (price < lowerstPrice) {
      lowerstPrice = price;
    }
    maxProf = Math.max(maxProf, price - lowerstPrice);
  }

  return maxProf;
};

let prices = [7, 2, 5, 3, 6, 4, 1];
console.log(maxProfit(prices));
