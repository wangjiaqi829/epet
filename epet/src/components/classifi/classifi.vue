<template>

  <div class="warp">
    <header class="topheader">
      <div class="one ">
        <span class="sp1">分类</span>
      </div>
      <div class="two">
        <span class="sp2">品牌</span>
      </div>
      <a href="javascript:;">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="imgsearch" alt="小搜索">
      </a>
    </header>

  </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .warp
    .topheader
      padding 0 90px
      border-bottom 1px solid grey
      position: fixed
      left:0
      right 0
      top:0
      height 40px
      z-index 11
      background: #fff
      .one
        text-align center
        padding-top 13px
        width:50%
        height:40px
        font-size 13px
        float left
        font-weight 700
      .two
        text-align center
        padding-top 13px
        width:50%
        height:40px
        font-size 13px
        float left
        font-weight 700
    .imgsearch
      top: 13px
      right: 15px;
      width: 14px;
      height: 14px;
      position absolute
      border 0px
      vertical-align middle

</style>
