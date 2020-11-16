const API_BASE_URL = "http://legacyaward.us-east-2.elasticbeanstalk.com";

const headers = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

export default class UserApi {
  static login(email, password) {
    return fetch(`${API_BASE_URL}/auth`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  static register(firstName, lastName, email, password, ip) {
    return fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        tos_date: new Date().getTime(),
        tos_ip: ip
      }),
    });
  }

  static getAllUsers(token) {
    return fetch(`${API_BASE_URL}/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static getProfile(token, userId) {
    return fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "GET",
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static updateUser(
    token,
    userId,
    firstName,
    lastName,
    email,
    password,
    videoUrl,
    essay,
    tags,
    title
  ) {
    return fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        // password,
        videoUrl,
        essay,
        tags,
        title,
      }),
    });
  }
}
