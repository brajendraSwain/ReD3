import styled from "styled-components";

// Styled components
export const ChartContainer = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  box-sizing: border-box;
`;

export const Title = styled.h3`
  text-align: center;
  color: #333;
  margin: 0 0 20px 0;
  font-size: 18px;
`;

export const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

export const LegendColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  border-radius: 2px;
`;
