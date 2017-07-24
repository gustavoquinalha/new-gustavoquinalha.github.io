<template>
  <div>
    <header>
        <div class="header container center">
          <div class="bgpattern"></div> <!-- verde-mais-claro -->
          <div class="bgpattern2"></div> <!-- verde-claro -->
          <div class="bgpattern3"></div> <!-- verde-escuro -->
          <div class="bgpattern4"></div> <!-- branco -->
          <div class="header-text">
            <h1>Crafting beautiful UI/UX into seamless semantic code.</h1>
            <p>Located in the old English town of Shrewsbury, home to the world's first skyscraper & the oldest working brewery. Lead Designer at Zengenti.</p>
            <button type="button" name="button">More about me</button>
            <img src="" alt="">
          </div>
        </div>
    </header>
  </div>

</template>

<script>
  export default {
    name: 'topo',
    data() {
      return {


      }
    }
  }
</script>

<style lang="scss" scoped>

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
       z-index: 2;
         h1 {
           font-size: 3.5em;
           line-height: 110%;
           padding-bottom: 20px
         }
         p {
           font-size: 1.5em;
           padding-bottom: 20px;
         }
         
     }
   }
}
.bgpattern,
.bgpattern2,
.bgpattern3,
.bgpattern4 {
 width: 100%;
 height: 100%;
 background-size: 100%;
 background-position: top center;
 position: absolute;
 left: 0;
 top:0;
 z-index: 1;
 animation-name: animaBg;
 animation-fill-mode: backwards;
 animation-timing-function: linear;
 animation-iteration-count: infinite;
 background-attachment: fixed;
 opacity: .2;
 @keyframes animaBg {
   from {background-position: 0% 5000px}
   to {background-position: 0% -5000px}
 }
}
.bgpattern { // verde-mais-claro
 background: url(../assets/images/bg.svg)!important;
 animation-duration: 200s;
}
.bgpattern2 { // verde-claro
 background: url(../assets/images/bg2.svg)!important;
 animation-duration: 200s;
}
.bgpattern3 { // verde-escuro
 background: url(../assets/images/bg3.svg)!important;
 animation-duration: 150s;
}
.bgpattern4 { // branco
 background: url(../assets/images/bg4.svg)!important;
 animation-duration: 120s;
}
</style>
