<template>
  <div id="App">
    <router-view></router-view>
    <epet-footer class="footer"></epet-footer>
  </div>


</template>



<script>
  import footer from './components/footer/footer.vue'

  export default {
      name:'App',
      components:{
        'epet-footer':footer
      }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
