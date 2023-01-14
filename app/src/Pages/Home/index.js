import React from "react"
import { Title, SubTitle } from "./styles"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
        Aki jas uma descrição
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