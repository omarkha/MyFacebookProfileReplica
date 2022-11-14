import React from "react";
import Post from "./Post";
import PostSection from "./PostSection";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
const PostsSection = () => {
  return (
    <section className="posts-section">
      <PostSection />
      <Post
        textContent={
          "Just finished coding my Portfolio Website. Check it Out and hmu for a FREE website! https://omarkhalil34v.netlify.app"
        }
        img={post1}
        dateandtime="November 8 at 2:33 AM"
      />
      <Post
        textContent={"Hi there, I updated my cover photo"}
        img={post2}
        dateandtime="November 3 at 11:33 PM"
      />
    </section>
  );
};

export default PostsSection;
