import React, { useState } from 'react';
import { FadeIn } from '../fadeIn/FadeIn';
import * as Styles from './HeaderStyles';
import { AnimatePresence } from 'framer-motion';
import { RiArrowRightUpLine, RiMenuLine } from 'react-icons/ri';
import { Sidebar } from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Styles.HeaderContainer>
        <Styles.HeaderWrapper>
          <Styles.HeaderLeftWrapper>
            <h1>
              <FadeIn delay={0.2} direction='down'>
                m<span>o</span>ney
              </FadeIn>
            </h1>
            <div>
              <FadeIn delay={0.2} direction='down'>
                <Link to='/'>Home</Link>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.2} direction='down'>
                <Link to='/how-it-works'>How it works</Link>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.2} direction='down'>
                <Link to='/about-us'>About Us</Link>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={0.2} direction='down'>
                <Link to='/resources'>Resources</Link>
              </FadeIn>
            </div>
          </Styles.HeaderLeftWrapper>
          <Styles.HeaderRightWrapper>
            <FadeIn delay={0.2} direction='up'>
              <Link to='/apply'>
                <button>
                  Get Loan <RiArrowRightUpLine />
                </button>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} direction='up'>
              <Styles.HeaderMenuBox>
                <RiMenuLine onClick={() => setIsOpen(true)} />
              </Styles.HeaderMenuBox>
            </FadeIn>
          </Styles.HeaderRightWrapper>
        </Styles.HeaderWrapper>
      </Styles.HeaderContainer>
      <AnimatePresence>
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
