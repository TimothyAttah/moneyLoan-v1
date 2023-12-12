import React from 'react';
import { FadeIn } from '../fadeIn/FadeIn';
import * as Styles from './SidebarStyles';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const showAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const Sidebar = ({ setIsOpen }) => {
  return (
    <Styles.SidebarContainer
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Styles.SidebarWrapper>
        <Styles.CloseBtnBox>
          <RiCloseLine onClick={() => setIsOpen(false)} />
        </Styles.CloseBtnBox>
        <Styles.ContentsWrapper>
          <h1>
            <FadeIn delay={0.2} direction='down'>
              m<span>o</span>ney
            </FadeIn>
          </h1>
          <div>
            <FadeIn delay={0.2} direction='down'>
              <Link to='/' onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.2} direction='down'>
              <Link to='/how-it-works' onClick={() => setIsOpen(false)}>
                How it works
              </Link>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.2} direction='down'>
              <Link to='/about-us' onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.2} direction='down'>
              <Link to='/resources' onClick={() => setIsOpen(false)}>
                Resources
              </Link>
            </FadeIn>
          </div>
        </Styles.ContentsWrapper>
      </Styles.SidebarWrapper>
    </Styles.SidebarContainer>
  );
};
