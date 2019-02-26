import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PT from 'prop-types';

const Navvy = styled.div`
  padding: 1% 5%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NestedNav = styled(NavLink)`
  width: 100px;
  color: black;
  font-size: 12px;
  text-decoration: none;
  text-align: center;
`;

export default function SubNav({ navs, id }) {
  return (
    <div>
      {
        <Navvy>
          {navs[id].childLinked.map(child => (
            <NestedNav to={child.toLowerCase().replace(/\s/g, '')} key={child}>
              {child}
            </NestedNav>
          ))}
        </Navvy>
      }
    </div>
  );
}

SubNav.propTypes = {
    navs: PT.array.isRequired,
    id: PT.number.isRequired,
  };
