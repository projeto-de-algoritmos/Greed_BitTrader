import { GreedService } from "../../Services/greedyService";


const ShopPage = () => {
  const greedyService = new GreedService();

  console.log(greedyService.findmin(300));

  return (
    <div>Moeda</div>
  )
}

export {
  ShopPage
}