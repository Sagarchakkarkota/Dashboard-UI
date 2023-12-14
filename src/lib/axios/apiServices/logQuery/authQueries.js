import { apiRequest } from "../../logApi/index";

const userLogin = async (value) => {
  try {
    const res = await apiRequest.post("/sellers/login", value);
    return res;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};

const userLogOut = async () => {
  try {
    const res = await apiRequest.post("/sellers/logout", {});
    return res;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};

const getUser = async () => {
  try {
    const response = await apiRequest.get("/user");
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};
export { userLogin, userLogOut, getUser };
