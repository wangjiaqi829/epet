<template>

  <div class="warp">
    <header class="topheader">
      <div class="one " @click="headerone">
        <a href="javascript:;">
          <span class="sp1" :class="{active:have}">分类</span>
        </a>
      </div>
      <div class="two" @click="headertwo">
        <a href="javascript:;">
          <span class="sp2" :class="{active:!have}">品牌</span>
        </a>
      </div>
      <a href="javascript:;">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="imgsearch" alt="小搜索">
      </a>
    </header>

    <!--下边内容区域-->
    <div class="contentshow">
    <div class="showlist" v-show="isShow">
      <ul>
        <li>我是1</li>
        <li>我是2</li>
      </ul>
    </div>

    <div class="showlist" v-show="!isShow">
      <div>123</div>
    </div>
</div>

  </div>
<!--TODO 选项卡  tab
<div>
  <mt-navbar v-model="selected">
    <mt-tab-item id="1">选项一</mt-tab-item>
    <mt-tab-item id="2">选项二</mt-tab-item>
  </mt-navbar>

  &lt;!&ndash; tab-container &ndash;&gt;
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      &lt;!&ndash;<mt-cell v-for="n in 10" :title="'内容 ' + n" />&ndash;&gt;
      1233
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      &lt;!&ndash;<mt-cell v-for="n in 4" :title="'测试 ' + n" />&ndash;&gt;
      1545
    </mt-tab-container-item>
  </mt-tab-container>

</div>-->
</template>

<script>


    export default {
      data() {

        /*return {
          selected:"1"
        };*/
       return {
         isShow :true,
         have:true
       }
      },

      methods:{
        headerone(){
          if(!this.isShow) {
            this.isShow = !this.isShow
            this.have = !this.have
          }
        },
        headertwo(){
          if(!this.isShow) {
            return
          }else {
            this.isShow = !this.isShow
            this.have = !this.have
          }
        }

      }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .warp
    height 100%
    .topheader
      padding 0 90px
      border-bottom 1px solid gainsboro
      color black
      position: fixed
      left:0
      right 0
      top:0
      height 40px
      /*z-index 11*/
      background: #fff
      .one
        text-align right
        padding-top 13px
        width:50%
        height:40px
        font-size 13px
        color black
        float left
        font-weight 700
        .active
          padding-bottom 10px
          border-bottom 1px solid red
          color red
      .two
        text-align center
        padding-top 13px
        width:50%
        height:40px
        font-size 13px
        float left
        font-weight 700
        color black
        .active
          padding-bottom 10px
          border-bottom 1px solid red
          color red
    .imgsearch
      top: 13px
      right: 15px;
      width: 14px;
      height: 14px;
      position absolute
      border 0px
      vertical-align middle
    .contentshow
      margin-top 50px
</style>
