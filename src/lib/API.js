import axios from "axios";

const API_URL = "http://localhost:3000";

const client = axios.create({
  baseURL: API_URL,
});

export const api = {
  get: async (path) => {
    const { data } = await client.get(path);
    return data;
  },
  post: async (path, body) => {
    const { data } = await client.post(path, body);
    return data;
  },
};
