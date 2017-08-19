<template>
  <div id="app">

    <topo></topo>
    <intro></intro>
    <!-- <github></github> -->
    <projects></projects>
    <draws></draws>
    <logos></logos>
    <!-- <router-view></router-view> -->
    <email></email>
    <rodape></rodape>

  </div>
</template>

<script>
  import topo from './components/topo';
  import logos from './components/logos';
  import draws from './components/draws';
  import github from './components/github';
  import projects from './components/projects';
  import rodape from './components/rodape';
  import intro from './components/intro';
  import email from './components/email';
  export default {
    name: 'app',
    components: {
      topo: topo,
      logos: logos,
      projects: projects,
      intro: intro,
      draws: draws,
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
