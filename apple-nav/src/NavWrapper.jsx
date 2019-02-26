import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';
import styled from 'styled-components';

const NavWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5% 0%;
  background-color: #313131;
`;

const StyledLink = styled(NavLink)`
  color: white;
  font-size: 12px;
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

NavWrapper.propTypes = {
  navs: PT.arrayOf(PT.object.isRequired).isRequired,
};
