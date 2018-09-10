<template>
  <div class="hero is-fullheight">
    <div class="columns">
      <div class="column is-three-quarters is-paddingless">
        <img id="center-graphic" class="image" src="~@/assets/main.jpeg"/>
        <!-- TODO: is-overlay causing multiple issues. add title text to image to resolve -->
        <!-- <h1 id="title" class="title is-3 has-text-info is-overlay">JaC2</h1>
        <h3 id="subtitle" class="subtitle is-3 has-text-info is-overlay">Chat Intelligently</h3> -->
      </div>
       <component :is="currentView" :currentView="currentView" @panel-switch="switchPanel"/>
    </div>
  </div>
</template>
<!-- Calls the other panels and imports it into the main window to allow the panel swapping feature -->
<script>
  import SignUpPanel from './LandingPage/SignUpPanel'
  import LoginPanel from './LandingPage/LoginPanel'
  import ForgotPasswordPanel from './LandingPage/ForgotPasswordPanel'
  export default {
    name: 'landing-page',
    components: { SignUpPanel, LoginPanel, ForgotPasswordPanel },
    data: () => ({currentView: 'LoginPanel'}),
    methods: {
      switchPanel (panel) {
        this.currentView = panel
      }
    }
  }
</script>

<style scoped>
  #center-graphic {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #title {
    color: teal;
    top: 40%;
    left: 25%;
  }
  #subtitle {
    top: 50%;
    left: 25%;
  }
  h3 {
    margin-top: 0.75em;
  }
  .columns {
    height: 40em;
  }
</style>