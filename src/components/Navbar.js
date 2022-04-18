import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav
      initial={{ y: '-8vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>
        <Link to='/'>
          Pop<span>Games</span>
        </Link>
      </h1>
      <ul>
        <li>
          <StyledNavLink to='/'>Home</StyledNavLink>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <StyledNavLink to='/games'>Games</StyledNavLink>
          <StyledLine
            transition={{ duration: 0.5 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/games' ? '100%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    height: 10vh;
    flex-direction: column;
  }

  h1 {
    flex: 1;
    a,
    span {
      font-size: 3rem;
      font-family: 'Lobster', sans-serif;
      font-weight: lighter;
      text-decoration: none;
      color: #2c2c2c;
      background: none;
    }

    span {
      color: #ff7300;
    }
  }

  ul {
    display: flex;
    background: none;

    li {
      list-style: none;
      margin: 0px 30px;
      position: relative;
      background: none;
    }
  }
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #2c2c2c;
  font-size: 1.6rem;
  font-weight: 500;
  transition: 0.2s all;
  text-transform: uppercase;
  background: none;

  :hover {
    color: #ff7300;
  }
`;

const StyledLine = styled(motion.div)`
  height: 0.2rem;
  width: 0%;
  background: #ff7300;
  position: absolute;
  bottom: -5%;
  left: 0%;
`;

export default Navbar;
