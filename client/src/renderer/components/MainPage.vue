<template>
  <div class='is-flex'>
    <nav class="hero is-link is-small">
      <div class="tabs is-boxed">
          <ul>
            <li class="is-active"><a>Channel</a></li>
          </ul>
      </div>
    </nav>
    <div class="columns">
      <div class="column is-narrow ">
        <div class="box" style="height: 100%; width: 60px">
          <p class="title">Icons</p>
        </div>
      </div>
      <div class="column is-flex is-paddingless">
        <div class='chat-area' style="height: 80%; padding-top: 50px">
          <div class="columns">
            <div class="column is-narrow ">
              <div class='chat_img' style="height: 50px; width: 50px">
                <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test">
              </div>
            </div>
            <div class="column is-flex ">
              <h3 class="subtitle is-5"><b>Username</b></h3> 
              <p> Test Message </p>
            </div>
            <div class="column is-flex is-paddingless has-text-centered"/>
          </div>
          <!-- <div class='chat_img' style="height: 50px; width: 50px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test"> <p> Test Message </p></div> -->
        </div>
        <article class="media">
          <div class="media-content">
            <div class='container'>
              <div class="field">
                <div class="columns">
                  <div class="column is-flex">
                    <p class="control">
                      <textarea class="textarea is-hovered is-flex" placeholder="Message" rows='3'></textarea>
                    </p>
                  </div>
                  <div class='column is-narrow'>
                    <a @click="post" @keydown.enter="post" class="button is-large">
                      <span class="icon is-large">
                        <i class="fas fa-angle-right fa-5x"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="column is-narrow ">
        <div class="box" style="height: 100%; width: 60px;">
          <p class="title">Spacer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import electron from 'electron'
import { mapActions } from 'vuex'
const currentWindow = electron.remote.getCurrentWindow()
const { user } = currentWindow
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
      // this.$socket.emit('chatMessage', this.message)
    },
    ...mapActions([
      'getUsers'
    ])
  },
  beforeMount () {
    this.setUser()
  },
  mounted () {
    this.$store.commit('SET_USER', user)
    this.getUsers()
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
  overflow-x: scroll;
}

.media {
  margin: 0.5rem;
}

.media-content{
  margin: 0.0rem;
  padding: 0%;
}

.textarea{
  padding: 4px;
  padding-bottom: 40px;
}
</style>

