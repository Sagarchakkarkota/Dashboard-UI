import axios from "axios";

const apiRequest = axios.create({
  baseURL: " https://uatapicorporatetravel.fynity.in/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default apiRequest;
