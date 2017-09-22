<template>
  <div>
    <epet-header class="header"></epet-header>
    <router-view></router-view>
  </div>
</template>

<script>

  import header from '../header/header.vue'
  export default {

    components:{
      'epet-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
