<template>
  <div class='is-flex'>
    <nav class="hero is-link is-small">
      <div class="tabs is-boxed">
          <ul>
            <li class="is-active"><a>Channel</a></li>
          </ul>
      </div>
    </nav>
    <div class='chat-area'>
    </div>
    <article class="media">
      <div class="media-content">
        <div class='container'>
          <div class="field">
            <p class="control">
              <input type="text" v-model="message" />
            </p>
          </div>
          <div class="field">
        <div class="control has-text-centered">
          <button @click="post" @keydown.enter="post">Send Message</button>
        </div>
      </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
var electron = require('electron')
var currentWindow = electron.remote.getCurrentWindow()
export default {
  name: 'main-page',
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
  margin-left: 5rem;
}

.is-flex {
  flex-direction: column;
  height: 100vh;
}

.chat-area {
  flex: 1 0 auto;
}

.media {
  margin: 0.5rem;
}
</style>

