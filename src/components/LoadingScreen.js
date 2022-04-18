import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CountUp from 'react-countup';

const LoadingScreen = () => {
  return (
    <StyledLoadContainer>
      <StyledCountUp
        animate={{ opacity: 0 }}
        transition={{
          opacity: {
            delay: 3,
          },
        }}
      >
        <StyledCircle
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'linear',
          }}
        />
        <StyledCounter start={0} end={100} duration={4} suffix='%' />
      </StyledCountUp>
      <StyledLines>
        <StyledLine1
          animate={{ x: '-100vw' }}
          initial={{ x: '100vw' }}
          transition={{ duration: 1, delay: 3 }}
        ></StyledLine1>
        <StyledLine2
          animate={{ x: '-100vw' }}
          initial={{ x: '100vw' }}
          transition={{ duration: 1, delay: 3 }}
        ></StyledLine2>
        <StyledLine3
          animate={{ x: '-100vw' }}
          initial={{ x: '100vw' }}
          transition={{ duration: 1, delay: 3 }}
        ></StyledLine3>
        <StyledLine4
          animate={{ x: '-100vw' }}
          initial={{ x: '100vw' }}
          transition={{ duration: 1, delay: 3 }}
        ></StyledLine4>
        <StyledLine5
          animate={{ x: '-100vw' }}
          initial={{ x: '100vw' }}
          transition={{ duration: 1, delay: 3 }}
        ></StyledLine5>
      </StyledLines>
    </StyledLoadContainer>
  );
};

const StyledLoadContainer = styled(motion.div)`
  height: 100vh;
`;

const StyledCountUp = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledCircle = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  border: 0.5rem solid #eee;
  border-top: 0.5rem solid black;
  border-radius: 50%;
  background-color: transparent;
`;

const StyledCounter = styled(CountUp)`
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLines = styled(motion.div)`
  display: flex;
`;

const StyledLine1 = styled(motion.div)`
  background: #99b898;
  height: 100vh;
  width: 20vw;
`;

const StyledLine2 = styled(motion.div)`
  background: #fecea8;
  height: 100vh;
  width: 20vw;
`;

const StyledLine3 = styled(motion.div)`
  background: #ff847c;
  height: 100vh;
  width: 20vw;
`;

const StyledLine4 = styled(motion.div)`
  background: #e84a5f;
  height: 100vh;
  width: 20vw;
`;

const StyledLine5 = styled(motion.div)`
  background: #2a363b;
  height: 100vh;
  width: 20vw;
`;

export default LoadingScreen;
