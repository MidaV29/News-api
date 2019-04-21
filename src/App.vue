<template>
  <div class="container-fluid" id="app">
      <div class="row">
        <SourceSelection v-on:writeKeyWord="writeKeyWord"></SourceSelection>

        <div class="col-2">
          <CategoryBoard v-on:selectCategory="selectCategory"> </CategoryBoard>
        </div>

        <div class="col-7">
          <NewsList v-bind:parameters="parameters" v-bind:endpoints="endpoints"></NewsList>
        </div>

        <div class="col-3">
          <NewsBoard></NewsBoard>
        </div>
        <Footer></Footer>
      </div>
  </div>
</template>

<script>
import SourceSelection from './components/SourceSelection'
import NewsList from './components/NewsList'
import NewsBoard from './components/NewsBoard'
import CategoryBoard from './components/CategoryBoard'
import Footer from "@/components/Footer";



export default {
  name: 'App',
  components: {
    SourceSelection,
    NewsList,
    NewsBoard,
    CategoryBoard,
    Footer
  },
  data () {
    return {
      url: '',
      parameters: '',
      endpoints: ''
    }
  },
  methods: {
    selectCategory: async function (endpoints, category) {
      this.endpoints = endpoints;
      this.parameters = category
    },
    writeKeyWord: async function (endpoints, keyWord) {
      this.endpoints = endpoints;
      this.parameters = keyWord
    }
  }
}
</script>

<style>
#app {
  padding-top: 50px;
}
</style>
