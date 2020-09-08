import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4454/servers",
});

export default instance;
