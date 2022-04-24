import { motion } from 'framer-motion';
import styled from 'styled-components';
import CountUp from 'react-countup';

const containerVariants = {
  animate: {
    opacity: 0,
    transition: {
      delay: 3,
    },
  },
};

const circleVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'linear',
    },
  },
};

const LoadingScreen = () => {
  return (
    <Container variants={containerVariants} animate='animate'>
      <Circle variants={circleVariants} />
      <Counter start={0} end={100} duration={3} suffix='%' />
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled(motion.div)`
  width: 7rem;
  height: 7rem;
  border: 0.5rem solid #121212;
  border-top: 0.5rem solid #eee;
  border-radius: 50%;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    border: 0.3rem solid #121212;
    border-top: 0.3rem solid #eee;
  }
`;

const Counter = styled(CountUp)`
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export default LoadingScreen;
