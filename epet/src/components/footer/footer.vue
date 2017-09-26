<template>
  <div class="footer-warp">

    <div class="tab-warp">
    <div class="tab-item">
        <router-link to="/home">首页</router-link>
    </div>
    <div class="tab-item">
        <router-link to="/classifi">分类</router-link>
    </div>
    <div class="tab-item">
        <router-link to="/shopcart">购物车</router-link>
    </div>
    <div class="tab-item">
        <router-link to="/myuser">我的E宝</router-link>
    </div>

    </div>
  </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab-warp
    /*width 375px*/
    width 100%
    display flex
    height: 36px
    line-height: 36px
    position fixed
    bottom 0
    background: peachpuff
    z-index: 150
    .tab-item
      width 0
      flex 1
      text-align center
</style>
