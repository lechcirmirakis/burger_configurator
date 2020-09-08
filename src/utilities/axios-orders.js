import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-bulider.firebaseio.com/",
});

export default instance;
