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
    <div class='chat-area' style="height: 83%">
    </div>
    <article class="media">
      <div class="media-content">
        <div class='container'>
          <div class="field">
            <p class="control">
              <textarea class="textarea is-hovered is-flex" placeholder="Message" rows='3'></textarea>
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
</div>
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

.media-content{
  margin: 0.0rem;
  padding: 0%;
}
</style>

