import axios from "axios";

const baseURL = "https://randomuser.me/api/";

const API = {
  getEmployees: numberOfUsers => {
      // GETS ALL THE USERS
    return axios.get(baseURL + `?results=${numberOfUsers}`);
  },
};

export default API;