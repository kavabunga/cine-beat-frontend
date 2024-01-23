import { BEATFILM_API_URL } from './constants.ts';

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _fetchRequest(url, options) {
    return fetch(url, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Error ${res.status}. ${res.message}`));
    });
  }

  getMovies() {
    return this._fetchRequest(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const moviesApi = new MoviesApi({ baseUrl: BEATFILM_API_URL });

export default moviesApi;
