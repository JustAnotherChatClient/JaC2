<template>
  <div class="column">
    <section class="section is-paddingless">
      <h4 class="title is-4 has-text-centered">Sign In</h4>
    </section>
    <section class="section">
      <div class="field">
        <div class="control">
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
    <section class="section">
      <a @click="changeView('SignUpPanel')">Sign up</a>
      <a @click="changeView('ForgotPasswordPanel')">Forgot Your Password?</a>
    </section>
  </div>
</template>

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