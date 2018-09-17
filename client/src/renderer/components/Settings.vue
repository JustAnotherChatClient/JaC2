<template>
  <div class='is-flex'>
    <nav class="hero is-link is-small">
    </nav>
  <div class="columns">
  <div class="column is-narrow is-flex">
    <!-- TODO: Add Scrolling to Icons -->
    <!-- TODO: Add Links for Icons    -->
  </div>
  <div class='chat-area' style="height: 80%; padding-top: 50px">
      <div class="columns">
        <div class="column">
          <div class='chat_img' style="height: 300px; width: 300px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test"></div>
          <h3 class="subtitle is-2"><b>Current Picture</b></h3>
          <router-link to="/main-page">
            <a>
              <span class="icon is-large fa-3x" style="padding: 50px"><i class="fas fa-angle-left" aria-hidden="true"></i></span>
            </a>
            </router-link>
            <a>
              <span class="icon is-large fa-3x" style="padding: 50px" @click="post" @keydown.enter="post"><i class="fas fa-save" aria-hidden="true"></i></span>
            </a>
            <a>
             <span class="icon is-large fa-3x" style="padding: 50px" @click="resetForm"><i class="fas fa-ban" aria-hidden="true" ></i></span>
            </a>
        </div>
        <div class="column is-flex">
          <div class="field">
               <div class="control">
                <label class="label">First Name</label>
                 <input class="input is-small is-rounded" type="text" v-model="form.firstName" @keydown.enter="post"/>
                 <div class="error">
                  <p v-if="errors.firstName" class="help is-danger">{{ errors.lastName }}</p>
                </div>
              </div>
          </div>
          <div class="field">
               <div class="control">
                <label class="label">Last Name</label>
                 <input class="input is-small is-rounded" type="text" v-model="form.lastName" @keydown.enter="post"/>
                 <div class="error">
                  <p v-if="errors.lastName" class="help is-danger">{{ errors.lastName }}</p>
                </div>
              </div>
          </div>
          <div class="field">
               <div class="control">
                 <label class="label">Username</label>
                 <input class="input is-small is-rounded" type="text" v-model="form.username" @keydown.enter="post"/>
                 <div class="error">
                  <p v-if="errors.username" class="help is-danger">{{ errors.lastName }}</p>
                </div>

              </div>
          </div>
          <div class="field">
               <div class="control">
                 <label class="label">Email</label>
                 <input class="input is-small is-rounded" type="text" v-model="form.email" @keydown.enter="post"/>
                 <div class="error">
                  <p v-if="errors.email" class="help is-danger">{{ errors.lastName }}</p>
                </div>
              </div>
          </div>
          <div class="field">
               <div class="control">
                 <label class="label">Password</label>
                 <input class="input is-small is-rounded" type="text" v-model="form.password" @keydown.enter="post"/>
                 <div class="error">
                  <p v-if="errors.password" class="help is-danger">{{ errors.lastName }}</p>
                </div>
              </div>
          </div>
          <div class="field">
               <div class="control">
                 <label class="label">Confirm Password</label>
                 <input class="input is-small is-rounded" type="text" v-model="form.confPass" @keydown.enter="post"/>
                 <div class="error">
                  <p v-if="errors.confPass" class="help is-danger">{{ errors.lastName }}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <!-- <div class='chat_img' style="height: 50px; width: 50px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test"> <p> Test Message </p></div> -->
    </div>
</div>
</div>
</template>

<script>
// var electron = require('electron')
// var currentWindow = electron.remote.getCurrentWindow()
export default {
  name: 'settings',
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    chatMessage: function (val) {
      console.log(val)
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    resetForm () {
      Object.keys(this.form).forEach(key => {
        this.form[key] = null
      })
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = null
      })
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
          const res = await this.$http.put(`${this.$config.backend}/api/user/${this.user.id}`, this.form)
            .then(res => res.data)
          if (res.status === 200) {
            // this.$notify('<div class="notification is-primary column is-3"> worked </div> ', 'info', {mode: 'html'})
            Object.keys(this.form).forEach(key => {
              this.form[key] = null
            })
          } else {
            this.$notify('<div class="notification is-primary column is-3"> didnt work </div> ', 'info', {mode: 'html'})
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
        firstName: null,
        lastName: null,
        username: null,
        password: null,
        email: null,
        confPass: null
      },
      errors: {
        firstName: null,
        lastName: null,
        username: null,
        password: null,
        email: null,
        confPass: null
      }
    }
  }
}
</script>

<style scoped>
.tabs {
  margin-left: 7rem;
}

.is-flex {
  flex-direction: column;
  height: 100vh;
}

.chat-area {
  flex: 1 0 auto;
  overflow-y: scroll;
}

.media {
  margin: 0.5rem;
}

.media-content{
  margin: 0.0rem;
  padding: 0%;
}

.textarea{
  /* padding: 4px;
  padding-bottom: 40px; */
  overflow-y: visible;
}

.input{
  width: 90%
}
</style>

