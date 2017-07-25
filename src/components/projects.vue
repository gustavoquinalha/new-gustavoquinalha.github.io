<template>
  <div>
    <div class="projects white">
      <div class="control-project size margin container wrap center">
        <div class="project basis3 flex1">
          <img :src="require('@/assets/images/projects/1.svg')" width="90%">
        </div>
        <div class="project basis3 flex1 text-right">
          <h2>SEO shouldn't be this difficult indeed.</h2>
          <p>Lionn uses artificial intelligence to learn how your competitors are ranked, and implements the same strategy to get you to the top.</p>
        </div>
      </div>
    </div>

    <div class="projects black">
      <div class="control-project size margin container wrap center">
        <div class="project basis3 flex1 text-left">
          <h2>We work hard, really hard.</h2>
          <p>Revolutionising the SEO industry isn't easy, it takes a lot of skilled specialists. Lionn provides refunds to anyone that doesn't get to the first page, no money grabbing!</p>
        </div>
        <div class="project basis3 flex1">
          <img :src="require('@/assets/images/projects/2.svg')" width="90%">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'projects',
    data() {
      return {


      }
    }
  }
</script>

<style lang="scss" scoped>
  .projects {

  }
  .control-project {
    min-height: 100vh;
  }
  .projects.white {
    background: #fff;
    color: #161616;
  }
  .projects.black {
    background: #161616;
    color: #fff
  }
  .project {
    h2 {
      font-size: 3em
    }
    p {
      font-size: 1.5em
    }
  }
</style>
