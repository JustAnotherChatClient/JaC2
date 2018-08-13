<template>
  <div class="column">
    <section class="section is-small">
      <br>
      <br>
      <h4 class="title is-3 has-text-centered">Sign In</h4>
      <br>
      <br>
      <br>
      <br>
    </section>
    <section class="section">
      <div class="field">
        <div class="control">
          <!-- User will be able to login with a unique email or username -->
          <label class="label is-small">Username / Email</label>
          <input class="input is-small is-rounded" type="text">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Password</label>
          <input class="input is-small is-rounded" type="text">
        </div>
      </div>
      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-info">Sign In</button>
        </div>
      </div>
    </section>
    <!-- Buttons that sit at the bottom to redirect to another page -->
    <section class="section">
      <br>
      <br>
      <br>
      <br>
      <br>
      <a @click="changeView('SignUpPanel')">Sign up!</a>
      <br>
      <a @click="changeView('ForgotPasswordPanel')">Forgot Your Password?</a>
    </section>
  </div>
</template>
<!-- This script below is used to swap out different components on the same browser window -->

<codepen-resources lang="json">
  {
    "css": ["https://use.fontawesome.com/releases/v5.1.0/css/all.css"]
  }
</codepen-resources>

<script>
  export default {
    props: ['currentView'],
    methods: {
      changeView (panel) {
        this.$emit('panel-switch', panel)
      }
    }
  }
</script>

<style scoped>
  /* .center {
    display: flex;
    justify-content: center;
    align-items: center;
  } */
  .column {
    background-color: lightgray;
  }
  .section {
    padding: 0.5em;
  }
  .input {
    width: 90%;
  }
  .title {
    padding : 0;
    margin: 0;
  }
</style>