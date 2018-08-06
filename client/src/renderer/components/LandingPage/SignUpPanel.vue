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
        // username 4 chars, max 15
        // password min 8, max 16 one cap, one lower, one number
  
        if (username.length < 4 || username.length > 15) {
          errors.push('User name must be 4 to 16 characters.')
        }

        if (password != confPass) {
          errors.push('Passwords must match.')
        }

        if (!(password.length >= 8 || password.length <= 16)) {
          errors.push('Password must be 8 to 16 characters')
        } else {
          if (!/[A-Z]/.test(password)) {
            errors.push('Password must have a capitol letter.')
          } else {
            if (!/[a-z]/.test(password)) {
              errors.push('Password must contain a lowercase letter.')
            } else {
              if (!/[0-9]/.test(password)) {
                errors.push('Password must contain one number')
              }
            }
          }
        }
      },
      async post () {
        try {
          this.checkInput()
          if (!this.errors.length) {
            const res = await this.$http.post(`${this.$config.backend}/user`)
            console.log(res)
          }
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