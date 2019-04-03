<template>
  <div class="NewsList">

    <div class="container container-fluid">
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <ul class="media-list">
          <li class="media" v-for="article in articles">
            <div class="media-left">
              <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
              </a>
            </div>
            <div class="media-body">
             <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
             <h5><i>Автор {{article.author}}</i></h5>
              <p>{{article.description}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import getArticles from '../axiosTemplate';

  export default {
      name: "NewsList",
      props: ['endpoints', 'parameters'],
      data () {
        return {
          link: '',
          articles: [],
          loading: true,
          errored: false
        }
      },
      methods: {
        updateParameters: async function (endpoints, parameters) {
          this.articles = await getArticles(endpoints, parameters);
        },
        sortPopulation: function () {
          this.link += '&sortBy=publishedAt'
        }
      },
      created: function () {
        this.updateParameters(this.endpoints, this.parameters);
      },
      watch: {
        parameters: function (adress) {
          this.updateParameters(this.endpoints, adress);
        },
        endpoints: function (adress) {
          this.updateParameters(adress, this.parameters);
        }
      }
    }
</script>

<style scoped>

  .media-object {
    width: 150px;
    padding-right: 10px;

  }
  h5 {
    font-size: small;
  }
  .media {
    scroll-padding-top: 50px;
    border-top: 1px solid lightgray;
    padding-top: 20px;
    border-color: brown;
  }
</style>
