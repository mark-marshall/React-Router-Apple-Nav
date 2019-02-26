import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const PageDiv = styled.div`
  width: 90%;
  margin: auto;
  height: 400px;
  background-color: black;
  color: white;
  font-size: 22px;
  text-align: center;
  padding-top: 25%;
`;

const Navvy = styled.div`
  padding: 1% 5%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NestedNav = styled(NavLink)`
  width: 100px;
  color: black;
  font-size: 12px;
  text-decoration: none;
  text-align: center;
`;

export default function Tv({ navs }) {
  return (
    <div>
      <Navvy>
        {navs[4].childLinked.map(child => (
          <NestedNav to={child.toLowerCase().replace(/\s/g, '')} key={child}>
            {child}
          </NestedNav>
        ))}
      </Navvy>
      <PageDiv>
        <h1>TV</h1>
      </PageDiv>
    </div>
  );
}
