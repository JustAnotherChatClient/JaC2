<template>
  <div class="column">
    <section class="section is-paddingless">
      <h4 class="title is-4 has-text-centered">Forgot Password</h4>
    </section>
    <section class="section">
      <div class="field">
        <div class="control">
          <p>If you forgot your password we can send you a email to reset it!</p>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Email</label>
          <input class="input is-small is-rounded" type="text">
        </div>
      </div>
      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-info">Reset Password</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'forgot-password-panel'
  }
</script>

<style scoped>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  p {
    text-align: left;
  }
</style>