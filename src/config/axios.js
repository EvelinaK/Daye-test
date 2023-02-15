import axios from "axios";

const BASE_URL = ``;

const instance = axios.create({
  baseURL: `${BASE_URL}`,

  headers: { "Content-Type": "application/json" },
});

const publicAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "application/json" },
});
export { publicAxios, BASE_URL };
export default instance;
