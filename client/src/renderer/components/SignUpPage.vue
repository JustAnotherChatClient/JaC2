<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <div class="hero">
          <div class="hero-body">
            Welcome to JaC2!
          </div>
        </div>
      </div>
      <div class="right-side">
        <input type="text" placeholder="Username/Email">
        <input type="text" placeholder="Password">
        <router-link to="/"><button class="alt">Go Back</button></router-link>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'signup-page'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

</style>
