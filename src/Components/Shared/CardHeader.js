import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #d6d6d6;
  margin: 10px;
  padding: 20px;
`;
export const Category = styled.span`
  color: #358fb4;
  font-size: 12px;
  font-weight: bold;
  margin: 0px;
`;
export const Container = styled.div`
  display: grid;
  padding: 5px 0px;
`;
export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const Info = styled.div`
  display: grid;
  grid-column: 2 / span 2;
  grid-row: 1;
  justify-content: flex-start;
  margin-left: 20px;
`;
export const Name = styled.h3`
  padding: 0px;
  margin: 0px;
`;

export const Section = styled.div`
  display: grid;
  grid-column: 1 / span 1;
  grid-row: 1;
  justify-content: flex-start;
`;
export const Time = styled.p`
  color: #757575;
  font-size: 15px;
  font-weight: normal;
  margin: 0px;
`;

export const Tag = styled.p`
  font-size: 12px;
  font-weight: normal;
  margin: 0px;
`;
