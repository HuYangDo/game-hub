import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {key: 'acaef31a18aa4bf2aa9d3547718c4bc7'}})