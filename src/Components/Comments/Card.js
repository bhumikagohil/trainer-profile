import React from "react";
import styled from "styled-components";
import {
  Card,
  Container,
  Section,
  Info,
  Name,
  Image,
  Time,
} from "../Shared/CardHeader";

const Body = styled.p`
  padding: 0px;
`;

const Posts = ({ comment, user }) => {
  return (
    <Card>
      <Container>
        <Section>
          <Image src={user.img} />
          <Info>
            <Name>
              {user.name}
              <br />
              <Time>{comment.id} hrs ago</Time>
            </Name>
          </Info>
        </Section>
      </Container>
      <Container>
        <Body>{comment.body}</Body>
      </Container>
    </Card>
  );
};

export default Posts;
