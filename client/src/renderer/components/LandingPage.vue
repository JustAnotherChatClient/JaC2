<template>
  <div class="columns">
    <div class="column is-three-quarters is-paddingless">
      <div id="center-graphic" class="image">
        <div id="headline">
          <h3 class="subtitle is-3 has-text-info is-overlay">Chat Intelligently</h3>
          <h1 class="title is-1 has-text-info is-overlay">JaC2</h1>
        </div>
      </div>
    </div>
    <sign-up-panel/>
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
  #center-graphic {
    height: 100%;
    padding: 0;
    margin: 0;
    background-image: url("~@/assets/main.png");
  }
  #headline {
    color: teal;
    position: relative;
    top: 40%;
    left: 30%;
  }

  h3 {
    margin-top: 0.75em;
  }


  /**:not(path):not(g) {
    color:                    hsla(210, 100%, 100%, 0.9) !important;
    background:               hsla(210, 100%,  50%, 0.5) !important;
    outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
    box-shadow: none !important;
  }*/
</style>
