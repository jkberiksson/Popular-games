import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PopularGame = ({ game }) => {
  const imgRef = useRef(null);

  const increaseImgSize = () => {
    imgRef.current.style.transform = 'scale(1.2)';
  };

  const decreaseImgSize = () => {
    imgRef.current.style.transform = 'scale(1)';
  };

  const getRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className='fas fa-star'></i>);
      } else {
        stars.push(<i key={i} className='far fa-star'></i>);
      }
    }
    return stars;
  };

  return (
    <>
      <StyledGame onMouseEnter={increaseImgSize} onMouseLeave={decreaseImgSize}>
        <StyledLink to={`/games/${game.id}`}>More info</StyledLink>
        <StyledImage ref={imgRef} src={game.background_image} alt={game.name} />
        <StyledDescription>
          <h3>{game.name}</h3>
          <StyledSubDescription>
            <p>Released: {game.released}</p>
            <div>{getRating(game.rating)}</div>
          </StyledSubDescription>
        </StyledDescription>
      </StyledGame>
    </>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const StyledLink = styled(Link)`
  position: absolute;
  background-color: none;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  right: 0;
  bottom: 0;
  color: #2c2c2c;
  border: none;
  background-color: #ff7300;
  cursor: pointer;
  z-index: 2;
  text-decoration: none;
  transition: 0.2s all ease;

  :hover {
    background-color: #db6300;
  }
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: 0.5s ease-in-out;
`;

const StyledDescription = styled(motion.div)`
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  left: 0%;
  bottom: 0%;
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    background: none;
    color: #eee;
    font-size: 1.6rem;
    font-weight: lighter;
  }
`;

const StyledSubDescription = styled(motion.div)`
  background: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 1rem;

  p {
    background: none;
    color: #eee;
    font-size: 1.2rem;
    font-weight: lighter;
  }

  div {
    display: flex;
    flex-direction: row;
    background: none;

    i {
      background: none;
      color: #eee;
      font-size: 1.2rem;
    }
  }
`;

export default PopularGame;
