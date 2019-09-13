export const setUsers = (users = []) => {
  return {
    type: 'SET_USERS',
    payload: users
  };
};

export const setPosts = (posts = []) => {
  return {
    type: 'SET_POSTS',
    payload: posts
  };
};

export const deletePost = id => {
  return {
    type: 'DELETE_POST',
    id: id
  };
};
