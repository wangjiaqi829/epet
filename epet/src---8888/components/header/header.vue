<template>
  <div class="wrapper">
    <div class="header-wrapper" >
      <!--下载App广告-->
      <div class="download-app" v-show="isShow">
        <div class="rela">
          <div class="download-img">
            <a href="javascript:;">
              <i>
                <span class="close-btn" > <!--@click="closeDownload"-->
                  <img src="./closebtn_03.png" width="15" height="15">
                </span>
              </i>
            </a>
          </div>
        </div>
      </div>

      <!--头部-->
      <div class="header">
        <div class="content">
          <div class="epet-search">
            <div class="location">
              <span>狗站</span>|<a href="" style="color: black">北京</a>
              <img src="./index_icon_comment_sanjiao.png" alt="小三角" width="8" height="5">
              <i></i>
            </div>
            <!--搜索框-->
            <div class="search-text">
              <input type="search" placeholder="搜索商品和品牌" class="search">
              <span></span>
            </div>
            <a href="" class="epet-category">
              <img src="./mydope.png" width="24" height="24">
            </a>
          </div>
        </div>
      </div>
    </div>

    <!--导航-->
    <div class="nav">
      <ul class="tab">
        <li class="tab-item">
          <router-link to="/home/one">首页</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/home/two">狗粮</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/home/three">医疗保健</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/home/four">零食玩具</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/home/five">日用外出</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/home/six">美容香波</router-link>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    data(){ //判断显示与隐藏
      return {
        isShow: true,
      }
    },
    closeDownload () {
      this.isShow = !this.isShow
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    width 100%
    .header-wrapper
      width 100%
      /*height 155px*/
      /*position fixed
      z-index 100*/
      background-color: #fff;
      .fix
        position fixed
        z-index 100
        background-color: #fff;
        height 155px
      .download-app
        width 100%
        .download-img
          width 100%
          a
            display block
            height 55px
            i
              background-image url("./download.png")
              display block
              width 100%
              height 55px
              background-size 100%
              .close-btn
                line-height 55px
                margin-left 10px
      .header
        width 100%
        .content
          margin-bottom 10px
          .epet-search
            padding 8px
            /*width:375px*/
            width 100%
            .location
              display inline-block
              font-size 14px
              img
                vertical-align middle
            .search-text
              display inline-block
              .search
                border none
                width 230px
                /*width 100%*/
                height 25px
                background #f6f6f6
                border-radius 4px
                color #9e9e9e
                text-indent 10px
                font-size 13px
                outline none
              span
                display inline-block
                background-image url("./search.png")
                width 11px
                height 11px
                background-size 11px 11px
            .epet-category
              display inline-block
              vertical-align top
    .nav
      .tab
        width 120%
        display flex
        white-space nowrap
        height 36px
        line-height 36px
        .tab-item
          font-size 14px
          color #666
          width 0
          flex 1
          text-align center
          & > a
            display block
            &.active
              color #e73f85
              border-bottom 2px solid #e73f85
</style>
