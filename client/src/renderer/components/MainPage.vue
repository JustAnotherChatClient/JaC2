import { currentId } from 'async_hooks';

<template>

  <div class='is-flex'>
    <nav class="hero is-link is-small">
      <div class="tabs is-toggle is-small">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-kiwi-bird" aria-hidden="true"></i></span>
                <span>Channel 1</span>
               </a>
            </li>
          </ul>
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-motorcycle" aria-hidden="true"></i></span>
                <span>Channel 2</span>
               </a>
            </li>
          </ul>
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-charging-station" aria-hidden="true"></i></span>
                <span>Channel 3</span>
               </a>
            </li>
          </ul>
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-database" aria-hidden="true"></i></span>
                <span>Channel 4</span>
               </a>
            </li>
          </ul>
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-money-bill" aria-hidden="true"></i></span>
                <span>Channel 5</span>
               </a>
            </li>
          </ul>
      </div>
    </nav>
  <div class="columns">
  <div class="column is-narrow is-flex">
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
    <div class='chat-area' style="height: 80%; padding-top: 50px">
      <div class="columns">
        <!-- <div class="column is-narrow ">
          <div class='chat_img' style="height: 50px; width: 50px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test">
          </div>
        </div> -->
        <div class="column is-flex float-left">
          <div v-for="(message,i) in messages" :key="i">
          <div class='chat_img' style="height: 50px; width: 50px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test"></div>
          <h3 class="subtitle is-5"><b>{{message.username}}</b></h3> 
              <p> {{message.content}} </p>
            </div>
          </div>
          <div class="column is-flex is-paddingless has-text-centered">
            
        </div>
      </div>
      <!-- <div class='chat_img' style="height: 50px; width: 50px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test"> <p> Test Message </p></div> -->
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
              <textarea class="textarea is-hovered is-small is-clipped" placeholder="Message..." rows='' v-model="message"></textarea>
            </div>
            </div>
            </div>
            <div class='column is-narrow is-2'>
              <a @click="sendMessage" @keydown.enter="sendMessage" class="button is-large">
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
const currentWindow = electron.remote.getCurrentWindow()
const { user } = currentWindow
export default {
  name: 'main-page',
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    chatMessage: function (val) {
      const message = {
        owner: user._id,
        username: user.username,
        content: this.message,
        contentType: 'text',
        isActive: true
      }
      this.$db.insert(message)
      this.$store.commit('ADD_MESSAGE', message)
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
    async sendMessage () {
      const message = {
        owner: user._id,
        username: user.username,
        content: this.message,
        contentType: 'text',
        isActive: true
      }
      this.$db.insert(message)
      this.$store.commit('ADD_MESSAGE', message)
      this.$socket.emit('chatMessage', this.message)
    },
    async getUserChannels () {
      try {
        if (currentWindow.user) {
          const res = await this.$http.get(`${this.$config.backend}/api/user/channels/${currentWindow.user._id}`
          ).then(res => res.data)
          if (res.status === 200) {
            // SWING TO MAIN WINDOW PASSING res.user
            this.channels = res.data
            this.$notify(res.message, 'success')
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
  beforeMount () {
    this.setUser()
    this.getUserChannels()
  },
  mounted () {
    this.$store.commit('SET_USER', user)
    this.getUsers()
    this.loadMessages(this.$db)
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
  overflow-y: scroll;
}

.media {
  margin: 0.5rem;
}

.media-content {
  margin: 0rem;
  padding: 0%;
}

.textarea {
  /* padding: 4px;
  padding-bottom: 40px; */
  overflow-y: visible;
}

body {
  overflow: hidden;
}
</style>
