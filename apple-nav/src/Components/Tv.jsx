import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
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

export default function Tv({ navs }) {
  return (
    <div>
      <SubNav navs={navs} id={5} />
      <PageDiv>
        <h1>TV</h1>
      </PageDiv>
    </div>
  );
}

Tv.propTypes = {
  navs: PT.arrayOf(PT.object.isRequired).isRequired,
};

