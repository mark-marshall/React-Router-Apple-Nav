import React from 'react';
import styled from 'styled-components';
import SubNav from './SubNav';

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

export default function Music({ navs }) {
  return (
    <div>
      <SubNav navs={navs} id={6} />
      <PageDiv>
        <h1>Music</h1>
      </PageDiv>
    </div>
  );
}
