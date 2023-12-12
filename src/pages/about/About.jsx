import React from 'react';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import aboutImg from '../../assets/about-header.jpg';
import capital from '../../assets/101.png';
import finance from '../../assets/102.png';
import status from '../../assets/103.png';
import business from '../../assets/104.png';

import * as Styles from './AboutStyles';
import Reason from './modules/Reason';
import {
  RiBarChart2Line,
  RiPieChart2Line,
  RiRocket2Fill,
} from 'react-icons/ri';

const About = () => {
  return (
    <div>
      <Styles.AboutContainer>
        <img src={aboutImg} alt='' />
        <Styles.AboutContentsWrapper>
          <FadeIn delay={0.2} direction='right'>
            <Styles.AboutTitle>About moneyLoans</Styles.AboutTitle>
          </FadeIn>
          <FadeIn delay={0.4} direction='left'>
            <Styles.AboutSubTitle>
              This is why we are so amazing
            </Styles.AboutSubTitle>
          </FadeIn>
        </Styles.AboutContentsWrapper>
      </Styles.AboutContainer>
      <div>
        <Styles.AboutTitle primary>Welcome to moneyLoans</Styles.AboutTitle>
        <Styles.AboutSubTitle primary>
          we offer a totally new way of borrowing
        </Styles.AboutSubTitle>

        <Styles.AboutCompanyMission>
          <h2>Company Mission</h2>
          <p>
            " moneyLoans mission is to expand access to credit and lower the
            cost of borrowing for the millions of people that traditional banks
            are typically unable to serve. <br />
            Everything we do we do for the love of people. "
          </p>
        </Styles.AboutCompanyMission>

        <Styles.AboutCardSection>
          <h2>Why people choose us</h2>
          <h4>we offer a totally new way of borrowing</h4>

          <Styles.AboutCardWrapper>
            <Reason
              title='Fair interest rates'
              details='We offer fair interest rate to all our clients.'
              link='how it works?'
              icon={<RiPieChart2Line />}
            />
            <Reason
              title='Loans up to 5 million'
              details='We offer fair interest rate to all our clients.'
              link='how it works?'
              icon={<RiRocket2Fill />}
            />
            <Reason
              title='Lowest APR available to you'
              details='We offer fair interest rate to all our clients.'
              link='how it works?'
              icon={<RiBarChart2Line />}
            />
          </Styles.AboutCardWrapper>
          <Styles.AboutImgWrapper>
            <div>
              <img src={capital} alt='' />
            </div>
            <div>
              <img src={finance} alt='' />
            </div>
            <div>
              <img src={status} alt='' />
            </div>
            <div>
              <img src={business} alt='' />
            </div>
          </Styles.AboutImgWrapper>
        </Styles.AboutCardSection>
      </div>
    </div>
  );
};

export default About;
