<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'jac2-client'
  }
</script>

<style>
  /* CSS */
  @import "~bulma/css/bulma.css";
  /* Bind the toolbar as the window's draggable region */
  .top-bar {
    -webkit-app-region: drag;
    position:fixed;
    height: 50px;
    background-color: transparent;
    z-index: 9999;
  }
</style>
