import React, { useState } from "react";
import styled from "styled-components";
import Posts from "../Posts";
import Comments from "../Comments";
import Points from "../Points";
import user from "../Shared/Data";

const types = ["Posts", "Comments", "Points"];
const Div = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Tab = styled.button`
  color: black;
  font-size: 20px;
  padding: 10px 60px 0px 60px;
  margin-bottom: 0;
  cursor: pointer;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    font-weight: bold;
  `}
`;
const Inner = styled.div`
  width: 15px;
  height: 0px;
  ${({ active }) =>
    active &&
    `
    margin: 0px auto;
    border-bottom: 5px solid black;
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;

const Body = () => {
  const [active, setActive] = useState(types[0]);

  const switchComponents = () => {
    switch (active) {
      case "Posts":
        return <Posts user={user} />;
      case "Comments":
        return <Comments user={user} />;
      case "Points":
        return <Points points={user.points} />;
    }
  };

  return (
    <>
      <Div>
        <ButtonGroup>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
              <Inner active={active === type}>&nbsp;</Inner>
            </Tab>
          ))}
        </ButtonGroup>
      </Div>
      <Div> {switchComponents()} </Div>
    </>
  );
};

export default Body;
