<template>
  <footer>
    <p>© 2019
      <a style="color:#0a93a6; text-decoration:none;" href="#"> News Api</a>
      <a class="git" href="https://github.com/MidaV29/News-api"> GitHub</a>
    </p>
  </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  footer{
    background-color: #32473d;
    width: 100%;
    height: 50px;
    text-align: center;
    color: #CCC;
  }
  .git {
    padding-left: 100px;
  }

  footer p {
    padding: 10.5px;
    margin: 0px;
    line-height: 100%;
  }
</style>
