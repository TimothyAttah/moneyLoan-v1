import styled, { css } from 'styled-components';

export const HomeContainer = styled.section`
  position: relative;
  width: 100%;
  max-height: 100vh;
  color: ${({ theme }) => theme.colors.textLight};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    max-height: 120vh;
  }
`;

export const HomeContentsWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    top: 20%;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 40px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  font-weight: bolder;
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    font-size: 25px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
export const HomeSubTitle = styled.p`
  font-size: 20px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  font-weight: bolder;
  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    font-size: 15px;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    font-size: 10px;
  }
`;

export const HomeButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    display: none;
  }
`;

export const HomeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 10px;
    gap: 10px;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.darkColor};
    color: ${({ theme }) => theme.colors.textLight};
    transition: 0.5s;

    :hover {
      background-color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    button {
      font-size: 10px;
      font-weight: bold;
    }
  }

  ${(theme) =>
    theme.primary &&
    css`
      button {
        width: 150px;
     background-color: ${({ theme }) => theme.colors.mainColor};
   color: ${({ theme }) => theme.colors.textLight};
   transition: 0.5s;

   :hover {
      background-color: ${({ theme }) => theme.colors.darkColor};
   }
  `}
`;

export const HomeTitleWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 20px auto;
  text-align: center;

  h2 {
    line-height: 30px;
    margin-bottom: 20px;
  }

  p {
    line-height: 25px;
  }
`;

export const HomeDetailsContainer = styled.section`
  /* position: relative;
  width: 100%; */
  margin: 50px 0;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 30px;
    margin: auto;
    /* border-bottom: 2px solid ${({ theme }) => theme.colors.textColor}; */
    /* margin-bottom: 80px; */
  }
`;

export const HomeDetailsBox = styled.div``;

export const HomeDetailsButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  button {
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 10px;
    gap: 10px;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textLight};
    transition: 0.5s;

    :hover {
      background-color: ${({ theme }) => theme.colors.darkColor};
    }
  }
`;
