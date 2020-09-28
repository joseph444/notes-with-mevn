<template>
  <div id="app" class="blue-grey dark-2">
    <navbar></navbar>
    <router-view/>
  </div>
</template>
<script>
import navbar from "./components/navbar"

export default {
  components:{
    navbar
  }
}
</script>
<style lang="scss">
#app{
  min-height:100vh;
  overflow-x:hidden;
}

</style>
