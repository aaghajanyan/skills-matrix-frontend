import axios from "axios";
import { serverUrl } from "../config/config";

const basePath = `${serverUrl}/users`;

function post(data) {
    return axios.post(basePath, data);
}

export { post };