import styled, { css } from 'styled-components';

export const DetailsContainer = styled.section`
  ${(theme) =>
    theme.primary &&
    css`
      background-color: ${({ theme }) => theme.colors.mainColor};
    `}
`;
export const DetailsWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  padding: 50px;
  color: ${({ theme }) => theme.colors.mainColor};

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    height: 100vh;
  }

  ${(theme) =>
    theme.primary &&
    css`
      flex-direction: row-reverse;
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: ${({ theme }) => theme.colors.textColor} !important;
    `}
`;

export const DetailsContentsWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20px;
  ${(theme) =>
    theme.primary &&
    css`
      justify-content: flex-end;
      align-items: flex-end;
    `}
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
`;

export const DetailsImgWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`;
export const DetailsTitle = styled.h2`
  /* color: ${({ theme }) => theme.colors.mainColor}; */
  font-size: 60px;
  margin-bottom: 30px;
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 40px;
  }
`;
export const DetailsSubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.darkColor};
  font-size: 35px;
  margin-bottom: 20px;
  font-weight: normal;
  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 25px;
  }
`;
export const DetailsMessage = styled.p`
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: 18px;
  line-height: 28px;
  max-width: 400px;
  width: 100%;
  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 15px;
  }
`;
