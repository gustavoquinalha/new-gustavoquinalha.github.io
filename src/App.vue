<template>
  <div id="app">
<!-- <div class="menu">
  <router-link to="/">Home</router-link>
</div> -->
<header>
    <div class="header container center">
      <div class="header-text">
        <h1>Crafting beautiful UI/UX into seamless semantic code.</h1>
        <p>Located in the old English town of Shrewsbury, home to the world's first skyscraper & the oldest working brewery. Lead Designer at Zengenti</p>
        <button type="button" name="button">More about me</button>
        <img src="" alt="">
      </div>
    </div>
</header>



    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
   @import './src/assets/css/main.scss';
  header {
    width: 100vw;
    height: 100vh;
    background: #161616;
    background: -webkit-linear-gradient(120deg, #161616, #2B2836); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(120deg, #161616, #2B2836); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      .header {
        width: 100%;
        height: 100%;

        .header-text {
          width: 800px;
          max-width: 90%;
          color: #fff;
            h1 {
              font-size: 3.5em;
              line-height: 110%;
              padding-bottom: 20px
            }
            p {
              font-size: 1.5em;
              padding-bottom: 20px;
            }
            button {
              background: $primary;
              line-height: 50px;
              height: 50px;
              border: none;
              width: 250px;
              color: #fff;
              font-size: 1.2em;
              font-weight: 900;
              border-radius: 4px;
            }
        }
      }
  }

</style>
