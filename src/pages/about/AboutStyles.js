import styled, { css } from 'styled-components';

export const AboutContainer = styled.section`
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

export const AboutContentsWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    top: 10%;
  }
`;

export const AboutTitle = styled.h1`
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

export const AboutSubTitle = styled.p`
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

export const AboutMainContentsWrapper = styled.div`
  width: 100%;
`;

export const AboutCompanyMission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 50px;
  h2 {
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
  }

  p {
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
    color: ${({ theme }) => theme.colors.buttonColor};
    margin: 30px 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const AboutCardSection = styled.div`
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.textLight};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  h2 {
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  h4 {
    text-transform: capitalize;
    font-size: 14px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    height: 100%;
    padding: 20px 0;

    h4 {
      text-align: center;
    }
  }
`;

export const AboutCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    flex-direction: column;
  }
`;

export const AboutImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  /* margin-top: 50px; */
  background-color: ${({ theme }) => theme.colors.mainColor};
  margin-top: 100px;
  padding: 0 20px;

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    flex-direction: column;
    height: 100%;
    padding: 20px 0;
  }
`;

export const AboutImgBox = styled.div`
  width: 200px;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
