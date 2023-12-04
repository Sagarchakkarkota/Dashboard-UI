import axios from "axios";
import goRestApiRequest from "../../../axios/goRestApi/index";

export const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

export const getMember = async () => {
  const response = await goRestApiRequest("/users", {
    headers: {
      Authorization:
        "Bearer 8075f13f69c97ba4dca75abd53f47dd490a5f98706c0cb5b6798b66ae0b420f6",
    },
  });
  return response.data;
};

export const addNewMember = async ({ id, name, email, gender, status }) => {
  const response = await goRestApiRequest.post("/users", {
    id,
    name,
    email,
    gender,
    status,
  });
  return response.data;
};
export const editMember = async ({ id, name, email, gender, status }) => {
  const response = await goRestApiRequest.put(`/users/${id}`, {
    id,
    name,
    email,
    gender,
    status,
  });
  return response.data;
};
export const deleteMember = async (id) => {
  const response = await goRestApiRequest.delete(`/users/${id}`);
  return response.json;
};
