<template>
  <div id="app">

    <topo></topo>
    <intro></intro>
    <github></github>
    <hello></hello>
    <!-- <router-view></router-view> -->
    <rodape></rodape>

  </div>
</template>

<script>
  import topo from './components/topo';
  import hello from './components/hello';
  import github from './components/github';
  import rodape from './components/rodape';
  import intro from './components/intro';
  export default {
    name: 'app',
    components: {
      topo: topo,
      hello: hello,
      github: github,
      rodape: rodape,
      intro: intro
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import './src/assets/css/main.scss';
</style>
