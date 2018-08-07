<template>
  <div class="column">
    <section class="section">
      <a @click="changeView('LoginPanel')">Back to Sign Up</a>
    </section>
    <section class="section is-paddingless">
      <h4 class="title is-4 has-text-centered">Forgot Password</h4>
    </section>
    <section class="section">
      <div class="field">
        <div class="control">
          <div class="error">
            <p>{{ message }}</p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-large">Email</label>
          <input id="input" class="input is-small is-rounded" type="text" v-model="form.email">
          <div class="error">
            <p v-if="errors.email" class="help is-danger">{{ errors.email }}</p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-info" @click="post">Reset Password</button>
        </div>
      </div>
    </section>
  </div>
</template>

<!-- <script>
  export default {
    name: 'forgot-password-panel'


  }
</script> -->

<script>
  export default {
    props: ['currentView'],
    methods: {
      changeView (panel) {
        this.$emit('panel-switch', panel)
      },
      checkInput () {
        const { form, errors } = this
        // Validates that the email is a real email format
        // Validates that the user did not just enter blank information

        if (form.email) {
          if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = 'Email format is mail@some.com.'
          } else {
            errors.email = null
            // success
          }
        } else {
          errors.email = 'Email is required.'
        }
        let errorCount = 0
        Object.keys(errors).forEach(key => {
          if (errors[key]) errorCount++
        })
        return errorCount === 0
      },
      async post () {
        try {
          if (this.checkInput()) {
            const res = await this.$http.post(`${this.$config.backend}/user`, this.form)
            console.log(res)
            this.res.message = res.message
            // this.message = 'Check your email for the link to reset the password!'
            // This needs to return the success message of the p tag
            // success
          } else {
            this.message = 'Check your email for the link to reset the password!'
          }
        } catch (err) {
          console.log(err)
          this.message = 'Poop'
          // failed
        }
      }
    },
    data: () => ({
      form: {
        email: null
      },
      message: 'If you forgot your password we can send you a email to reset it!',
      errors: {
        email: null
      },
      res: {
        message: null,
        error: null
      }
    })
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
    height: 30em;
  }
  .section {
    padding: 0.5em;
  }
  .input {
    width: 90%;
  }
  #input{
    align-self: center;
  }
  .title {
    padding-top : 0;
    margin: 0;
  }
  p {
    text-align: left;
    margin-top: 10%;
  }
  label {
    margin-bottom: 10%;
    text-align: center;
  }
  button {
    margin-top: 25%;
    width: 100%
  }
  .field {
    align-self: left;
  }
</style>