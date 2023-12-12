import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.bgMainColor};
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  /* padding: 20px 10px; */
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 20px;
`;
export const HeaderLeftWrapper = styled.div`
  /* max-width: 700px; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  a {
    color: ${({ theme }) => theme.colors.textLight};
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    a {
      display: none;
    }
  }
`;
export const HeaderRightWrapper = styled.div`
  /* max-width: 700px;
  width: 100%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 150px;
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
    transition: 0.5s ease-in-out linear;

    :hover {
      background-color: ${({ theme }) => theme.colors.buttonColor};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    button {
      display: none;
    }
  }
`;

export const HeaderMenuBox = styled.div`
  display: none;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    display: flex;
  }
`;
// export const HeaderContainer = styled.header``;
