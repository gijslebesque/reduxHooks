import axios from 'axios';

export class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/'
    });
  }

  getUsers() {
    return this.service.get('/users');
  }
  getPosts() {
    return this.service.get('/posts');
  }
  getComments(postId) {
    return this.service.get(`/comments?postId=${postId}`);
  }
}
