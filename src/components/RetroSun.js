import React from 'react';
import styled from 'styled-components';

const StyledSun = styled.div`
  position: absolute;
  left: 50%;
  top: 2%;
  transform: translateX(-50%);
  width: 15vw;
  height: 15vw;
  border-radius: 200rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.sunTop},
    ${({ theme }) => theme.colors.sunBottom}
  );
  box-shadow: 0 0 50rem ${({ theme }) => theme.colors.sunShining};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  z-index: 2;
`;

const SunLines = styled.div`
  width: 100%;
  height: 10vh;
  background-color: transparent;
  transform: translateY(${({ lineOffset }) => lineOffset}vw);
`;

const SunLine = styled.div`
  width: 100%;
  height: ${({ h }) => h}vh;
  margin-top: ${({ mgt }) => mgt}vh;
  background-color: #000;
`;

const RetroSun = () => {
  return (
    <StyledSun>
      <SunLines lineOffset={10}>
        <SunLine h={1} mgt={0} />
        <SunLine h={1.5} mgt={1.5} />
        <SunLine h={2} mgt={2} />
      </SunLines>
    </StyledSun>
  );
};

export default RetroSun;
