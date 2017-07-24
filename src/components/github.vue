<template>
  <div class="github container align-center justify-center">
    <div>
      <h1>Follow me on github</h1>
      <p>Assign an Issue or a Pull Request to one or more teammates.</p>
      <button type="button" name="button">Follow now</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'intro',
    data() {
      return {


      }
    }
  }
</script>

<style lang="scss" scoped>
.github {
  min-height: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 100px;
  background: #161616;
  background: -webkit-linear-gradient(120deg, #161616, #2B2836); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(120deg, #161616, #2B2836); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  text-align: center;
    div {
      width: 800px;
      max-width: 90%;
    }
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1.5em;
        margin-bottom: 20px
    }

}
</style>
