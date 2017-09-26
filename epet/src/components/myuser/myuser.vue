<template>
<div>

  <header>
  <div class="logo_bg"style="background: url(//img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png) no-repeat;  background-size: 100% 100%">
    <!--<  注册 与背景图片-->
    <div class="head-top">
      <a href="http://localhost:8080/#/home/one" class="aback page-top"><</a>

      <!--<div class="zfont">
      <a href="Javascript:;" class="afff">注册</a>
      </div>-->

      <div class="zfont">
        <router-link to="/register" style="color: white">注册</router-link>
      </div>

    </div>

    <!--巨宠图片-->
    <div class="mlogo">
      <img src="//static.epetbar.com/mpet/images/login/logo.png" alt="巨宠">
    </div>

    <!--登录-->
    <div class="es_por4">
      <ul>
        <li @click="Tablogo" class="firstI">
          <a href="javascript:;">普通登录</a>
          <i :class="{active:have}"></i>
        </li>
        <li @click="loginTodo">
          <a href="javascript:;">手机动态密码登录</a>
          <i :class="{active:!have}"></i>
        </li>
      </ul>
    </div>
  </div>
  </header>

  <!--中间+下边区域-->
  <div class="bgfff">
    <div class="mformBox">
      <div class="Content" v-show="isShow">
        <ul class="myul">
          <li>
            <span class="mNameIco"></span>
            <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
          </li>
          <li>
            <span class="mpasswordIco"></span>
            <input type="text" placeholder="输入密码" class="text" name="password" id="passsword">
          </li>
        </ul>
      </div>


      <div class="Content" v-show="!isShow" >
        <ul class="myul">
          <li>
            <span class="mNameIco1"></span>
            <input type="text" placeholder="已注册的手机号" class="text" name="username" id="username">
          </li>
          <li>
            <span class="mpasswordIco"></span>
            <input type="text" placeholder="请输入图片的内容" class="text" name="password" id="passsword">
          </li>
          <li>
            <span class="mpasswordIco"></span>
            <input type="text" placeholder="输入密码" class="text" name="password" id="passsword">
          </li>
        </ul>
      </div>
    </div>


    <!--忘记密码-->
    <div class="ftc">
      <a href="javascript:;">忘记密码?</a>
    </div>

    <!--登录-->
    <div class="loginbtn">
      <a href="javascript:;" class="btn-login afff">登录</a>
    </div>

    <!--去下载-->
    <div class="c666">
      APP专享:E宠团5折包邮,首单满99送99
      <a href="javascript:;">去下载</a>
    </div>
  </div>

  <!--空div填充空白-->
    <div class="empty" style="width: 100%; height: 80px"></div>
  <!--div合作网站-->

  <div style="text-align: center ;opacity: 0.2;height: 50px" >
    <b>合作网站第三方登录</b>
  </div>

  <div>
    <ul class="ulList">
      <li style="float: left;margin-left: 80px;margin-right: 20px">
        <a href="javascript:;">
        <img src="//static.epetbar.com/mpet/images/login/login_ico4.png" alt="">
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="//static.epetbar.com/mpet/images/login/login_ico2.png" alt="">
        </a>
      </li>
    </ul>
  </div>
  <!---->

</div>
</template>

<script>
  import register from '../register/register.vue'

  export default {
    data(){
      return{
        isShow: true,
        have:true
      }
    },

    methods:{

      Tablogo(){
        if(!this.isShow) {
          this.isShow = !this.isShow
          this.have=!this.have
        }
      },
      loginTodo(){
        if(!this.isShow) {
          return
        }else {
          this.isShow = !this.isShow
          this.have=!this.have
        }
      }
    },
    components:{
      register
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .logo_bg
    border-bottom 0
    .head-top
      height 50px
      line-height 50px
      position relative
      padding 0 1em
      text-align center
      .zfont
        position absolute
        top:0
        right 1em
        color #fff
        .afff
          color #fff
          font-size 18px
      .aback
        position absolute
        top:0
        left: 0.6em
        color #fff
        font-size 22px

    .mlogo
      padding 1em 0 2em 0
      text-align center
      img
        height 48px
    .es_por4
      overflow hidden
      background-color:rgba(255,255,255,0.3)
      ul
        list-style none
        li
          float left
          width 50%
          text-align center
          height: 44px
          line-height 44px
          position relative
          a
            color #fff
            font-size 15px
            display: block;
          .active
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #fff;
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            margin: auto;

  .bgfff
    background: #fff
    .mformBox
      background: #fff;
      border-radius 0.5em
      margin 0em 4% 1em 4%
      padding 0 1.6%
      ul
        list-style none
        li
          border-bottom #e2e2e2 solid 1px;
          padding 12px 0 12px 30px
          position relative
          .mNameIco
            float left
            display inline
            width: 17px
            height: 21px
            background:url("./ico3.png")
            background-size contain
            margin 1px 0 0 -25px
          .mNameIco1
            float: left;
            display: inline;
            width: 17px;
            height: 17px;
            background: url(./ico1.png) no-repeat;
            background-size: contain;
            margin: 2px 0 0 -25px;
          .text
            display block
            height 21px
            width:100%
            font-size 15px
            border:none
            padding 0px
            font-family: "Microsoft Yahei",tahoma,arial;
            outline: none;
            opacity .5

          .mpasswordIco
            background:url("./ico4.png")
            background-size: contain;
            float: left;
            display: inline;
            width: 17px;
            height: 20px;
            margin: 0px 0 0 -25px;

    .ftc
      text-align right
      padding-left 2em
      padding-right 2em
      color #b4c1ba
      font-size 14px
    .loginbtn
      width 90%
      height 40px
      background-color: #2ec975
      border-radius 3px
      margin 15px auto
      text-align center
      line-height 40px
      border-radius 50px
      a
        color white

    .c666
      color #666
      font-size 12px
      text-align center
    .ulList
      height 100%
      display inline-block
      li
        width: 33.3%;
        padding: 0 1.2em;
        float: left;
        display: inline;
        img
          width: 60%;
          height: auto;
          display: block;
          margin: auto;
          max-width: 176px;

</style>
