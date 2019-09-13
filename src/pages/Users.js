import React from 'react';
import { connect, useSelector } from 'react-redux';
import UserCard from '../components/UserCard';

function Users({ setUsers }) {
  const users = useSelector(state => state.users);

  const listUsers = () => {
    return users.map((user, i) => {
      return <UserCard user={user} key={i} i={i} />;
    });
  };
  return (
    <div className="container">
      <h1 class="title is-1">Users</h1>
      <div className="columns is-multiline">{listUsers()}</div>
    </div>
  );
}

export default connect()(Users);
