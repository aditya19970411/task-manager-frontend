import axios from "axios";

const api = axios.create({
  baseURL: "/", // Load the backend URL from environment variables
});

/**
 * Get api handler
 * @param url string
 * @returns Record<string, any>
 */
export const Get = async (url: string) => {
  let response = await api.get(url);
  const data = response.data;

  return data;
};

/**
 * Post api handler
 * @param url string
 * @param body Object
 * @returns Record<string, any>
 */
export const Post = async (url: string, body: Record<string, any>) => {
  let response = await api.post(url, body);
  const data = response.data;

  return data;
};

/**
 * Delete api handler
 * @param url string
 * @returns Record<string, any>
 */
export const Delete = async (url: string) => {
  let response = await api.delete(url);
  const data = response.data;

  return data;
};
