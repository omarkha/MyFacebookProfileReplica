import React from "react";
import Post from "./Post";
import PostSection from "./PostSection";

const PostsSection = () => {
  return (
    <section className="posts-section">
      <PostSection />
      <Post />
    </section>
  );
};

export default PostsSection;
