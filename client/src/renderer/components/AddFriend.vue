<template>
  <div class='is-flex'>
    <nav class="hero is-link is-small">
    </nav>
  <div class="columns">
  <div class="column is-narrow is-flex">
    <!-- TODO: Add Scrolling to Icons -->
    <!-- TODO: Add Links for Icons    -->
    <div class="box" style="height: 35%; width: 90px">
      <router-link to="/friends">
      <a>
          <span class="icon is-large fa-3x" style="padding-top: 50px"><i class="fas fa-angle-left" aria-hidden="true"></i></span>
      </a>
      </router-link>
      <a>
          <span class="icon is-large fa-3x" style="padding-top: 50px"><i class="fas fa-paper-plane" aria-hidden="true"></i></span>
      </a>
    </div>
  </div>
  <div class='chat-area' style="height: 80%; padding-top: 50px">
      <div class='column is-10'>
          <h3 class='subtitle is-4 level-item'>Please enter the username of friend you wish to add</h3>
          <input class="input is-small is-rounded" type="text"/>
      </div>

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

