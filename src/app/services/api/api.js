import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
/* eslint-disable camelcase */

class Api extends FuseUtils.EventEmitter {
  init() {
    this.setBaseUrl();
    this.setInterceptors();
    this.handleAuthentication();
  }

  setBaseUrl = () => {
    axios.defaults.baseURL = 'https://my-messages-apirest.herokuapp.com';
  };

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (err.response?.status === 401 && err.config && !err.config.__isRetryRequest) {
            // if you ever get an unauthorized response, logout the user
            this.emit('onAutoLogout', err.response?.data?.message);
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('/cadastro', data).then((response) => {
        if (response.status === 200) {
          // this.setSession(response.data.access_token);
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  doGet = async (url) => {
    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        return response.data;
      }

      return 'ERRO';
    } catch (error) {
      return error.response;
    }
  };

  doPost = async (url, data) => {
    try {
      const response = await axios.post(url, data);

      if (response.status === 200) {
        return response.data.newService;
      }

      return 'erro';
    } catch (error) {
      return { data: error.response.data, status: error.response.status };
    }
  };

  doPut = async (url, data) => {
    try {
      const response = await axios.put(url, data);

      if (response.status === 200) {
        return response.data;
      }

      return 'erro';
    } catch (error) {
      return { data: error.response.data, status: error.response.status };
    }
  };

  doFile = async (url, data) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success === true) {
        return response.data;
      }

      return 'erro';
    } catch (error) {
      return { data: error.response.data, status: error.response.status };
    }
  };

  doDelete = async (url) => {
    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        return response.data;
      }

      return 'erro';
    } catch (error) {
      return error.response;
    }
  };

  signInWithUserAndPassword = (user, password, remember) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/login', {
          username: user,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            if (remember) {
              this.setSaveSession(response.data.result.access_token);
            } else {
              this.setSession(response.data.result.access_token);
            }
            resolve(response.data.result);
          } else {
            reject(response.data);
          }
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      const token = this.getAccessToken();
      axios
        .post('/login/token', { token })
        .then((response) => {
          if (response.data.data.user) {
            this.setSession(response.data.data.access_token);
            resolve(response.data.data.user);
          } else {
            this.logout();
            reject(new Error('Falha ao tentar logar com o token.'));
          }
        })
        .catch((error) => {
          this.logout();
          reject(new Error('Falha ao tentar logar com o token.'));
        });
    });
  };

  updateUserData = (user) => {
    return axios.put(`/users/${user.uid}`, {
      user,
    });
  };

  setSession = (access_token) => {
    if (access_token) {
      sessionStorage.setItem('token', access_token);
      // axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      sessionStorage.removeItem('token');
      // delete axios.defaults.headers.common.Authorization;
    }
  };

  setSaveSession = (access_token) => {
    if (access_token) {
      localStorage.setItem('token', access_token);
      // axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem('token');
      // delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
    this.setSaveSession(null);
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    let token = window.sessionStorage.getItem('token');
    if (!token) {
      token = window.localStorage.getItem('token');
    }

    return token;
  };
}

const instance = new Api();
instance.init();

export default instance;
