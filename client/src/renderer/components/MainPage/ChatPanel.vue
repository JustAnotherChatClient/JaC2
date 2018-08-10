<template>
  <div class="column">
    <section class="section is-paddingless">
      <h4 class="title is-4 has-text-centered">Chat Panel ~User Name~</h4>
    </section>
    <section class="section">
      <p>Chat message 1</p> <br />
      <p>Chat message 2</p> <br />
      <p>Chat message 3</p> <br />
      <p>Chat message 4</p> <br />
    </section>
    <section class="section">
      <button class="button is-info" @click="post">Send Message</button>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['currentView'],
    methods: {
      changeView (panel) {
        this.$emit('panel-switch', panel)
      },
      async post () {
        console.log('Chat message sent!')
      }
    }
  }
</script>

<style scoped>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .column {
    background-color: lightgray;
    height: 29em;
  }
  .section {
    padding: 0.5em;
  }
  .input {
    width: 90%;
  }
  .title {
    padding : 0;
    margin: 0;
  }
</style>