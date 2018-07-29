<template>
  <div>
    <div class="columns">
      <div class="column is-three-quarters">
        <img class="image center-graphic" src="~@/assets/main.png" />
      </div>
      <sign-up-panel/>
    </div>
  </div>
</template>

<script>
  import SignUpPanel from './LandingPage/SignUpPanel'
  export default {
    name: 'landing-page',
    components: { SignUpPanel }
  }
</script>

<style scoped>

  .center-graphic {
    height: 500px;
    padding: 0;
    margin: 0;
  }

  .column {
    padding: 0;
  }

  /**:not(path):not(g) {
    color:                    hsla(210, 100%, 100%, 0.9) !important;
    background:               hsla(210, 100%,  50%, 0.5) !important;
    outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
    box-shadow: none !important;
  }*/
</style>
