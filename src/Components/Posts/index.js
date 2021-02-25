import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PostCards from "./Cards";

const Post = styled.div`
  display: flex;
  flex-direction: column;
`;
const Posts = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    };
    fetchData();
  }, [setPosts]);
  return (
    <>
      <Post>
        {posts.map((post) => (
          <PostCards post={post} user={user} />
        ))}
      </Post>
    </>
  );
};

export default Posts;
