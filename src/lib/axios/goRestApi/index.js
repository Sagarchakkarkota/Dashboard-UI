import axios from "axios";

const goRestApiRequest = axios.create({
  baseURL: "https://gorest.co.in/public/v2/",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer 8075f13f69c97ba4dca75abd53f47dd490a5f98706c0cb5b6798b66ae0b420f6",
  },
});

export default goRestApiRequest;
