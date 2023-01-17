import { GreedService } from "../../Services/greedyService";
import { Coin } from "../../Components/Coin";
// import { CoinsService } from "../../Services/coinsService";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Page, CoinsDiv } from "./styles";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import candy from "../../assets/doce.png"
import sad from "../../assets/sad.jpg"

const ShopPage = () => {
  const [value, setValue] = useState(0);
  const greedyService = new GreedService();
  const navigate = useNavigate()

  let listOfCoins = greedyService.findmin(value)

  const renderCoins = () => {
    const funcGreedyService = new GreedService();
    let funcListOfCoins = funcGreedyService.findmin(value)

    return funcListOfCoins.coins?.length ? funcListOfCoins.coins.map(element => {
      return (
        <Coin
          coinName={element}
        />
      )
    }) : null;
  };

  const renderImage = (img) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={img}
          alt="doce"
          width="100px"
        >
        </img>
      </div>
    )
  };

  return (
    <Page>
      <h1>
        Loja
      </h1>
      <Button
        style={{
          margin: '1rem'
        }} variant="outline-primary"
        onClick={() => {
          navigate("/banco")
        }}
      >
        Criar sua moeda agora mesmo com 100% de desconto!
      </Button>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Insira o valor que deseja trocar</Form.Label>
          <Form.Control
            type="number"
            placeholder="valor"
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
        </Form.Group>
      </Form>
      <div
        hidden={(listOfCoins.trash === null)}
      >
        {(listOfCoins.trash === "não temos moedas para abater o seu valor... aceita troco em bala?") ? renderImage(candy) : null}
        {(listOfCoins.trash === "não temos dinheiro suficiente. Porque não inflacionamos nosso mercado criando mais moedas?!") ? renderImage(sad) : null}

        {listOfCoins.trash}
      </div>
      <CoinsDiv>
        {renderCoins()}
      </CoinsDiv>
    </Page >
  )
}

export {
  ShopPage
}