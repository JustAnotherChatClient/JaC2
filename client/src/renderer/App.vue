
<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import disableScroll from 'disable-scroll'
<<<<<<< HEAD
disableScroll.on()

=======
disableScroll.off()
>>>>>>> 2cf8e08797d0d187c39c23ced8999fef7406ccd8
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


  .button, button, input, p, label, title, h1, h3, input, section {
    -webkit-app-region: no-drag;

  }
</style>
