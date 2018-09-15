<template>
  <div id="chatbox" >
    <div v-for="(message,i) in messages" :key="i">
      <div class='chat_img' style="height: 50px; width: 50px"> <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-1-1/128/gender-male2-512.png" alt="test"></div>
      <h3 class="subtitle is-5"><b>{{message.username}}</b></h3> 
        <p> {{message.content}} </p>
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
  overflow: scroll;
}

</style>
