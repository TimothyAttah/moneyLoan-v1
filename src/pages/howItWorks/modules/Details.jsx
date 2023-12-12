import React from 'react';
import { FadeIn } from '../../../components/fadeIn/FadeIn';
import * as Styles from './DetailsStyles';

const Details = ({ title, subTitle, details, pix, primary }) => {
  return (
    <Styles.DetailsContainer>
      <Styles.DetailsWrapper primary={primary}>
        <Styles.DetailsImgWrapper>
          <FadeIn delay={0.2} direction='right'>
            <img src={pix} alt='' />
          </FadeIn>
        </Styles.DetailsImgWrapper>
        <Styles.DetailsContentsWrapper>
          <FadeIn delay={0.2} direction='left'>
            <Styles.DetailsTitle>{title}</Styles.DetailsTitle>
          </FadeIn>
          <FadeIn delay={0.4} direction='left'>
            <Styles.DetailsSubTitle>{subTitle}</Styles.DetailsSubTitle>
          </FadeIn>
          <FadeIn delay={0.6} direction='left'>
            <Styles.DetailsMessage>{details}</Styles.DetailsMessage>
          </FadeIn>
        </Styles.DetailsContentsWrapper>
      </Styles.DetailsWrapper>
    </Styles.DetailsContainer>
  );
};

export default Details;
