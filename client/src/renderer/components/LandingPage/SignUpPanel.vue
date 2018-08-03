<template>
  <div class="column">
    <section class="section is-paddingless">
      <h4 class="title is-4 has-text-centered">Sign Up</h4>
    </section>
    <section class="section">
      <div class="field">
        <div class="control">
          <label class="label is-small">Username</label>
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
        <div class="control">
          <label class="label is-small">Confirm Password</label>
          <input class="input is-small is-rounded" type="text">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Email</label>
          <input class="input is-small is-rounded" type="text">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">First Name</label>
          <input class="input is-small is-rounded" type="text">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Last Name</label>
          <input class="input is-small is-rounded" type="text">
        </div>
      </div>
      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-info" @click="post">Sign Up</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'sign-up-panel',
    methods: {
      post () {
        this.$http.post(`${this.$config.backend}/api/test`, {
          text: 'hello-world'
        }).then(res => {
          console.log(res)
        }).catch(err => console.log(err))
      }
    }
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
    padding: 0.255em;
  }
  .input {
    width: 90%;
  }
  .title {
    padding : 0;
    margin: 0;
  }
</style>