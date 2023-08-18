import { styled } from "styled-components";
import AsideCard from "./components/AsideCard";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <Body>
      <AsideCard />
      <FormComponent />
    </Body>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    max-width: 150rem;
  }
`;
