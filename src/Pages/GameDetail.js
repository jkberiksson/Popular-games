import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
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

const GameDetail = () => {
  const [game, setGame] = useState({});
  const { pathname } = useLocation();
  const pathId = pathname.split('/')[2];
  const [data, setData] = useState(false);

  useEffect(() => {
    getSpecificGame(pathId);
  }, [pathId]);

  const getSpecificGame = async (id) => {
    const specificGameData = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=288fdc3a683246a3b898a149a0ecfcab`
    );
    setGame(specificGameData.data);
    setData(true);
  };

  return data ? (
    <Container
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'>
      <BackBtn to='/games'>&larr; Go Back</BackBtn>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt='' />
      <Description dangerouslySetInnerHTML={{ __html: game.description }} />
    </Container>
  ) : (
    <Loading>Loading...</Loading>
  );
};

const Container = styled(motion.div)`
  margin: 3rem 0;

  h1 {
    font-size: 1.8rem;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;

const Description = styled(motion.div)`
  margin: 1rem 0;
  font-size: 0.8rem;

  p {
    font-size: 0.8rem;
    margin: 1rem 0;
  }

  li {
    font-size: 0.8rem;
    font-style: italic;
  }
`;

const Loading = styled(motion.h1)`
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BackBtn = styled(Link)`
  background-color: #eee;
  color: #121212;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default GameDetail;
