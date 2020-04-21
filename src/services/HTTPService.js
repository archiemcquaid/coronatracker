import axios from "axios";
import {ROOT_URL} from "../constants";

const get = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(`${ROOT_URL}${url}`, {
            headers: {
                Authorization: process.env.AUTH_TOKEN,
            },
        }).then(res => {
            resolve(res.data);
        }).catch(err => (reject(err)));
    });

};

export default {
    get
}