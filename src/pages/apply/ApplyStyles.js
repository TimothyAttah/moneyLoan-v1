import styled, { css } from 'styled-components';

export const ApplyContainer = styled.section`
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

export const ApplyContentsWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    top: 10%;
  }
`;

export const ApplyTitle = styled.h1`
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  font-weight: bolder;

  ${(theme) =>
    theme.primary &&
    css`
      font-size: 50px;
      margin-top: 30px;
    `}
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    font-size: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const ApplySubTitle = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  font-weight: bolder;
  ${(theme) =>
    theme.primary &&
    css`
      font-size: 18px;
      text-transform: capitalize;
      margin-bottom: 30px;
      margin-top: 10px;
      color: ${({ theme }) => theme.colors.mainColor};
    `}
  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 12px;
  }
`;
