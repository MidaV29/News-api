<template>
  <div class="NewsList">
    <div class="container container-fluid">
      <ul class="media-list">
        <li class="media" v-for="article in articles">
           <div class="card mb-3" style="max-width: 900px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img v-bind:src="article.urlToImage" class="card-img" >
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h5>
                    <p class="card-text">{{article.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>


<script>
  import AxiosArticles from '../axiosTemplate'
  let constants = require('../constants');
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
          let searchParams;
          let endpoint;
          if (parameters.apiKey != null) {
              searchParams = new URLSearchParams(parameters);
              endpoint = endpoints
          }
          else {
              searchParams = new URLSearchParams(constants.defaultParams);
              endpoint = 'everything?'
          }
          let axiosArticles = new AxiosArticles(constants.domain + endpoint + searchParams.toString());
          this.articles = await axiosArticles.getArticles();
        }
      },
      created: async function () {
        this.updateParameters(this.endpoints, this.parameters);
      },
      watch: {
        parameters: async function (adress) {
          this.updateParameters(this.endpoints, adress);
        },
        endpoints: async function (adress) {
          this.updateParameters(adress, this.parameters);
        }
      }
    }
</script>

<style scoped>

  .card-img {
    width:250px;
    height:149px;
  }
  .media-list {
    padding-top: 15px;
    height: 2550px;
  }
  NewsList {
    height: 2500px;
  }
  .card-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }
  .card {
    width: 100%;
    min-height: 150px;
    max-height: 150px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
</style>
