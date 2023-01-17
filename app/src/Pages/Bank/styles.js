import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`

const SubTitle = styled.p`
  text-align: center;
  color: back;
`

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 40vh;
  padding: 1rem;
`;

const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 40vh;
  border: 1px solid black;
`

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  width: 30vw;
`

export {
  Page,
  FormDiv,
  Display,
  Container,
  SubTitle,
  ButtonDiv
}