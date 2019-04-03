import { apiKey, domain} from "./constants";
import axios from 'axios';

const getArticles = async (endpoints, params) => (await axios.get(domain + endpoints, {params: {...params, apiKey}})).data.articles;
export default getArticles;
