import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PopularGame from '../components/PopularGame';
import axios from 'axios';

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

const Games = () => {
  const [popularGames, setPopularGames] = useState([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    getPopularGames();
  }, []);

  const getPopularGames = async () => {
    const popularGamesData = await axios.get(
      `https://api.rawg.io/api/games?key=288fdc3a683246a3b898a149a0ecfcab&dates=2010-01-01,2021-12-31&ordering=-rating&page_size=10`
    );
    setPopularGames(popularGamesData.data.results);
    setData(true);
  };

  return data ? (
    <Container
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'>
      <motion.h1>Popular Games 2021</motion.h1>
      <PopularGames>
        {popularGames.map((game) => (
          <PopularGame key={game.id} game={game} />
        ))}
      </PopularGames>
    </Container>
  ) : (
    <Loading>Loading...</Loading>
  );
};

const Container = styled(motion.div)`
  h1 {
    font-size: 1.8rem;
    margin: 3rem 0 3rem 0;
    font-weight: lighter;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;

const PopularGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  margin-bottom: 3rem;
`;

const Loading = styled(motion.h1)`
  font-size: 1.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export default Games;
