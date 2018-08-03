
<template>
  <div>
    <div id="electron-titlebar" class="drag"></div>
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
  #electron-titlebar {
    margin-bottom: 5px;
  }
  /* disable scrollbar */
   ::-webkit-scrollbar { display: none; }

   .button, input {
    -webkit-app-region: no-drag;
  }
</style>
