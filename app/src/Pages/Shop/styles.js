import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CoinsDiv = styled.div`
  background-color: lightblue;
  height: 400px;
  width: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.5rem;
  overflow: auto;
  padding: 1rem;
`

export {
  Page,
  CoinsDiv
}