import { CoinsService } from '../../Services/coinsService';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Page, FormDiv, Display, Container, SubTitle, ButtonDiv } from "./styles";
import frame from "../../assets/coinSprite.png";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Bank = () => {

  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  const [color, setColor] = useState("yellow");
  const [textColor, setTexteColor] = useState("black");
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate()


  const createCoin = () => {
    const coinsService = new CoinsService()

    if (value === null || name === null || color === null) {
      alert('por favor, acrescente um nome e valor válido.');
      return 0;
    }

    if (coinsService.findCoinByName(name)) {
      alert('Já existe uma Bit moeda com esse nome, ao menos sejamos criativos!');
      setName(null)
      return;
    }

    coinsService.addNewCoin(name, value, color, textColor, amount)
    navigate("/loja")
  }

  return (
    <Page>
      <h1>
        Banco
      </h1>
      <SubTitle>
        Criar sua moeda
      </SubTitle>
      <Container>
        <FormDiv>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Insira o nome da sua Bit coin</Form.Label>
              <Form.Control
                type="text"
                placeholder="algoritmos coin"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}

              />
              <Form.Label>Insira o valor da sua Bit coin</Form.Label>
              <Form.Control
                type="number"
                value={value}
                onChange={(e) => {
                  setValue(Math.floor(e.target.value))
                }}
              />
              {/* <Form.Label>Insira a imagem da sua Bit coin</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setBackground(e.target.value)
                }}
              /> */}
              <Form.Label>Selecione a cor da sua Bit coin</Form.Label>
              <Form.Control
                type="color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value)
                }}
              />
              <Form.Label>Selecione a cor do texto da sua Bit coin</Form.Label>
              <Form.Control
                type="color"
                value={textColor}
                onChange={(e) => {
                  setTexteColor(e.target.value)
                }}
              />
              <Form.Label>Selecione quantas moedas estarão disponiveis no mercado</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(Math.floor(e.target.value))
                }}
              />
            </Form.Group>
          </Form>
        </FormDiv>
        <Display>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              height: "100px",
              width: "100px",
              backgroundImage: `url(${frame})`,
              backgroundColor: color || "yellow",
              backgroundSize: "100px",
              color: textColor || "black",
              flexDirection: "column"
            }}
          >
            <h2
              style={{
                margin: "0px"
              }}
            >
              {value}
            </h2>
            {name}
          </div>
        </Display>
      </Container>
      <ButtonDiv>
        <Button
          onClick={
            () => {
              navigate("/loja")
            }
          }
          variant="danger"
        >
          Voltar
        </Button>
        <Button
          onClick={
            () => {
              createCoin()
            }
          }
        >
          Processar Bit-moeda
        </Button>
      </ButtonDiv>
    </Page>
  )
}

export {
  Bank
}