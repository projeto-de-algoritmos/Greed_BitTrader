import React from "react"
import { Title, SubTitle } from "./styles"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { CoinsService } from "../../Services/coinsService";

const Home = () => {
  const navigate = useNavigate();
  const coinsService = new CoinsService()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightBlue",
        padding: '25px',
        alignItems: "center"
      }}
    >
      <Title>
        Bem vindo ao Bit Trader!
      </Title>
      <SubTitle>
        Crie sua moedas agora!
      </SubTitle>

      <div
        style={{
          marginTop: "15rem",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button
          style={{
            margin: '1rem'
          }} variant="outline-primary"
          onClick={() => {
            navigate("/loja")
            coinsService.setCoinsLocalStorage()
          }}
        >
          Vamos começar!
        </Button>
      </div>
    </div>
  )
}

export {
  Home
}