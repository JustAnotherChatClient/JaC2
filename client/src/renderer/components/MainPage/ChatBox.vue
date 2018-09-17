<template>
  <div id="chatbox">
    <div class="notification is-link" v-for="(message,i) in messages" :key="i">
      <article class="media">
        <figure class="media-left">
          <div class='chat_img' style="height: 50px; width: 50px">
            <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test">
          </div>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{message.username}}</strong>
              <br/>
              {{message.content}} 
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat-box',
  props: ['messages']
}
</script>

<style>

#chatbox {
  width: 80vw;
  height: 80vh;
}

</style>
