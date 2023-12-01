import apiRequest from "../../../lib/axios";

const userLogin = async (value) => {
  try {
    const res = await apiRequest.post("/login", value);
    return res;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};

const userLogOut = async () => {
  const res = await apiRequest.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return res;
};

const getUser = async () => {
  try {
    const response = await apiRequest.get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};
export { userLogin, userLogOut, getUser };
