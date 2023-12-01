import axios from "axios";

const goRestApiRequest = axios.create({
  baseURL: "https://gorest.co.in/public/v2/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default goRestApiRequesty;
