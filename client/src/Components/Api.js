import axios from "axios";

const baseURL = "https://drab-rose-katydid-boot.cyclic.app/";

export default axios.create({ baseURL: baseURL });
