import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
  position: relative;
  width: 100%;
  max-height: 100vh;
  color: ${({ theme }) => theme.colors.textLight};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HowItWorksContentsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  /* padding: 20px; */
  /* margin: auto; */
  transform: translateX(-50%);
  /* @media screen and (max-width: ${({ theme }) =>
    theme.screens.smallerSize}) {
    padding: 5px;
  } */

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    top: 10%;
  }
`;

export const HowItWorksTitle = styled.h1`
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  font-weight: bolder;
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    font-size: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const HowItWorksSubTitle = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  font-weight: bolder;
  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 12px;
  }
`;
