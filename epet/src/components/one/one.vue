<template>
  <!--轮播图-->

 <div>
   <!--<scroller>-->
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
   <!--     <div class="surprise-pro pl5 mb10">
          <div class="swiper-container surprise-scroll swiper-container-horizontal">
            <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);"><div class="swiper-slide swiper-slide-active" style="width: 98.5714px; margin-right: 10px;"><div class="pro-block">
              <a href="https://wap.epet.com/surprise/Main.html?fw=0"><div class="thispro-img loadimg-nofixed"><img class="image" src="https://img1.epetbar.com/2016-12/06/12/a3a78e3d2382a229a800ba2400c47492.jpg" lazy="loaded">
                &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
              </div>
                <div class="cred ftc mt5">
                  <span class="ft12">¥</span>
                  <span class="ft17">72.00</span>
                </div>
                <p class="c999 ftc ft12">省￥47.00</p>
              </a>
            </div>
            </div>
              <div class="swiper-slide swiper-slide-next" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block">
                  <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                    <div class="thispro-img loadimg-nofixed">
                      <img class="image" src="https://img1.epetbar.com/2016-09/14/14/339220365859a4362207d5e703b77d08.jpg" lazy="loaded">
                      &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
                    </div>
                    <div class="cred ftc mt5">
                      <span class="ft12">¥</span>
                      <span class="ft17">2.95</span>
                    </div>
                    <p class="c999 ftc ft12">省￥2.95</p>
                  </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="https://img1.epetbar.com/2015-01/15/5a90ddf9fd4f0b741d075a4b3a34c446.jpg" lazy="loaded">
                    &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
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
              &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
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
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="https://img1.epetbar.com/2016-06/24/8/0ee3f3ca95593c80a84c0cb55a205a9e.jpg" lazy="loaded">
                &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
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
                    &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
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
                    <img class="image" src="https://img1.epetbar.com/2014-10/25/359adaa23113ff2dc85dfad75b81e7d8.jpg" lazy="loaded">
                    &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
                  </div>
                  <div class="cred ftc mt5">
                    <span class="ft12">¥</span>
                    <span class="ft17">9.90</span>
                  </div>
                  <p class="c999 ftc ft12">省￥3.90</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
              <div class="pro-block">
                <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                <div class="thispro-img loadimg-nofixed">
                  <img class="image" src="https://img1.epetbar.com/2017-08/17/21/1dccb646bd731afac328e0ff1b463748.jpg" lazy="loaded">
                  &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
                </div>
                  <div class="cred ftc mt5">
                    <span class="ft12">¥</span>
                    <span class="ft17">2.90</span>
                  </div>
                  <p class="c999 ftc ft12">省￥2.00</p>
                </a>
              </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block">
                  <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                    <div class="thispro-img loadimg-nofixed">
                      <img class="image" src="https://img1.epetbar.com/2017-08/04/14/163ba5ef12f39bc57bca5b33cf0b0fc2.jpg" lazy="loaded">
                      &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
                    </div>
                    <div class="cred ftc mt5">
                      <span class="ft12">¥</span>
                      <span class="ft17">25.90</span>
                    </div>
                    <p class="c999 ftc ft12">省￥13.10</p>
                  </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed"><img class="image" src="https://img1.epetbar.com/2017-02/15/10/dc1a1e20154a435561bfe1f5177c6ba1.jpg" lazy="loaded">
                    &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
                  </div>
                  <div class="cred ftc mt5">
                    <span class="ft12">¥</span>
                    <span class="ft17">59.90</span>
                  </div>
                  <p class="c999 ftc ft12">省￥6.10</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="https://img1.epetbar.com/2016-01/28/10/95a2cb3f0fb2ae38a6abddc4efb8141b.jpg" lazy="loaded">
                    &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
                  </div>
                  <div class="cred ftc mt5">
                    <span class="ft12">¥</span>
                    <span class="ft17">21.90</span>
                  </div> <p class="c999 ftc ft12">省￥13.10</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block">
                  <a href="https://wap.epet.com/surprise/Main.html?fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                    &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;
                  </div>
                    <div class="cred ftc mt5">
                      <span class="ft12">¥</span>
                      <span class="ft17">9.90</span>
                    </div>
                    <p class="c999 ftc ft12">省￥10.10</p>
                  </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?fw=0"><div class="thispro-img loadimg-nofixed"><img class="image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"> <div class="vipnum"><img src="https://static.epetbar.com/static_wap/appmall/lib/user/vip/v3.png"></div> &lt;!&ndash;&ndash;&gt;</div> <div class="cred ftc mt5"><span class="ft12">¥</span><span class="ft17">15.00</span></div> <p class="c999 ftc ft12">省￥13.00</p></a></div></div></div></div></div>-->


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
    /*margin-top 150px*/
    /*padding-top 300px*/
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
</style>
