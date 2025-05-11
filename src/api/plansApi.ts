import axios from "axios";
import { API_PLANS } from "../types";

export const getPlans = async () => {
  const response = await axios.get(API_PLANS);
  return response.data;
};
