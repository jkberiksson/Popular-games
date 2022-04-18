import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GameDetail = ({}) => {
  const [game, setGame] = useState({});
  const [gameImages, setGameImages] = useState([]);
  const [gameVideo, setGameVideo] = useState({});
  const { pathname } = useLocation();
  const pathId = pathname.split('/')[2];

  useEffect(() => {
    getSpecificGame(pathId);
    getImages(pathId);
  }, [pathId]);

  const getSpecificGame = async (id) => {
    const specificGameData = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=288fdc3a683246a3b898a149a0ecfcab`
    );
    setGame(specificGameData.data);
    setGameVideo(specificGameData.data.clip);
  };

  const getImages = async (id) => {
    const images = await axios.get(
      `https://api.rawg.io/api/games/${id}/screenshots?key=288fdc3a683246a3b898a149a0ecfcab`
    );
    setGameImages(images.data.results);
  };

  return (
    <StyledGameDetail
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <StyledLink to='/games'>&larr; All Games</StyledLink>
      <h1>{game.name}</h1>
      <StyledDescription>{game.description_raw}</StyledDescription>
      {gameVideo === null ? (
        <StyledNoVideo>No video available</StyledNoVideo>
      ) : (
        <video src={gameVideo.clip} controls></video>
      )}
      {gameImages.map((image) => (
        <img src={image.image} alt='gameImg' key={image.id} />
      ))}
    </StyledGameDetail>
  );
};

const StyledGameDetail = styled(motion.div)`
  margin-top: 2rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin: 2rem 0;
  }

  video {
    width: 80%;
  }
  img {
    width: 80%;
    object-fit: cover;
  }
`;

const StyledDescription = styled.p`
  font-size: 1.4rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 80%;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const StyledNoVideo = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
`;

export default GameDetail;
