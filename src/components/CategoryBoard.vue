<template>
  <div class="CategoryBoard">
    <div class="position-fixed">
      <ul class="list-group">
        <li class="btn btn-primary" @click="clickOnBut('business')"  v-on:click="selectCategory">Бізнес</li>
        <li class="btn btn-primary" @click="clickOnBut('entertainment')"  v-on:click="selectCategory">Розваги</li>
        <li class="btn btn-primary" @click="clickOnBut('general')"  v-on:click="selectCategory">Загальні</li>
        <li class="btn btn-primary" @click="clickOnBut('health')"  v-on:click="selectCategory">Здоров'я</li>
        <li class="btn btn-primary" @click="clickOnBut('science')"  v-on:click="selectCategory">Наука</li>
        <li class="btn btn-primary" @click="clickOnBut('sports')"  v-on:click="selectCategory">Спорт</li>
        <li class="btn btn-primary" @click="clickOnBut('technology')" v-on:click="selectCategory">Технології</li>
      </ul>
    </div>
  </div>
</template>

<script>
  let constants = require('../constants');

  export default {
    name: "CategoryBoard",

    data () {
      return {
        category: ''
      }
    },
    methods: {
      selectCategory: async function() {
        let top_headlines_parameters = {
          country: 'ua',
          category: this.category,
          sources: '',
          q: '',
          pageSize: 15,
          page: null,
          apiKey: constants.apiKey
        };
        const endpoints = 'top-headlines?';

        this.$emit('selectCategory', endpoints, top_headlines_parameters);
      },
      clickOnBut (category) {
        this.category = category;
      }
    }
  }
</script>

<style scoped>
  .btn-primary {
    width: 230px;
    color: white;
    background: #294f3c!important;
    border-color: white;
    padding-top: 10px;
  }
  .list-group {
    padding-top: 14px;
  }
</style>
