import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarContainer = styled(motion.div)`
  max-width: 300px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgMainColor};
  color: ${({ theme }) => theme.colors.textLight};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
`;
export const SidebarWrapper = styled.div`
  padding: 20px 10px;
`;

export const CloseBtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 30px;
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 80px;

  a {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
