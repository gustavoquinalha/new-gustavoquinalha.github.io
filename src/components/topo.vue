<template>
  <div>
    <header>
      <div class="header container wrap column center">

        <div class="menu container align-center justify-right">
          <div class="flex">
            <h1>GHQ</h1>
          </div>
          <div class="">
            <ul>
              <li class="active">Home</li>
              <li>Works</li>
              <li>Draws</li>
              <li>Brands</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <animationHeader></animationHeader>
        <div class="header--topo container wrap center">
          <div class="header--topo__image wow slideInUp" data-wow-duration="1s">
            <img class="" src="../assets/images/me.jpg" alt="">
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
      return {}
    }
  }
</script>


<style lang="scss" scoped>
.menu {
  min-height: 70px;
  width: 100%;
  background: #000;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
    h1  {
      color: #fff;
    }
    ul {
      list-style: none;
      display: flex;
        li {
          color: #fff;
          margin: 10px;
          font-size: 1.2em;
          font-weight: 900;
          opacity: .3;
          &.active {
            opacity: 1
          }
        }

    }
}
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

  @media screen and (max-width: 920px) {
    .header--topo {
      transform: translateY(0px)!important;
      .header--topo__image {
        img {
          width: 300px!important;
          transform: translateY(50px)!important;
        }
      }

    }
  }
  @media screen and (max-width: 480px) {
    .header--topo {
      transform: translateY(-100px)!important;
      .header--topo__image {
        img {
          width: 400px!important;
          transform: translateY(100px) translateX(-150px)!important;
          opacity: .3
        }
      }
      .header--topo__text {
        text-align: center!important;
        h1 {
          font-size: 3em!important
        }
      }
    }
  }
</style>
