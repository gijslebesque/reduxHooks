import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';
import Users from './modules/Users';
import Posts from './modules/Posts';
import SingleUser from './modules/SingleUser';

import { Service } from './utils/Service';

import { setUsers, setPosts } from './actions';
import { connect } from 'react-redux';

function App({ setUsers, setPosts }) {
  const [err, setErr] = useState(false);

  useEffect(() => {
    const service = new Service();
    const fetchData = async () => {
      try {
        const allUsers = await service.get('users');
        const allPosts = await service.get('posts');
        setUsers(allUsers);
        setPosts(allPosts);
      } catch (err) {
        setErr(err);
      }
    };
    fetchData();
  }, [setUsers, setPosts]);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={SingleUser} />
          <Route path="/posts" component={Posts} />
        </Switch>

        {err && <p>{err}</p>}
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  return { users };
};
export default connect(
  mapStateToProps,
  { setUsers, setPosts }
)(App);
