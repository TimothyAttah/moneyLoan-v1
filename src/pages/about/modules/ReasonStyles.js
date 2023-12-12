import styled from 'styled-components';

export const ReasonContainer = styled.div`
  position: relative;
  max-width: 250px;
  height: 200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;
`;
export const ReasonWrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
`;
export const ReasonIconBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  clip-path: circle();
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.textLight};
  position: absolute;
  left: -10px;
  top: 40%;
  transform: translateY(50%);
`;
export const ReasonTitle = styled.h4`
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 20px;
`;
export const ReasonDetails = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.buttonColor};
  margin-bottom: 10px;
`;
export const ReasonLink = styled.div`
  position: absolute;
  left: 50px;
  bottom: 20px;
  a {
    color: ${({ theme }) => theme.colors.mainColor};
    text-transform: uppercase;
    transition: 0.5s ease-in-out all;
    :hover {
      color: ${({ theme }) => theme.colors.mainColorSecondary};
    }
  }
`;
