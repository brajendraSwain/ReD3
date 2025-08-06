import React from "react";
import styled from "styled-components";
import BasicChart from "./components/BasicChart/BasicChart";

// Styled components for the app
const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  margin-bottom: 30px;
  border-radius: 8px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 10px 0 0 0;
  font-size: 18px;
  opacity: 0.8;
`;

// Sample data
const sampleData = [
  { name: "January", value: 30 },
  { name: "February", value: 45 },
  { name: "March", value: 60 },
  { name: "April", value: 35 },
  { name: "May", value: 80 },
  { name: "June", value: 55 },
];

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header>
        <Title>React + D3.js + TypeScript</Title>
        <Subtitle>with Styled Components & Vite</Subtitle>
      </Header>

      <BasicChart data={sampleData} width={700} height={300} />
    </AppContainer>
  );
};

export default App;
