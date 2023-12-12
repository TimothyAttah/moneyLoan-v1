import React from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './HomeStyles';
// import hero from '../../assets/Untitled-1-300x300.jpg';
import hero from '../../assets/how-it-works-header.jpg';
import light from '../../assets/light.png';
import moneyBox from '../../assets/money-box.png';
import money from '../../assets/money.png';

import { Link } from 'react-router-dom';
import Details from '../howItWorks/modules/Details';

const Home = () => {
  return (
    <div>
      <Styles.HomeContainer>
        <img src={hero} alt='' />
        <Styles.HomeContentsWrapper>
          <FadeIn delay={0.2} direction='left'>
            <Styles.HomeTitle>
              Getting Money is now as easy as spending
            </Styles.HomeTitle>
          </FadeIn>
          <FadeIn delay={0.3} direction='right'>
            <Styles.HomeSubTitle>
              Get your loan in minutes with easy online application process
            </Styles.HomeSubTitle>
          </FadeIn>

          <Styles.HomeButtonContainer>
            <FadeIn delay={0.4} direction='up'>
              <Link to='/how-it-works'>
                <Styles.HomeButtonWrapper primary>
                  <button>How it works</button>
                </Styles.HomeButtonWrapper>
              </Link>
            </FadeIn>

            <FadeIn delay={0.4} direction='up'>
              <Link to='/about-us'>
                <Styles.HomeButtonWrapper>
                  <button>Why moneyLoans</button>
                </Styles.HomeButtonWrapper>
              </Link>
            </FadeIn>
          </Styles.HomeButtonContainer>
        </Styles.HomeContentsWrapper>
      </Styles.HomeContainer>
      <Styles.HomeTitleWrapper>
        <FadeIn delay={0.2} direction='left'>
          <h2>
            moneyLoans simply gives you the fast and easy option to fill your
            everyday needs.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} direction='right'>
          <p>
            Our visions is to provide customers with the premier financial
            solution by making things as fast and easy as possible in the most
            friendly and professional manner.
          </p>
        </FadeIn>
      </Styles.HomeTitleWrapper>
      <Styles.HomeDetailsContainer>
        <FadeIn delay={0.2} direction='left'>
          <h1>How moneyLoans loans work in 3 simple steps?</h1>
        </FadeIn>
        <Styles.HomeDetailsBox>
          <Details
            // title='Step One:'
            subTitle='Fill in an application form on our website'
            details='Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of the request during business hours'
            pix={light}
          />
          <Details
            // title='Step Two:'
            subTitle='Our manager will contact you to clear up the details'
            details='Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of the request during business hours'
            pix={moneyBox}
            primary
          />
          <Details
            // title='Step Three:'
            subTitle='Receive your money in the most convenient way in 15 minutes'
            details='Make a request on our website and wait for response to e-mail within 15-30 minutes from the time of the request during business hours'
            pix={money}
          />

          <Link to='/apply'>
            <Styles.HomeDetailsButtonWrapper>
              <FadeIn delay={0.2} direction='up'>
                <button>Apply now</button>
              </FadeIn>
            </Styles.HomeDetailsButtonWrapper>
          </Link>
        </Styles.HomeDetailsBox>
      </Styles.HomeDetailsContainer>
    </div>
  );
};

export default Home;
