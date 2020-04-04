import React from 'react';
import styled from 'styled-components';
import '../svg/sunmask.svg';

const sunSize = '500px';

const StyledSun = styled.div`
  position: absolute;
  left: 50%;
  top: 2%;
  transform-origin: top center;
  transform: translateX(-50%) scale(0.5);
  width: ${sunSize};
  height: ${sunSize};
  background: transparent
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.sunTop},
      ${({ theme }) => theme.colors.sunBottom}
    );
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  clip-path: url(#mask);
  z-index: 2;
`;

StyledSun.defaultProps = {
  at: 80,
  moveY: 0,
};

const SunWrapper = styled.div`
  transform: scale(0.5);
  filter: drop-shadow(0 0 20vw ${({ theme }) => theme.colors.sunBottom})
    drop-shadow(0 0 5vw ${({ theme }) => theme.colors.sunBottom});
`;

const renderMask = () => (
  <svg
    id='sunmask'
    data-name='sunmask'
    xmlns='http://www.w3.org/2000/svg'
    width='0'
    height='0'
  >
    <title>sunmask</title>
    <defs>
      <clipPath id='mask'>
        <path
          d='M491.32,315.49A250.38,250.38,0,0,0,500,250C500,111.93,388.07,0,250,0S0,111.93,0,250a250.38,250.38,0,0,0,8.68,65.49Z'
          transform='translate(0.5 0.5)'
          style={{ fill: '#e7b111', stroke: '#000', strokeMiterlimit: 10 }}
        />
        <path
          d='M52,402.65a250.5,250.5,0,0,0,27.74,30.4H420.24A250.5,250.5,0,0,0,448,402.65Z'
          transform='translate(0.5 0.5)'
          style={{ fill: '#e7b111', stroke: '#000', strokeMiterlimit: 10 }}
        />
        <path
          d='M118.73,462.78a250.1,250.1,0,0,0,262.54,0Z'
          transform='translate(0.5 0.5)'
          style={{ fill: '#e7b111', stroke: '#000', strokeMiterlimit: 10 }}
        />
        <path
          d='M18.51,344.54A248,248,0,0,0,30,368.86H470a248,248,0,0,0,11.51-24.32Z'
          transform='translate(0.5 0.5)'
          style={{ fill: '#e7b111', stroke: '#000', strokeMiterlimit: 10 }}
        />
      </clipPath>
    </defs>
  </svg>
);

const RetroSun = () => {
  return (
    <SunWrapper>
      {renderMask()}
      <StyledSun at={80}></StyledSun>
    </SunWrapper>
  );
};

export default RetroSun;
