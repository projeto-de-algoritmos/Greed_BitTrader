import coins from "../Util/data";

export class CoinsService {

  setCoinsLocalStorage() {
    localStorage.setItem("coins", JSON.stringify(coins));
  }

  getCoins() {
    const allCoins = localStorage.getItem("coins") ?? coins;

    return JSON.parse(allCoins);
  }

  findCoinByName(name) {
    const allCoins = this.getCoins() ?? coins
    const index = allCoins.findIndex(coin => coin.name === name);

    if (index !== -1) {
      return allCoins[index];
    }

    return null;
  }

  addNewCoin(name, value, color, textColor, amount) {
    const newCoin = {
      name, value, color, textColor, amount
    }

    let allCoins = this.getCoins();
    allCoins.push(newCoin);

    allCoins.sort(function(a, b) {
      return a.value - b.value;
  })

    localStorage.setItem("coins", JSON.stringify(allCoins))
  }
}