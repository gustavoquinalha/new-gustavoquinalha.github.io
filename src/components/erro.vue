<template>
  <div id="app">
    Erro
    <router-link to="/">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'erro'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #161616;
  background: -webkit-linear-gradient(120deg, #161616, #2B2836); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(120deg, #161616, #2B2836); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
