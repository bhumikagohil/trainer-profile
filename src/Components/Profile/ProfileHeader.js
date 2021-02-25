import { React } from "react";
import styled from "styled-components";
import { Image } from "../Shared/CardHeader";
import img from "../Shared/header.jpg";
import user from "../Shared/Data";

const Parallax = styled.div`
  background-image: url(${img});
  background-size: 70% 40%;
  height: 50vh;
  background-attachment: fixed;
  background-position: center top;
  background-repeat: no-repeat;
`;
const User = styled.div`
  position: fixed;
  left: 15%;
  top: 30%;
  z-index: 5;
`;

export const Name = styled.h2`
  padding: 0px;
  margin: 0px;
  color: #6b4791;
`;

const Header = () => {
  return (
    <>
      <Parallax />
      <User>
        <Image src={user.img} />
        <Name>{user.name}</Name>
      </User>
    </>
  );
};

export default Header;
