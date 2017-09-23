<template>
  <!--轮播图-->
  <div class="warp">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="./9.20img.jpg" alt="9.20">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./2.jpg" alt="2">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./3.jpg" alt="4">
      </mt-swipe-item>
    </mt-swipe>

    <!--GO图片-->
    <div class="swiper-container banner-scroll">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2017-07/03/8/747562c921cd37cf0dafbe24ccfe62bd.gif" alt="go">
          </a>
        </div>
      </div>
    </div>

    <!--类似菜单按钮的8-->
    <div class="columnnavdiv">
      <div>
        <ul class="clearfix hottype pt10 pb10">
          <li class="fl">
            <a href="javascript:;">
              <img src="https://img1.epetbar.com/2017-09/20/19/e77641bc5e038c17069fc3b0953ed82a.png@!water" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="javascript:;">
              <img src="https://img1.epetbar.com/2017-09/20/19/93e48869e3da723f9248c27718f39956.png@!water" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="javascript:;">
              <img src="https://img1.epetbar.com/2017-09/20/19/c8eb54f31278c068ec5d731ec650a886.png@!water" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="javascript:;">
              <img src="https://img1.epetbar.com/2017-09/20/19/0b7132cfff063d7f17f614c25ce9da1c.png@!water" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="javascript:;">
              <img src="https://img1.epetbar.com/2017-09/20/19/b3fa851021c844ae8a7493567c26e8ce.png@!water" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="javascript:;">
              <img src="https://img1.epetbar.com/2017-09/20/19/4335b268a53422a205c1f322370d31c1.png@!water" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="javascript:;">
              <img src="https://img1.epetbar.com/2017-09/20/19/cca7810f68fe70fa82aff20f53c2eaa0.jpg@!water" alt="">
            </a>
          </li>
          <li class="fl">
            <a href="javascript:;">
              <img src="https://img1.epetbar.com/2017-09/22/15/139e57fcbc22cbb2a416f9e96f55cd5f.png@!water" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!--每日特价-->
    <div class="surprise-wrapper">
      <div class="surprise-time">
        <div class="surprise-logo">
          <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png" alt="每日特价">
        </div>
        <span >距离本场结束</span>
        <div class="time">
          <span>01</span>
          <span>:</span>
          <span>30</span>
          <span>:</span>
          <span>19</span>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .warp
    /*z-index 1px
    margin-top 177px*/
    width 100%
    height: 200px
    img
      width 100%
      height 100%
    .swiper-wrapper
      width: 100%;
      height: 100%;
      position: relative;
    .columnnavdiv
      margin 5px 5px
      .hottype
        width 100%
        .fl, .pull-left
          display inline-block
          width 24%
          height 100px
          font-size 12px
          text-align center
            img
              display block
              float left
              width 100%
              padding-bottom 10px
              padding-top 10px
    .surprise-wrapper
      height 100%
      margin-top: 10px
    .surprise-time
      font-size 16px
      .surprise-logo
        display inline-block
        width 30%
        vertical-align middle
        img
          width 100%
      .time
        display inline-block
        span
          width 21px
          height: 21px
          border 1px solid #E7E7E7
          margin 0 5px 0 5px


</style>
