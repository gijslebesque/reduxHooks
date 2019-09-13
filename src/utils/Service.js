import axios from 'axios';

export class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/'
    });
  }

  async get(route) {
    try {
      const result = await this.service.get(`/${route}`);
      return result.data;
    } catch (err) {
      return err;
    }
  }

  getComments(postId) {
    return this.service.get(`/comments?postId=${postId}`);
  }
}
