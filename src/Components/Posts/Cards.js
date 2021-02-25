import React from "react";
import styled from "styled-components";
import {
  Container,
  Section,
  Info,
  Name,
  Image,
  Time,
  Category,
  Tag,
} from "../Shared/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faBolt,
  faCommentAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  padding: 15px;
  color: #757575;
  margin-bottom: 10px;
`;
const Span = styled.span`
  margin: 1px;
`;

const Post = styled.div`
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  margin: auto;
`;
const PostTitle = styled.h4`
  color: #424242;
`;
const PostBody = styled.h5``;
const Footer = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 10% auto;
  justify-items: center;
  padding: 14px;
`;

const Posts = ({ post, user }) => {
  return (
    <Card>
      <Container>
        <Section>
          <Image src={user.img} />
          <Info>
            <Name>
              {user.name} <br />
              <Tag>
                Posted in <Category>NUTRITION</Category>
              </Tag>
              <Time>2 hrs ago</Time>
            </Name>
          </Info>
        </Section>
      </Container>
      <Post>
        <PostTitle>{post.title}</PostTitle>
        <PostBody>{post.body}</PostBody>
      </Post>
      <Footer>
        <div>
          <Span>
            <FontAwesomeIcon icon={faFistRaised} size="lg" />{" "}
          </Span>
          <Span>Grit </Span>
          <Span>3</Span>
        </div>
        <div>
          <Span>
            <FontAwesomeIcon icon={faBolt} size="lg" />{" "}
          </Span>
          <Span>inspired </Span>
          <Span>3</Span>
        </div>
        <div>
          <Span>
            <FontAwesomeIcon icon={faCommentAlt} size="lg" />{" "}
          </Span>
          <Span> 0</Span>
        </div>
        <div>
          <Span>
            <FontAwesomeIcon icon={faShare} size="lg" />{" "}
          </Span>
        </div>
      </Footer>
    </Card>
  );
};

export default Posts;
