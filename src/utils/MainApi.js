import { EXPLORER_API_URL } from './constants.ts';

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _fetchRequest(url, options) {
    options.credentials = 'include';
    options.headers = this._headers;
    return fetch(url, options).then((res) =>
      res.ok
        ? res.json().then((res) => res.data)
        : res.json().then((res) => Promise.reject(new Error(res.message)))
    );
  }

  // signup — /signup post body: email, name, password
  signUp(body) {
    const url = `${this._baseUrl}/signup`;
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    };
    return this._fetchRequest(url, options);
  }

  // signin — /signin post body: email, password
  signIn(body) {
    const url = `${this._baseUrl}/signin`;
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
    };
    return this._fetchRequest(url, options);
  }

  // signout — /signout post empty
  signOut() {
    const url = `${this._baseUrl}/signout`;
    const options = {
      method: 'POST',
    };
    return this._fetchRequest(url, options);
  }

  // getUser — /users/me get
  getUser() {
    const url = `${this._baseUrl}/users/me`;
    const options = {
      method: 'GET',
    };
    return this._fetchRequest(url, options);
  }

  // updateUser /users/me patch body: name, email
  updateUser(body) {
    const url = `${this._baseUrl}/users/me`;
    const options = {
      method: 'PATCH',
      body: JSON.stringify(body),
    };
    return this._fetchRequest(url, options);
  }

  // getBookmarkedMovies — /movies get
  getBookmarkedMovies() {
    const url = `${this._baseUrl}/movies`;
    const options = {
      method: 'GET',
    };
    return this._fetchRequest(url, options);
  }

  // postBookmarkedMovie — /movies post body: owner: user ID + all fields from beats api
  postBookmarkedMovie(body, userId) {
    const url = `${this._baseUrl}/movies`;
    const options = {
      method: 'POST',
      body: JSON.stringify({ ...body, owner: userId }),
    };
    return this._fetchRequest(url, options);
  }

  // deleteBookmarkedMovie — /movies/:id delete

  deleteBookmarkedMovie(movieId) {
    const url = `${this._baseUrl}/${movieId}`;
    const options = {
      method: 'DELETE',
    };
    return this._fetchRequest(url, options);
  }
}

const mainApi = new MainApi({ baseUrl: EXPLORER_API_URL });

export default mainApi;
