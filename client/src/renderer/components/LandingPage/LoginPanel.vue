<template>
  <div class="column">
    <section class="section is-paddingless">
      <h4 class="title is-4 has-text-centered">Sign In</h4>
    </section>
    <section class="section">
      <div class="field">
        <div class="control">
          <!-- User will be able to login with a unique email or username -->
          <label class="label is-small">Username / Email</label>
          <input class="input is-small is-rounded" type="text" v-model="form.usernameEmail">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Password</label>
          <input class="input is-small is-rounded" type="password" v-model="form.password">
        </div>
      </div>
      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-info" @click="post">Sign In</button>
        </div>
      </div>
    </section>
    <!-- Buttons that sit at the bottom to redirect to another page -->
    <section class="section">
      <button class='button is-link is-small' @click="changeView('SignUpPanel')">Sign up</button>
    </section>
  </div>
</template>
<!-- This script below is used to swap out different components on the same browser window -->
<script>
  export default {
    props: ['currentView'],
    methods: {
      changeView (panel) {
        this.$emit('panel-switch', panel)
      },
      checkInput () {
        const { form, errors } = this

        if (!form.usernameEmail) {
          errors.usernameEmail = 'A username or email is required.'
        }

        if (!form.password) {
          errors.password = 'A password is required.'
        }

        return (form.usernameEmail && form.password)
      },
      async post () {
        try {
          if (this.checkInput()) {
            const res = await this.$http.post(`${this.$config.backend}/api/auth/login`, {
              usernameEmail: this.form.usernameEmail,
              password: this.form.password
            }).then(res => res.data)
            if (res.status === 200) {
              // SWING TO MAIN WINDOW PASSING res.user
              this.$notify(res.message, 'success')
              Object.keys(this.form).forEach(key => {
                this.form[key] = null
              })
            } else {
              this.$notify(res.message, 'error')
            }
          }
        } catch (err) {
          this.$notify('An error occurred. Try again.', 'error')
        }
      }
    },
    data () {
      return {
        form: {
          usernameEmail: null,
          password: null
        },
        errors: {
          username_email: null,
          password: null
        }
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