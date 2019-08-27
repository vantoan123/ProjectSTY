import apisauce from 'apisauce';
import {
  API_BASE_URL,
  TOKEN_HEADER_NAME,
  NETWORK_REQUEST_TIMEOUT,
} from '../../constants/apis';

class API {
  constructor(baseURL, iTimeout) {
    this.api = apisauce.create({
      baseURL,
      headers: {
        'Cache-Control': 'no-cache',
      },
      timeout: iTimeout,
    });
  }

  callPOST = (url, parameters) => this.api.post(url, parameters);

  callGET = url => this.api.get(url);

  callPUT = (url, parameters) => this.api.put(url, parameters);

  setToken(token, userId) {
    this.api.setHeader(TOKEN_HEADER_NAME, token);
  }

  removeToken() {
    this.api.deleteHeader(TOKEN_HEADER_NAME);
  }

  callLogin(username, password) {
    const parameters = { username, password };
    return this.callPOST('/users/mobileAuth', parameters);
  }

  createUser(username, firstName, lastName, dateOfBirth, phoneNumber) {
    const parameters = {
      username, firstName, lastName, dateOfBirth, phoneNumber
    };
    return this.callPOST('/users/create', parameters);
  }
}

export const api = new API(API_BASE_URL, NETWORK_REQUEST_TIMEOUT);
