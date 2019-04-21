const axios = require("axios");

export default function AxiosArticles(param) {
  this.getArticles = async () => axios.get(param)
    .then(response => {
        return response.data.articles;
    })
    .catch(error => {
        console.log(error)
    })
}

