export const users = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.payload;
    default:
      return state;
  }
};

export const posts = (state = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    case 'DELETE_POST':
      const posts = [...state];
      return posts.filter(post => post.id !== action.id);
    default:
      return state;
  }
};
