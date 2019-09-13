import React from 'react';
import { connect, useSelector } from 'react-redux';
import { setPosts } from '../actions';
import Post from '../components/Post';

const Posts = () => {
  const posts = useSelector(state => state.posts);

  const listPosts = () => {
    return posts.map((post, i) => {
      return <Post post={post} key={i} />;
    });
  };
  return (
    <div className="container">
      <div className="columns is-multiline">{listPosts()}</div>
    </div>
  );
};

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(
  mapStateToProps,
  { setPosts }
)(Posts);
