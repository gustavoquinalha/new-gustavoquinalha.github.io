<template>
  <div id="app">

    <topo></topo>
    <intro></intro>
    <github></github>
    <hello></hello>
    <!-- <router-view></router-view> -->
    <email></email>
    <rodape></rodape>

  </div>
</template>

<script>
  import topo from './components/topo';
  import hello from './components/hello';
  import github from './components/github';
  import rodape from './components/rodape';
  import intro from './components/intro';
  import email from './components/email';
  export default {
    name: 'app',
    components: {
      topo: topo,
      intro: intro,
      hello: hello,
      github: github,
      rodape: rodape,
      email: email
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
