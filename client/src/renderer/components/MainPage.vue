
<template>

  <div id="mainpage" class='is-flex'>
    <nav class="hero is-link is-small">
      <div class="tabs is-toggle is-small">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-kiwi-bird" aria-hidden="true"></i></span>
                <span>All</span>
              </a>
            </li>
          </ul>
          <ul v-for="channel in channels" :key="channel._id">
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-kiwi-bird" aria-hidden="true"></i></span>
                <span>{{channel.name}}</span>
              </a>
            </li>
          </ul>
      </div>
    </nav>
  <div class="columns">
  <div id='menu' class="column is-narrow is-flex">
    <!-- TODO: Add Scrolling to Icons -->
    <!-- TODO: Add Links for Icons    -->
    <div class="box" style="height: 100%; width: 90px">
      <a>
        <router-link to="/settings">
          <span class="icon is-large fa-3x"><i class="fas fa-cogs" aria-hidden="true"></i></span>
        </router-link>
      </a>
      <a>
        <router-link to="/friends">
          <span class="icon is-large fa-3x" style="padding-top: 75px"><i class="fas fa-user-friends" aria-hidden="true"></i></span>
        </router-link>
      </a>
    </div>
  </div>
  <div class="column is-flex is-paddingless">
    <div class='chat-area'>
      <chat-box :messages="messages"/>
    </div>
    <article class="media">
      <div class="media-content">
        <div class='container'>
          <div class="field">
            <div class="columns">
              <div class="column is-flex">
                <div class="field">
            <div class="control">
              <!-- TODO: Add Scrolling to TextArea -->
              <textarea class="textarea is-hovered is-small is-clipped" @keydown.enter="sendMessage" placeholder="Message..." rows='' v-model="message"></textarea>
            </div>
            </div>
            </div>
            <div class='column is-narrow is-2'>
              <a @click="sendMessage" class="button is-large">
                <i class="fas fa-greater-than"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </article>
  </div>
</div>
</div>
</template>

<script>
import electron from 'electron'
import { mapActions } from 'vuex'
import disableScroll from 'disable-scroll'
import ChatBox from './MainPage/ChatBox'
const currentWindow = electron.remote.getCurrentWindow()
const { user } = currentWindow

disableScroll.off()
export default {
  name: 'main-page',
  components: {ChatBox},
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    chatMessage: function (val) {
      const message = {
        owner: val.username,
        username: val.username,
        content: val.message,
        contentType: 'text',
        isActive: true
      }
      this.$db.insert(message)
      this.$store.commit('ADD_MESSAGE', message)
      let div = document.querySelector('.chat-area')
      let height = div.scrollHeight
      div.scrollTop = height
    }
  },
  data: function () {
    return {
      channels: ['All'],
      message: ''
    }
  },
  computed: {
    messages: function () {
      return this.$store.getters.getMessages
    }
  },
  methods: {
    async setUser () {
      this.$socket.emit('set user', user.username)
    },
    async post () {
      // this.$socket.emit('chatMessage', this.message)
    },
    async sendMessage (e) {
      e.preventDefault()
      this.$socket.emit('chatMessage', this.message)
      this.message = ''
    },
    async getUserChannels () {
      try {
        if (currentWindow.user) {
          const res = await this.$http.get(`${this.$config.backend}/api/user/channels/${currentWindow.user._id}`
          ).then(res => res.data)
          if (res.status === 200) {
            // SWING TO MAIN WINDOW PASSING res.user
            this.channels = res.data
          } else {
            this.$notify(res.message, 'error')
          }
        }
      } catch (err) {
        this.$notify('An error occurred. Try again.', 'error')
        console.log(err)
      }
    },
    ...mapActions(['getUsers', 'loadMessages'])
  },
  watch: {
    messages: function (val, oldVal) {
      let div = document.querySelector('.chat-area')
      let height = div.scrollHeight
      div.scrollTop = height
    }
  },
  beforeMount () {
    this.setUser()
    this.getUserChannels()
  },
  mounted () {
    this.$store.commit('SET_USER', user)
    this.getUsers()
    this.loadMessages(this.$db)
  },
  updated: function () {
    this.$nextTick(function () {
      let div = document.querySelector('.chat-area')
      let height = div.scrollHeight
      div.scrollTop = height
    })
  }
}
</script>

<style scoped>
.final-item {
  float:right;
}
.tabs {
  margin-left: 7rem;
}

.is-flex {
  flex-direction: column;
  height: 100vh;
}

.chat-area {
  flex: 1 0 auto;
  margin-top: 50px;
  height: 75vh;
  overflow: scroll;
}

.media {
  margin: 0.5rem;
}

.media-content {
  margin: 0rem;
  padding: 0%;
}

.columns{
  padding-top: 0;
}
#mainpage {
  overflow: hidden;
}
</style>
