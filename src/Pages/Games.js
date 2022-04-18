//React
import React, { useEffect, useState } from 'react';

//Local Styling
import styled from 'styled-components';

//Animations
import { motion } from 'framer-motion';

//Components
import PopularGame from '../components/PopularGame';

//Axios
import axios from 'axios';

const Games = () => {
  const [popularGames, setPopularGames] = useState([]); //State som fylls med data efter hämtning från API.
  const [data, setData] = useState(false); //State som kollar om det finns data eller ej.

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
    <StyledGamesContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Popular Games 2021</h1>
      <StyledPopularGames>
        {popularGames.map((game) => (
          <PopularGame key={game.id} game={game} />
        ))}
      </StyledPopularGames>
    </StyledGamesContainer>
  ) : (
    <StyledLoadingMsg>Loading...</StyledLoadingMsg>
  );
};

const StyledGamesContainer = styled(motion.div)`
  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 3rem;
    max-width: 1700px;
    margin: 0 auto;
    padding: 20px 0px;
    text-align: center;
  }
`;

const StyledPopularGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 5rem;
  max-width: 1700px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledLoadingMsg = styled(motion.h1)`
  font-size: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Games;
