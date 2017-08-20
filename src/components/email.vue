<template>
  <div class="github container align-center justify-center">
    <div>
      <h1>Gostou do meu portfólio?</h1>
      <p>Opa beleza? Gostou do que viu? Me mande um e-mail.</p>
      <button type="button" name="button">Enviar e-mail</button>
      <!-- <a href="#" class="btn">Enviar e-mail</a> -->
    </div>
  </div>

</template>

<script>
  export default {
    name: 'email',
    data() {
      return {


      }
    }
  }
</script>

<style lang="scss" scoped>
.github {
  min-height: 200px;
  padding-top: 100px;
  padding-bottom: 100px;
  background: #161616;
  background: -webkit-linear-gradient(120deg, #161616, #2B2836); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(120deg, #161616, #2B2836); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  text-align: center;
    div {
      max-width: 90%;
    }
    h1 {
      font-size: 3.5em;
    }
    p {
      padding-top: 10px;
      font-size: 1.8em;
        margin-bottom: 20px
    }
}
@media screen and (max-width: 480px) {
  .github {
    h1 {
      font-size: 2em
    }
    p {
      font-size: 1em
    }
  }
}
</style>
