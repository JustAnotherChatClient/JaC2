<template>
  <div class="column">
    <section class="section is-paddingless">
      <h4 class="title is-4 has-text-centered">Sign Up</h4>
    </section>
    <section class="section">
      <div class="field">
        <div class="control">
          <label class="label is-small">Username</label>
          <input class="input is-small is-rounded" type="text" v-model="username"/>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Password</label>
          <input class="input is-small is-rounded" type="text" v-model="password"/>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Confirm Password</label>
          <input class="input is-small is-rounded" type="text" v-model="confPass"/>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Email</label>
          <input class="input is-small is-rounded" type="text" v-model="email"/>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">First Name</label>
          <input class="input is-small is-rounded" type="text" v-model="firstName"/>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Last Name</label>
          <input class="input is-small is-rounded" type="text" v-model="lastName"/>
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
      checkInput () {
        const { username, password, email, confPass, firstName, lastName } = this
         
      },
      async post () {
        try {
          const res = await this.$http.post(`${this.$config.backend}/user`)
          console.log(res)
        } catch (err) {
          console.log(err)
        }
      }
    },
    data: {
      errors: [],
      username: null,
      password: null,
      email: null,
      confPass: null,
      firstName: null,
      lastName: null
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