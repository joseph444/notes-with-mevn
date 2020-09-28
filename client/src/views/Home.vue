<template>
  <div class="row">
    <div class="col offset-s2 s8 p-2 white">
      <newnote/>
    </div>
    <div class="col s12">
      <Notes></Notes>
    </div>
  </div>
</template>

<script>
import Notes from "../components/notes";

export default {
  name:"home",
  components:{
    Notes,
    newnote:()=> import("../components/newNote")
    }
}
</script>

<style lang="scss" scoped>
  .p-2{
    padding:1.2rem;
    margin-top:4rem;
    margin-bottom:4rem;
  }
</style>