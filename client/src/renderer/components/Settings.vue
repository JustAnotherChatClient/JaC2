<template>
  <div class='is-flex'>
    <nav class="hero is-link is-small">
    </nav>
  <div class="columns">
  <div class="column is-narrow is-flex">
    <!-- TODO: Add Scrolling to Icons -->
    <!-- TODO: Add Links for Icons    -->
    <div class="box" style="height: 65%; width: 90px">
      <router-link to="/main-page">
      <a>
          <span class="icon is-large fa-3x" style="padding-top: 50px"><i class="fas fa-angle-left" aria-hidden="true"></i></span>
      </a>
      </router-link>
      <a>
          <span class="icon is-large fa-3x" style="padding-top: 100px"><i class="fas fa-save" aria-hidden="true"></i></span>
      </a>
      <a>
          <span class="icon is-large fa-3x" style="padding-top: 100px"><i class="fas fa-ban" aria-hidden="true"></i></span>
      </a>
    </div>
  </div>
  <div class='chat-area' style="height: 80%; padding-top: 50px">
      <div class="columns">
        <!-- <div class="column is-narrow ">
          <div class='chat_img' style="height: 50px; width: 50px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test">
          </div>
        </div> -->
        <div class="column">
          <div class='chat_img' style="height: 300px; width: 300px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test"></div>
          <h3 class="subtitle is-2"><b>Current Picture</b></h3> 
        </div>
        <div class="column is-flex float-left">
          <div class="field">
            <label class="label">Name</label>
               <div class="control">
                <input class="input" type="text" placeholder="Text input">
              </div>
          </div>
          <div class="field">
            <label class="label">Username</label>
               <div class="control">
                <input class="input" type="text" placeholder="Text input">
              </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
               <div class="control">
                <input class="input" type="text" placeholder="Text input">
              </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
               <div class="control">
                <input class="input" type="text" placeholder="Text input">
              </div>
          </div>
          <div class="field">
            <label class="label">Confirm Password</label>
               <div class="control">
                <input class="input" type="text" placeholder="Text input">
              </div>
          </div>
          <div class="field">
            <a>
              <span class="icon is-large fa-3x" style="padding-top: 50px"><i class="fas fa-check" aria-hidden="true"></i></span>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class='chat_img' style="height: 50px; width: 50px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test"> <p> Test Message </p></div> -->
    </div>
</div>
</div>
</template>

<script>
var electron = require('electron')
var currentWindow = electron.remote.getCurrentWindow()
export default {
  name: 'settingse',
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    chatMessage: function (val) {
      console.log(val)
    }
  },
  methods: {
    async setUser () {
      this.$socket.emit('set user', currentWindow.user.username)
    },
    async post () {
      this.$socket.emit('chatMessage', this.message)
    }
  },
  beforeMount () {
    this.setUser()
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
</style>

