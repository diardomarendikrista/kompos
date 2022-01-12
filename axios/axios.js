import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://kompos-fake-server.herokuapp.com"
});

export default instance;
