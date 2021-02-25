import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 0.2px solid #dddddd;
  box-shadow: 2px 3px #dddddd;
  margin: 3% 15%;
  padding: 5%;
  border-radius: 20px;
`;
const Heading = styled.h3`
  display: grid;
  grid-template-columns: auto;
  font-weight: bold;
  text-align: center;
`;
const Title = styled.h6`
  font-size: 15px;
  text-align: left;
  color: #757575;
`;
const Score = styled.h5`
  color: #6b4790;
  font-size: 20px;
  text-align: right;
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 5px 10px;
`;

const Points = ({ points }) => {
  return (
    <>
      <Card>
        <Heading>Total Grits</Heading>
        <Info>
          <Title>On Posts</Title>
          <Score>{points.grits.posts}</Score>
        </Info>
        <Info>
          <Title>On Posts</Title>
          <Score>{points.grits.comments}</Score>
        </Info>
      </Card>
      <Card>
        <Heading>Total Inspired</Heading>
        <Info>
          <Title>On Posts</Title>
          <Score>{points.inspired.posts}</Score>
        </Info>
        <Info>
          <Title>On Posts</Title>
          <Score>{points.inspired.comments}</Score>
        </Info>
      </Card>
    </>
  );
};

export default Points;
