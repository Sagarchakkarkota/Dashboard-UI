import axios from "axios";

const apiRequest = axios.create({
  baseURL: " https://uatapicorporatetravel.fynity.in/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

if (localStorage.getItem("token")) {
  apiRequest.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
}

// Set up the authorization header
const setAuthToken = (token) => {
  if (token) {
    apiRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiRequest.defaults.headers.common["Authorization"];
  }
};

export { apiRequest, setAuthToken };
