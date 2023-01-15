import { GreedService } from "../../Services/greedyService";
import { Coin } from "../../Components/Coin";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const ShopPage = () => {

  const [value, setValue] = useState();
  const greedyService = new GreedService();
  console.log(greedyService.findmin(300));


  const renderCoins = () => {

    let listOfCoins = greedyService.findmin(123)

    listOfCoins.forEach(element => {
      return (
        <div>
          opa
        </div>
      )
    });
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Insira o valor que deseja trocar</Form.Label>
          <Form.Control
            type="number"
            placeholder="valor"
            onChange={(e) => {
              setValue( e.target.value )
            }}  
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
      {renderCoins()}
    </div>
  )
}

export {
  ShopPage
}