import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledGrid = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(50, minmax(0.5rem, 1fr));
  grid-auto-rows: 2rem;
  justify-content: center;
  align-content: end;
  transform: perspective(10rem) translate3d(0, 0, 0) scale3d(2.5, 1, 1)
    rotate3d(1, 0, 0, 55deg);
  z-index: 1;
`;

const StyledHorizLine = styled.div`
  grid-column: 1 / -1;
  grid-row: ${({ lineRow }) => lineRow} / ${({ lineRow }) => lineRow + 1};
  position: relative;
`;

const moveLine = keyframes`
  0% {
    top: 0%;
  }
  100% {
    top: 100%;
  }
`;

const HorlineNeon = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grid};
  height: ${({ theme }) => theme.sizes.gridLine};
  transition: all 0.3s;
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.grid};
  animation: 0.3s linear 0s ${moveLine} infinite;
`;

const VertlineNeon = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grid};
  clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
  width: ${({ theme }) => theme.sizes.gridLine};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.grid};
`;

const VertLine = styled.div`
  position: relative;
  grid-row: 2 / 22;
  grid-column: ${({ lineCol }) => lineCol} / span 1;
  /* border-right: ${({ theme }) => theme.sizes.gridLine} solid
    ${({ theme }) => theme.colors.grid}; */
`;

const renderHorizLines = (count) => {
  return Array(count)
    .fill('')
    .map((item, i) => (
      <StyledHorizLine key={i} lineRow={i + 2}>
        <HorlineNeon />
      </StyledHorizLine>
    ));
};

const renderVertLines = (count) => {
  return Array(count)
    .fill('')
    .map((item, i) => (
      <VertLine key={`vertical ${i}`} lineCol={i}>
        <VertlineNeon />
      </VertLine>
    ));
};

const NeonGrid = () => {
  return (
    <StyledGrid>
      {renderHorizLines(20)}
      {renderVertLines(50)}
      <VertLine />
    </StyledGrid>
  );
};

export default NeonGrid;
