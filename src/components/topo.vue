<template>
  <div>
    <header>
      <div class="header container column center">
        <animationHeader>
        </animationHeader>
        <div class="header--topo container center">
          <div class="header--topo__image wow slideInUp" data-wow-duration="1s">
            <img class=""  src="../assets/images/me.jpg" alt="">
          </div>
          <div class="header--topo__text">
            <h1 class="wow slideInLeft" data-wow-duration="1s">Gustavo Quinalha</h1>
            <p class="wow slideInRight" data-wow-duration="1s">Front end developer and UI/UX enthusiast. Lover of grid, javascript, illustrations and strogonoff.</p>
            <!-- <button type="button" name="button">More about me</button> -->
            <img src="" alt="">
          </div>
        </div>
      </div>
    </header>
  </div>

</template>

<script>
  import animationHeader from './animationHeader'

  export default {
    components: {
      animationHeader
    },
    name: 'topo',
    data() {
      return {


      }
    }
  }
</script>


<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 100vh;
  background: #000000;
    .header--topo {
      width: 100%;
      z-index: 5;
      transform: translateY(-100px);
      .header--topo__image {
        margin-right: 50px;
        img {
          width: 400px;
          transform: translateY(150px);
        }
      }
      .header--topo__text {
        width: 400px;
        max-width: 90%;
        color: #fff;
        z-index: 2;
        text-align: left;
        h1 {
          font-size: 4em;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 110%;
          padding-bottom: 20px
        }
        p {
          font-size: 2em;
          padding-bottom: 20px;
          opacity: .5
        }
      }
    }
}






</style>
