import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Home = () => {
  return (
    <Container>
      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'>
        <h1>Are you a gamer looking for new awesome games?</h1>
        <h1>
          Welcome to <span>PopGames</span>
        </h1>
      </motion.div>
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.8rem;
    font-weight: lighter;
    text-align: center;

    span {
      color: #ff7300;
      font-size: 2rem;
      font-family: 'Lobster';
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.4rem;

      span {
        font-size: 1.4rem;
      }
    }
  }
`;

export default Home;
