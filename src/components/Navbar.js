import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navVariants = {
  initial: {
    y: '-12vh',
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  return (
    <Nav variants={navVariants} initial='initial' animate='animate'>
      <Logo to='/'>PopGames</Logo>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/games'>Games</NavLink>
      </div>
    </Nav>
  );
};

const Nav = styled(motion.nav)`
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-family: 'Lobster', sans-serif;
  color: #ff7300;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  transition: 0.2s all;
  text-transform: uppercase;
  margin-left: 2rem;

  &:hover {
    color: #ff7300;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default Navbar;
