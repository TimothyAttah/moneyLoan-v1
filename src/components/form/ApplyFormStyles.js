import styled from 'styled-components';

export const ApplyFormContainer = styled.form`
  width: 100%;
  height: 80vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.mainColor};
  margin-top: -5px;
`;

export const ApplyFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.textLight};
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

export const SelectWrapper = styled.div`
  label {
    padding-bottom: 10px;
    display: block;
  }
  select {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    :focus {
      outline: none;
    }

    option {
      padding: 10px 0;
      display: flex;
      font-size: 15px;
      height: 40px;
      width: 100%;
      margin: 10px 0;
    }
  }
`;
export const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 30px 0;
  @media screen and (max-width: ${({ theme }) => theme.screens.smallerSize}) {
    gap: 15px;
  }
`;

export const GenderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const InboxWrapper = styled.div`
  /* padding-top: 20px; */
  input {
    padding: 10px 0;
    margin-bottom: 30px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: none;
    border-bottom: 2px solid #999;
  }

  input:focus ~ label {
    top: -12px;
    left: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }

  /* input:valid ~ label {
    top: -12px;
    left: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  } */

  input:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }

  div {
    position: relative;

    label {
      position: absolute;
      top: 10px;
      left: 0;
      color: #999;
      transition: 0.5s;
      pointer-events: none;
    }
  }
`;
export const ButtonWrapper = styled.div`
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
`;

// export const SelectWrapper = styled.div``;
// export const SelectWrapper = styled.div``;
