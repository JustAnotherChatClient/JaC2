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
              <textarea class="textarea" placeholder="Message"></textarea>
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
var electron = require('electron')
var currentWindow = electron.remote.getCurrentWindow()

console.log('user', currentWindow.user)
export default {
  name: 'main-page'
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

