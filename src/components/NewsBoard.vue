<template>
  <div class="NewsBoard">
          <li class="card" v-for="article in articles">
            <a v-bind:href="article.url" target="_blank">
            <img class="card-img-top" v-bind:src="article.urlToImage" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{article.title}}</h5>
            </div>
            </a>
          </li>
    </div>

</template>

<script>
  import getArticles from '../axiosTemplate';

  export default {
    name: "NewsBoard",
    data () {
      return {
        articles: []
      }
    },
    methods: {
      updateSource: async function () {
        let URL = 'top-headlines?/';
        let top_headlines_parameters = {
          country: 'ua',
          category: 'sports',
          sources: '',
          q: '',
          pageSize: 9,
          page: null
        };
        this.articles = await getArticles(URL, top_headlines_parameters);
        }
    },
    created: function () {
      this.updateSource();
    },
    watch: {
      source: function () {
        this.updateSource();
      }
    }
  }
</script>

<style scoped>
  .card {
  }
</style>
