import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';
import Users from './pages/Users';
import Posts from './pages/Posts';
import SingleUser from './pages/SingleUser';

import { Service } from './utils/Service';

import { setUsers, setPosts } from './actions';
import { connect } from 'react-redux';

function App({ setUsers, setPosts }) {
  const [err, setErr] = useState(false);

  useEffect(() => {
    const service = new Service();
    const fetchData = async () => {
      try {
        const allUsers = await service.getUsers();
        const allPosts = await service.getPosts();
        setUsers(allUsers.data);
        setPosts(allPosts.data);
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
