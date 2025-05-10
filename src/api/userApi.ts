import axios from "axios";
import { API_USERS } from "../types";

export const getUser = async () => {
  const response = await axios.get(API_USERS);
  return response.data;
};
