<template>
  <!--轮播图-->

 <div>
   <!--<scroller>-->
  <div class="warp">
    <mt-swipe :auto="4000" style="height: 200px">
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

    <spilt></spilt>
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
          <span>14</span>
          <span>:</span>
          <span>30</span>

        </div>
    <!--MORE-->
        <div class="more">
          <a href="javascript">
            <img src="https://img2.epetbar.com/nowater/2016-10/24/20/30b2568de06cb7c96a9af9ad4be3cae5.png" alt="MORE">
          </a>
        </div>
      </div>


      <!--每日特价下边的横排滚动图-->
          <div class="TJImgwarp" ref="TJImgwarp">
            <div class="TJList" ref="TJList">
              <div class="swiper-slide swiper-slide-next" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block">
                  <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                      <img class="image" src="https://img1.epetbar.com/2016-09/14/14/339220365859a4362207d5e703b77d08.jpg" lazy="loaded">
                    <div class="cred ftc mt5">
                      <span class="ft12" style="color: red;font-size: 12px">¥</span>
                      <span class="ft17" style="color: red;font-size: 12px">2.95</span>
                    </div>
                    <p class="c999 ftc ft12" style="font-size: 12px">省￥2.95</p>
                  </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="https://img1.epetbar.com/2015-01/15/5a90ddf9fd4f0b741d075a4b3a34c446.jpg" lazy="loaded">
                  </div>
                  <div class="cred ftc mt5">
                  <span class="ft12">¥</span>
                  <span class="ft17">4.45</span>
                </div>
                  <p class="c999 ftc ft12">省￥4.45</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="https://img1.epetbar.com/2015-08/17/10/41f3573807331310e3177a0885f0ad2c.jpg" lazy="loaded">
            </div>
                  <div class="cred ftc mt5">
                  <span class="ft12">¥</span>
                  <span class="ft17">6.60</span>
                </div>
                  <p class="c999 ftc ft12">省￥6.60</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block">
                  <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="https://img1.epetbar.com/2016-11/03/16/1ebcafcff3c7c225463bed2bbaa83a84.jpg" lazy="loaded">
              </div>
                <div class="cred ftc mt5">
                  <span class="ft12">¥</span>
                  <span class="ft17">12.50</span>
                </div>
                <p class="c999 ftc ft12">省￥12.50</p>
              </a>
              </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed"><img class="image" src="https://img1.epetbar.com/2017-07/07/10/ff515455f9479ad28b2fa7639a5d77a7.jpg" lazy="loaded">
                  </div>
                  <div class="cred ftc mt5">
                    <span class="ft12">¥</span>
                    <span class="ft17">4.90</span>
                  </div>
                  <p class="c999 ftc ft12">省￥1.90</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="https://img1.epetbar.com/2015-08/17/10/41f3573807331310e3177a0885f0ad2c.jpg" lazy="loaded">
                  </div>
                  <div class="cred ftc mt5">
                    <span class="ft12">¥</span>
                    <span class="ft17">6.60</span>
                  </div>
                  <p class="c999 ftc ft12">省￥6.60</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block">
                  <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                    <div class="thispro-img loadimg-nofixed">
                      <img class="image" src="https://img1.epetbar.com/2016-11/03/16/1ebcafcff3c7c225463bed2bbaa83a84.jpg" lazy="loaded">
                    </div>
                    <div class="cred ftc mt5">
                      <span class="ft12">¥</span>
                      <span class="ft17">12.50</span>
                    </div>
                    <p class="c999 ftc ft12">省￥12.50</p>
                  </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed"><img class="image" src="https://img1.epetbar.com/2017-07/07/10/ff515455f9479ad28b2fa7639a5d77a7.jpg" lazy="loaded">
                  </div>
                  <div class="cred ftc mt5">
                    <span class="ft12">¥</span>
                    <span class="ft17">4.90</span>
                  </div>
                  <p class="c999 ftc ft12">省￥1.90</p>
                </a>
                </div>
              </div>
            </div>
          </div>

     </div>


    <!--热门栏目-->
    <spilt></spilt>

    <div class="currency_ad">
      <div class="currency-adcon show_line dibimg1">
        <div class="titdiv rela">
          <div class="clum-tit"></div>
          <!--热门栏目-->
        </div>

        <div class="divboximg flex">

        </div>
      </div>
    </div>




    </div>
  </div>



</template>

<script>
  import BScroll from 'better-scroll'
  import spilt from '../spilt/split.vue'

  export default {

    mounted(){
      this.$nextTick(()=>{
       new BScroll(this.$refs.TJList,{
          click:true,
          scrollX:true
        })
      })

    },

    components: {
      spilt
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .warp
    /*z-index 1px
    margin-top 177px*/
    /*margin-top 150px*/
    /*padding-top 300px*/
    width 100%
    /*height: 200px*/
    height 800px
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
      font-size 12px
      .surprise-logo
        display inline-block
        width 30%
        vertical-align middle
        img
          width 100%
      .time
        display inline-block
        span
          width 16px
          height: 21px
          border 1px solid #E7E7E7
          /*margin 0 5px 0 5px*/
      .more
          display inline-block
          vertical-align middle
          width 20%
          height 50px
        img
          width 100%
          height 100%
          /*position absolute
          right 0*/
    .TJImgwarp
      width:100%
      height:100%
      margin 0 auto
      position relative
      z-index 1
      /*float left
      white-space nowrap*/
      .TJList
        height 100%
        display flex
        float left
        box-sizing content-box
        .swiper-slide
          position relative
          height 80px
          width 100%
          img
            position absolute
            top:0
            right:0
            height: 64px
            width: 84px
        .cred
          color red
          font-size 12px
          margin-top 72px
          text-align center
          /*height 20px*/
          height 100%
          width 100%
          margin-left 10px
        p
          font-size 10px
          color: #999

</style>
