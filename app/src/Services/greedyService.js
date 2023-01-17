import { CoinsService } from './coinsService';

export class GreedService {
    findmin(value) {

        const coinsService = new CoinsService()

        let res = {
            trash: null,
            coins: []
        }

        let answer = [];

        let coins = coinsService.getCoins();

        console.log(coins, "ultimo")

        for (let i = coins.length - 1; i >= 0; i--) {
            console.log(coins.length)
            let j = 1;
            while (value >= coins[i].value && (coins[i].amount > j)) {
                value -= coins[i].value;
                answer.push(coins[i].name);
                j++;
            }
        }

        res.coins = answer;

        if (Math.floor(value) !== 0) {

            res.trash = "não temos moedas para abater o seu valor... aceita troco em bala?"

            if(value > coins[0].value) {
                res.trash = "não temos dinheiro suficiente. Porque não inflacionamos nosso mercado criando mais moedas?!"
            }
        } else {
            res.trash = null
        }

        return res;
    }
};

