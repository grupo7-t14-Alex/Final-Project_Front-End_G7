import axios from "axios";

export const Fipe = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 120000,
});
