<template>
  <div class="SourceSelection">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto" style="color: white">News Api</ul>
          <input class="form-control mr-sm-2" type="text" v-model="keyWord" v-on:keyup.enter="writeKeyWord" placeholder="Пошук" aria-label="Пошук">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="writeKeyWord" >Пошук</button>
      </div>
    </nav>
  </div>
</template>

<script>
  let constants = require('../constants');

  export default {
      name: "SourceSelection",
      data() {
        return {
          keyWord: ''
        }
      },
      methods: {
        writeKeyWord: async function() {
          let everything_parameters = {
            q: this.keyWord,
            sources: '',
            domains: '',
            excludeDomains: '',
            from: '',
            to: '',
            language: '',
            sortBy: '',
            pageSize: 15,
            page: null,
            apiKey: constants.apiKey
          };
          const endpoints = 'everything?';
          this.$emit('writeKeyWord', endpoints, everything_parameters);
         }
      }
    }
</script>
<style scoped>
  .form-control {
    width: 250px;
  }
  .navbar{
    background-color: #32473d;
  }
</style>
