import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CommentCards from "./Card";

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Comments = ({ user }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(data);
    };
    fetchData();
  }, [setComments]);
  return (
    <Comment>
      {comments.map((comment) => (
        <CommentCards comment={comment} user={user} />
      ))}
    </Comment>
  );
};

export default Comments;
