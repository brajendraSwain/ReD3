import styled from "styled-components";

// Styled components
export const AxisContainer = styled.g`
  .domain {
    stroke: currentColor;
  }

  .tick line {
    stroke: currentColor;
  }

  .tick text {
    fill: currentColor;
    font-size: 12px;
  }

  &.axis-x .tick text {
    text-anchor: middle;
  }

  &.axis-y .tick text {
    text-anchor: end;
  }
`;
