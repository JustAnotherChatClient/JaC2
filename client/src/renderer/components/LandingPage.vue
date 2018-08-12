<template>
  <div class="hero is-fullheight">
    <div class="columns">
      <div class="column is-three-quarters is-paddingless">
        <img id="center-graphic" class="image" src="~@/assets/main.png"/>
        <h1 id="title" class="title is-1 has-text-info is-overlay">JaC2</h1>
        <h3 id="subtitle" class="subtitle is-3 has-text-info is-overlay">Chat Intelligently</h3>
      </div>
      <component :is="currentView" :currentView="currentView" @panel-switch="switchPanel"/>
    </div>
  </div>
</template>

<script>
  import SignUpPanel from './LandingPage/SignUpPanel'
  import LoginPanel from './LandingPage/LoginPanel'
  export default {
    name: 'landing-page',
    components: { SignUpPanel, LoginPanel },
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

  .hero {
    padding-top: 0.5rem;
  }


  /**:not(path):not(g) {
    color:                    hsla(210, 100%, 100%, 0.9) !important;
    background:               hsla(210, 100%,  50%, 0.5) !important;
    outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
    box-shadow: none !important;
  }*/
</style>
