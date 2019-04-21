<template>
  <div class="NewsBoard">
    <li class="card" v-for="article in articles">
        <a v-bind:href="article.url" target="_blank">
          <img class="card-img-top" v-bind:src="article.urlToImage" alt="Card image cap" style="height: 200px">
          <div class="card-body">
            <h5 class="card-title">{{article.title}}</h5>
          </div>
        </a>
    </li>
  </div>
</template>

<script>
import AxiosArticles from '../axiosTemplate'
let constants = require('../constants');
 export default {
    name: "NewsBoard",
    data () {
      return {
        articles: [],
        category: ''
      }
    },
    methods: {
      updateSource: async function () {
        let URL = 'https://newsapi.org/v2/top-headlines?';
        let top_headlines_parameters = {
          country: 'ua',
          category: this.category,
          sources: '',
          q: '',
          pageSize: 7,
          page: null,
          apiKey: constants.apiKey
        };
        let searchParams = new URLSearchParams(top_headlines_parameters);
        let axiosArticles = new AxiosArticles(URL + searchParams.toString());
        this.articles = await axiosArticles.getArticles();
      }
    },
    created: async function () {
      this.updateSource();
    },

    watch: {
      source: async function () {
        this.updateSource();
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 100%;
    background-color: #f9fffc;
    margin: 15px;
    margin-top: -5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    min-height: 346px;
    max-height: 346px;

  }
  .NewsBoard {
    padding: 20px;
  }
  .card-body {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
