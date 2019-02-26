import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: orange;
  padding: 4% 0%;
`;

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

export default function NavWrapper({ navs }) {
  return (
    <NavWrap>
      {navs.map(nav => (
        <StyledLink to={nav.linked} key={nav.linked}>{nav.tagged}</StyledLink>
      ))}
    </NavWrap>
  );
}
