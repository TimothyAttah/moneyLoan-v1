import React from 'react';
import * as Styles from './ReasonStyles';
import { Link } from 'react-router-dom';

const Reason = ({ title, details, link, icon }) => {
  return (
    <Styles.ReasonContainer>
      <Styles.ReasonWrapper>
        <Styles.ReasonTitle>{title}</Styles.ReasonTitle>
        <Styles.ReasonDetails>{details}</Styles.ReasonDetails>
        <Styles.ReasonLink>
          <Link to='/how-it-works'>{link}</Link>
        </Styles.ReasonLink>
        <Styles.ReasonIconBox>{icon}</Styles.ReasonIconBox>
      </Styles.ReasonWrapper>
    </Styles.ReasonContainer>
  );
};

export default Reason;
