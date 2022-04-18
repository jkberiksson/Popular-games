//React
import React from 'react';

//Local styling
import styled from 'styled-components';

//Animations
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  return (
    <StyledWelcomePage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <h1>Are you a gamer looking for awesome games?</h1>
      <h1>
        Welcome to <span>Pop</span>
        <span>Games</span>
      </h1>
    </StyledWelcomePage>
  );
};

const StyledWelcomePage = styled(motion.div)`
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
    font-weight: lighter;
    span {
      font-family: 'Lobster', sans-serif;
      font-size: 5rem;

      :nth-child(2) {
        color: #ff7300;
      }
    }
  }
`;

export default Home;
