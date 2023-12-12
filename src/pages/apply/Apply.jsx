import React from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './ApplyStyles';
import applyImg from '../../assets/how-it-works-header.jpg';
import { ApplyForm } from '../../components/form/ApplyForm';

const Apply = () => {
  return (
    <div>
      <Styles.ApplyContainer>
        <img src={applyImg} alt='' />
        <Styles.ApplyContentsWrapper>
          <FadeIn delay={0.2} direction='right'>
            <Styles.ApplyTitle>Apply Now</Styles.ApplyTitle>
          </FadeIn>
          <FadeIn delay={0.4} direction='left'>
            <Styles.ApplySubTitle>
              Fill out an application form
            </Styles.ApplySubTitle>
          </FadeIn>
        </Styles.ApplyContentsWrapper>
      </Styles.ApplyContainer>

      <ApplyForm />
    </div>
  );
};

export default Apply;
