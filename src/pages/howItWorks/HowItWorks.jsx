import React from 'react';
import howItWorksImg from '../../assets/how-it-works-header.jpg';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './HowItWorksStyles';
import Details from './modules/Details';
import light from '../../assets/light.png';
import moneyBox from '../../assets/money-box.png';
import money from '../../assets/money.png';

const HowItWorks = () => {
  return (
    <div>
      <Styles.HowItWorksContainer>
        <img src={howItWorksImg} alt='' />
        <Styles.HowItWorksContentsWrapper>
          <FadeIn delay={0.2} direction='right'>
            <Styles.HowItWorksTitle>How it works?</Styles.HowItWorksTitle>
          </FadeIn>
          <FadeIn delay={0.4} direction='left'>
            <Styles.HowItWorksSubTitle>
              There is always a way to get money quick
            </Styles.HowItWorksSubTitle>
          </FadeIn>
        </Styles.HowItWorksContentsWrapper>
      </Styles.HowItWorksContainer>
      <Details
        title='Step One:'
        subTitle='Fill in an application form on our website'
        details='Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of the request during business hours'
        pix={light}
      />
      <Details
        title='Step Two:'
        subTitle='Our manager will contact you to clear up the details'
        details='Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of the request during business hours'
        pix={moneyBox}
        primary
      />
      <Details
        title='Step Three:'
        subTitle='Receive your money in the most convenient way in 15 minutes'
        details='Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of the request during business hours'
        pix={money}
      />
    </div>
  );
};

export default HowItWorks;
