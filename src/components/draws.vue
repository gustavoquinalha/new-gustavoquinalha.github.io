<template>
    <div class="content size margin ">
      <div class="title wow slideInUp" data-wow-duration="1s">
        <h1>Conheça alguns dos<br>meus desenhos</h1>
        <hr>
      </div>
      <div class="container-draw">
        <div class="draw-img">
          <div class="container-draw-img">
            <div class="work-img" v-for="work in justDrawOne">
              <img :src="require('@/assets/images/draws/' + work.image)" width="100%">
            </div>
          </div>
        </div>
        <div class="draw-img">
          <div class="container-draw-img">
            <div class="work-img" v-for="work in justDrawTwo">
              <img :src="require('@/assets/images/draws/' + work.image)" width="100%">
            </div>
          </div>
        </div>
        <div class="draw-img">
          <div class="container-draw-img">
            <div class="work-img" v-for="work in justDrawThree">
              <img :src="require('@/assets/images/draws/' + work.image)" width="100%">
            </div>
          </div>
        </div>
        <div class="draw-img">
          <div class="container-draw-img">
            <div class="work-img" v-for="work in justDrawFour">
              <img :src="require('@/assets/images/draws/' + work.image)" width="100%">
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
// import rodape from './rodape'
  export default {
    name: 'draws',
    computed: {
    justDrawOne(){
      return this.works.filter(works => works.tag == '1');
    },
    justDrawTwo(){
      return this.works.filter(works => works.tag == '2');
    },
    justDrawThree(){
      return this.works.filter(works => works.tag == '3');
    },
    justDrawFour(){
      return this.works.filter(works => works.tag == '4');
    },
  },
  // components: {
  //   rodape: rodape
  // },
    data() {
      return {
        works: [{
          title: 'title 1',
          type: 'draw',
          tag: '1',
          image: '1.png'
        },
        {
          title: 'title 11',
          type: 'draw',
          tag: '2',
          image: '11.jpg'
        },
        {
          title: 'title 2',
          type: 'draw',
          tag: '1',
          image: '2.png'
        }, {
          title: 'title 3',
          type: 'draw',
          tag: '3',
          image: '3.png'
        },
        {
          title: 'title 4',
          type: 'draw',
          tag: '1',
          image: '4.jpg'
        },
        {
          title: 'title 5',
          type: 'draw',
          tag: '2',
          image: '5.png'
        },
        {
          title: 'title 6',
          type: 'draw',
          tag: '3',
          image: '6.jpg'
        },
        {
          title: 'title 7',
          type: 'draw',
          tag: '3',
          image: '7.jpg'
        },
        {
          title: 'title 8',
          type: 'draw',
          tag: '4',
          image: '8.jpg'
        },
        {
          title: 'title 9',
          type: 'draw',
          tag: '4',
          image: '9.png'
        },
        {
          title: 'title 10',
          type: 'draw',
          tag: '1',
          image: '10.jpg'
        },

        {
          title: 'title 12',
          type: 'draw',
          tag: '4',
          image: '31.png'
        },
        {
          title: 'title 13',
          type: 'draw',
          tag: '2',
          image: '32.png'
        },
      ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-draw {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .draw-img {
      min-height: 100px;
      margin: 1px;
      flex-grow: 1;
      flex-basis: 300px
    }
  }

  .container-draw-img {
    display: flex;
    flex-direction: column;
    .work-img {
      flex-grow: 1;
      margin: 10px;
      cursor: pointer;
        img {
          border: 1px solid #e8eaeb
        }
    }
  }

  @media screen and (max-width: 480px) {
    .container-draw {
      flex-wrap: wrap;
    }
  }
  .title {
    margin-left: 10px;
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
      background: #000;
      border: none;
      margin: 0 auto;
      border-radius: 40px;
      opacity: .5;
      margin-bottom: 100px;
    }
  }
</style>
