<template>
<div>
  <header>
  <div class="logo_bg"style="background: url(//img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png) no-repeat;  background-size: 100% 100%">
    <!--<  注册 与背景图片-->
    <div class="head-top">
      <a href="http://localhost:8080/#/home/one" class="aback page-top"><</a>
      <div class="zfont">
      <a href="Javascript:;" class="afff">注册</a>
      </div>
    </div>

    <!--巨宠图片-->
    <div class="mlogo">
      <img src="//static.epetbar.com/mpet/images/login/logo.png" alt="巨宠">
    </div>

    <!--登录-->
    <div class="es_por4">
      <ul>
        <li @click="Tablogo"><a href="javascript:;">普通登录</a><i></i></li>
        <li @click="loginTodo"><a href="javascript:;">手机动态密码登录</a><i></i></li>
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



    <div>忘记密码</div>
  </div>

</div>
</template>

<script>

  export default {
    data(){
      return{
        isShow: true
      }
    },

    methods:{
      Tablogo(){
        if(!this.isShow) {
          this.isShow = !this.isShow

        }
      },
      loginTodo(){
        if(!this.isShow) {
          return
        }else {
          this.isShow = !this.isShow
        }
      }
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
          a
            color #fff
            font-size 15px
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

</style>
