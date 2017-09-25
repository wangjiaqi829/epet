<template>
  <div class="register_warp">
    <form action="" >
        <ul class="mform ml" >
          <li>
            <span class="mNumIco"></span>
            <input type="text" placeholder="请输入手机号码" id="inputText">
          </li>
        </ul>

        <div class="Detail page" v-show="!isShow">
          <form action="">
            <ul class="mform ml">

              <li>
                <span class="mNumIco" id="he_button"></span>
                <input type="text" placeholder="图片验证码">
              </li>
              <li>
                <span class="mNumIco"></span>
                <input type="text" placeholder="验证码" id="my_button">
              </li>
              <li>
                <span class="mNumIco"></span>
                <input type="text" placeholder="你的昵称/用户名">
              </li>
              <li>
                <span class="mNumIco"></span>
                <input type="text" placeholder="请设置密码">
              </li>
              <li>
                <span class="mNumIco"></span>
                <input type="text" placeholder="请确认密码">
              </li>
            </ul>

            <div class="mt20" >
             <button class="btn-login">下一步2</button>
            </div>


          </form>
        </div>


        <div class="mt20" @click="eventButton" v-show="isShow" :class="">
          <button class="btn-login" onpropertychange="eventChange">下一步</button>
        </div>
    </form>
  </div>
</template>e

<script>
//  var inputval =document.getElementById("inputText").value;
var inputval;
var Regx;
  export default {
    data(){
      return{
        isShow:true,
        inputval:'',
        innerHTML:''
      }
    },
    methods:{
      eventChange(){

      },

      eventButton(){


        var inputval =document.getElementById("inputText").value;
        var Regx =/^[1-9]\d*$|^[1-9]\d*\.\d{1,2}$|^0\.\d{1,2}$/

        if(Regx.test(inputval)){
            this.isShow=!this.isShow
        }else {
          alert('号码不对')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus"4e>
  .register_warp
    height 667px
    width 100%
    z-index 200
    background: #fff
    position absolute
    top 0
    .ml
      margin-left 1em
    ul
      list-style none
    .mform li
      border-bottom #e2e2e2 solid 1px;
      padding 1.2em 0 1.2em 30px;
      position relative
      .mNumIco
        background:url("./ico1.png") no-repeat
        background-size contain
        margin 2px 0 0 -25px
        float left
        display inline
        width 17px
        height: 17px
      .mform li input
        display block
        height: 21px
        width 100%
        font-size 13px
        border none
        padding 0px
        color #b8b8b8
      input
        outline none
        background: #fff
        border-radius 3
        font-size 13px
        opacity .5
    .mt20
      margin-top 2em
      padding-top 1.5em
      text-align center
      padding-left 48px
      padding-right 30px
      .btn-login
        background: #d7d7d7
        color white
        display block
        margin 1 10%
        width 80%
        border-radius 30px
        font-size 15px
        padding 5px 0
        text-align center
        height 30px
        /*background:red*/
        border none

</style>
