<template>
  <div class="column">
    <section class="section is-paddingless">
      <div class='columns'>
        <div class='column is-3'>
          <a class='icon' @click="changeView('LoginPanel')">
            <i class="fas fa-arrow-circle-left" />
          </a>
        </div>
        <div class='column'>
          <h4 class="title is-4">Sign Up</h4>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="field">
        <div class="control">
          <p v-if="errors.username" class="help is-danger">{{ errors.username }}</p>
          <input class="input is-small is-rounded" type="text" v-model="form.username"/>
          <!-- <div class="error">
            <p v-if="errors.username" class="help is-danger">{{ errors.username }}</p>
          </div> -->
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Password</label>
          <input class="input is-small is-rounded" type="password" v-model="form.password"/>
          <div class="error">
            <p v-if="errors.password" class="help is-danger">{{ errors.password }}</p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Confirm Password</label>
          <input class="input is-small is-rounded" type="password" v-model="form.confPass"/>
          <div class="error">
            <p v-if="errors.confPass" class="help is-danger">{{ errors.confPass }}</p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Email</label>
          <input class="input is-small is-rounded" type="text" v-model="form.email"/>
          <div class="error">
            <p v-if="errors.email" class="help is-danger">{{ errors.email }}</p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">First Name</label>
          <input class="input is-small is-rounded" type="text" v-model="form.firstName"/>
          <div class="error">          
            <p v-if="errors.firstName" class="help is-danger">{{ errors.firstName }}</p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label is-small">Last Name</label>
          <input class="input is-small is-rounded" type="text" v-model="form.lastName"/>
          <div class="error">
            <p v-if="errors.lastName" class="help is-danger">{{ errors.lastName }}</p>
          </div>
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
<!-- This script below is used to swap out different components on the same browser window
     The same script also handles simple validation before connecting to the server -->
<script>
  export default {
    props: ['currentView'],
    methods: {
      changeView (panel) {
        this.$emit('panel-switch', panel)
      },
      checkInput () {
        const { form, errors } = this
        // username 4 chars, max 15
        // password min 8, max 16 one cap, one lower, one number

        if (form.username) {
          if (form.username.length < 4 || form.username.length > 15) {
            errors.username = 'Username must be 4 to 16 characters.'
          } else {
            // no errors
            errors.username = null
          }
        } else {
          errors.username = 'Username is required.'
        }

        if (form.password) {
          if (!(form.password.length >= 8 || form.password.length <= 16)) {
            errors.password = 'Password must be 8 to 16 characters'
          } else {
            if (!/[A-Z]/.test(form.password)) {
              errors.password = 'Password must have a capitol letter.'
            } else {
              if (!/[a-z]/.test(form.password)) {
                errors.password = 'Password must contain a lowercase letter.'
              } else {
                if (!/[0-9]/.test(form.password)) {
                  errors.password = 'Password must contain one number.'
                } else {
                  errors.password = null
                }
              }
            }
          }
        } else {
          errors.password = 'Password is required.'
        }

        if (form.confPass) {
          if (form.password !== form.confPass) {
            errors.confPass = 'Passwords must match.'
          } else {
            errors.confPass = null
          }
        } else {
          errors.confPass = 'Confirm Password is required.'
        }

        if (form.email) {
          if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = 'Email format is mail@some.com.'
          } else {
            errors.email = null
          }
        } else {
          errors.email = 'Email is required.'
        }

        if (!form.firstName) {
          errors.firstName = 'First Name is required.'
        } else {
          errors.firstName = null
        }

        if (!form.lastName) {
          errors.lastName = 'Last Name is required.'
        } else {
          errors.lastName = null
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
            const res = await this.$http.post(`${this.$config.backend}/api/auth/signup`, this.form)
              .then(res => res.data)
            if (res.status === 200) {
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
          username: null,
          password: null,
          email: null,
          confPass: null,
          firstName: null,
          lastName: null
        },
        errors: {
          username: null,
          password: null,
          email: null,
          confPass: null,
          firstName: null,
          lastName: null
        }
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
  .error {
    height: 1.2rem;
    padding: 0;
    margin-left: 0.3rem;
  }
  .help {
    margin: 0;
  }

  .icon:hover {
    color: #3273dc;
  }
    
  label {
    margin-left: 0.3rem;
  }
</style>