import axios from "axios";

const ApiPurchase = axios.create({
  baseURL: "http://localhost:3003/",
});
process.env.APP_BASE_URL
export default ApiPurchase;