import axios from "axios";
import { serverUrl } from "../config/config";

const basePath = `${serverUrl}/invitations`;

function head(invitationId) {
    return axios.head(`${basePath}/${invitationId}`);
}

export { head };
