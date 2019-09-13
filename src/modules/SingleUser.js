import React from 'react';
import { connect, useSelector } from 'react-redux';

import UserCard from '../components/UserCard';
import Post from '../components/Post';

const SingleUser = ({ match }) => {
  const id = parseInt(match.params.id);
  const users = useSelector(state => state.users);

  const allPosts = useSelector(state => state.posts);
  const userPosts = allPosts
    .filter(post => post.userId === id)
    .map((post, i) => <Post key={i} post={post} />);

  const user = users.filter(user => {
    return user.id === id;
  });
  const userName = user.length >= 1 ? user[0].name : '';
  debugger;
  return (
    <div className="container">
      <h1 className="title">This is {userName},</h1>
      <div className="columns">
        {user.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </div>
      <h2 className="title">Posts</h2>
      <div className="columns is-multiline">{userPosts}</div>
    </div>
  );
};

const mapStateToProps = ({ users, posts }) => {
  return { users, posts };
};
export default connect(mapStateToProps)(SingleUser);
