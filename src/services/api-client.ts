import { useQuery } from 'react-query';
import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {key: '8de70ebbabc54d559fa6381b1c57f134'}})
    