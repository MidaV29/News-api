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
  export default {
    name: "CategoryBoard",

    data () {
      return {
        category: ''
      }
    },
    methods: {
      selectCategory: function() {
        let top_headlines_parameters = {
          country: 'ua',
          category: this.category,
          sources: '',
          q: '',
          pageSize: 9,
          page: null
        };
        const endpoints = 'top-headlines?/';

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
    background: darkslategray!important;
    border-color: white;
    padding-top: 10px;
  }
</style>
