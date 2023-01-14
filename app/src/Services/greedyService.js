import coins from '../Util/data';

export class GreedService  {
    findmin(value){
        let answer = [];
        console.log(answer, "antes do for");
        for(let i = coins.length-1; i >= 0; i--){
            console.log(coins[i].valor, "valor");
            while(value >= coins[i].valor){
                value -= coins[i].valor;
                answer.push(coins[i].name);
                console.log(answer, "dentro do for");
                

            }
        // find min value
        // return min value
        }
        console.log(answer, "depois do for");
        return answer;
    }
};

