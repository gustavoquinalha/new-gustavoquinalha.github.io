
<template>
  <div class="bg" id="features">

    <div class="bg container column features">
      <div class="intro wow slideInUp" data-wow-duration="1s">
        <h1>Conheça alguns dos<br>meus projetos</h1>
        <hr class="hr animated bounceIn" data-wow-delay="5s">
      </div>

      <div v-for="project in projects">

        <div class="infos container wrap white" v-if="project.class == 'white'">
          <div class="basis5 flex info-item container center wow slideInLeft" data-wow-duration="1s">
            <div class="float-left imgg">
              <!-- <img src="./../assets/images/projects/clinify.png" class="info-item-img float-left"> -->
              <img :src="require('@/assets/images/projects/' + project.image)" class="info-item-img float-left">
            </div>
          </div>
          <div class="basis5 flex info-item container center wow slideInRight" data-wow-duration="1s">
            <div class="info-item-text float-left">
              <h1>{{project.title}}</h1>
              <p>{{project.description}}</p>
            </div>
          </div>
        </div>

        <div class="infos container wrap black" v-if="project.class == 'black'">
          <div class="basis5 flex info-item container center order1 wow slideInRight" data-wow-duration="1s">
            <div class="float-right imgg">
              <img :src="require('@/assets/images/projects/' + project.image)" class="info-item-img float-right">
            </div>
          </div>
          <div class="basis5 flex info-item container center order2 wow slideInLeft" data-wow-duration="1s">
            <div class="info-item-text float-right">
              <h1>{{project.title}}</h1>
              <p>{{project.description}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'infos',
    data() {
      return {
        projects: [{
          id: 1,
          class: 'white',
          title: 'Clinify',
          description: 'Um aplicativo completo para clinicas',
          image: 'clinify.png'
        }, {
          id: 2,
          class: 'black',
          title: 'Sendify',
          description: 'Um aplicativo completo para clinicas',
          image: 'sendify.png'
        }, {
          id: 3,
          class: 'white',
          title: 'PDFy ',
          description: 'Um aplicativo completo para clinicas',
          image: 'pdfy.png'
        }, {
          id: 4,
          class: 'black',
          title: 'Sizify ',
          description: 'Um aplicativo completo para clinicas',
          image: 'sizify.png'
        }, {
          id: 5,
          class: 'white',
          title: 'SeoTopper ',
          description: 'Um aplicativo completo para clinicas',
          image: 'clinify.png'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .black {
    background: #000;
    color: #fff;
    text-align: right;
  }
  .white {
    background: #fff;
    color: #000;
  }

  .features {
    padding-top: 100px;
  }

  .intro {
    width: 90%;
    margin: 0 auto;
    padding-top: 50px;
    h1 {
      font-size: 3.5em;
      line-height: 110%;
      padding-bottom: 20px;
      color: #000;
      text-align: center;
    }
    hr {
      width: 200px;
      height: 10px;
      background: #808080;
      border: none;
      margin: 0 auto;
      border-radius: 40px;
    }
  }

  .order1 {
    order: 2
  }

  .order2 {
    order: 1
  }

  .infos {
    min-height: 100vh;
    .info-item {
      // text-align: center;
      // border: 1px solid red;
      .imgg {
        text-align: center;
      }
      .info-item-text {
        width: 90%;
        h1 {
          font-size: 3.5em;
          line-height: 110%;
          padding-bottom: 20px;
        }
        p {
          font-size: 1.2em;
        }
      }
      .info-item-img {
        width: 90%;
        border-radius: 6px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .5)
      }
    }
  }

  // .float-left {
  //   transform: translateX(-100px)
  // }
  //
  // .float-right {
  //   transform: translateX(100px)
  // }

  @media screen and (max-width: 720px) {
    .infos {
      flex-direction: column
    }
    .float-left {
      transform: translateX(0)
    }
    .float-right {
      transform: translateX(0)
    }
    .order2 {
      order: 2
    }
    .order1 {
      order: 1
    }
    .info-item {
      text-align: center
    }
    .info-item-img {
      width: 300px!important;
      text-align: center;
      margin: 0 auto!important;
      background: red
    }
  }

  @media screen and (max-width: 480px) {
    .info-item-text {
      h1 {
        font-size: 2em!important;
      }
      p {
        font-size: 1em!important;
      }
    }
  }
</style>
