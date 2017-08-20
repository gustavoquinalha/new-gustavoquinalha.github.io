<template>
    <div class="">
      <footer>
        <div class="rodape container align-center justify-center">
          <div class="margin size">
            Todos os direitos reservados 2017.
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'rodape'
}
</script>

<style>
.rodape {
  min-height: 100px;
  background: #161616;
  background: -webkit-linear-gradient(120deg, #161616, #2B2836); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(120deg, #161616, #2B2836); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  text-align: left;
  font-size: 1.5em
}

@media screen and (max-width: 480px) {
  .rodape {
    text-align: center;
    font-size: 1em
  }
}
</style>
