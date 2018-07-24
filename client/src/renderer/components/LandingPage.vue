<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column is-four-fifths">
          <img class="image" src="~@/assets/main.png" alt="main-background">
        </div>
        <sign-up-panel/>
      </div>
    </section>
  </div>
</template>

<script>
  import SignUpPanel from './LandingPage/SignUpPanel'
  export default {
    name: 'landing-page',
    components: {SignUpPanel}
  }
</script>

<style>
 .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /**:not(path):not(g) {
    color:                    hsla(210, 100%, 100%, 0.9) !important;
    background:               hsla(210, 100%,  50%, 0.5) !important;
    outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
    box-shadow: none !important;
  }*/
</style>
