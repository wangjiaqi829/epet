<template>
  <div class="register_warp">
    <form action="" >
        <ul class="mform ml" >
          <li>
            <span class="mNumIco"></span>
            <input type="text" placeholder="请输入手机号码" id="inputText"  @input="eventChange" v-model="Invalue">
          </li>
        </ul>

        <div class="Detail page" v-show="!isShow">
          <form action="">
            <ul class="mform ml">
              <li>
                <span class="mNumIco"></span>
                <input type="text" id="code_input" value="" placeholder="请输入验证码" v-model="inputText"/>
                <div id="v_container"></div>
              </li>

              <li>
                <span class="mNumIco"></span>
                <input type="text"  placeholder="验证码" id="my_button" >
                <button class="acquiring" @click="YanZheng">
                  <a href="javascript:;" style="color: white">获取短信验证码</a>
                </button>
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
             <button class="btn-login" @click="TheRegist">点击注册</button>
            </div>

          </form>
        </div>

        <div class="mt20" @click="eventButton" v-show="isShow" >
          <button class="btn-login " :class='[TagColor]' >下一步</button>
        </div>
    </form>
  </div>
</template>

<script>
  import GVerify from './gVerify'

//var inputval;
//var Regx;
  export default {
    data(){
      return {
        Invalue: '',
        isShow: true,
        inputval: '',
        innerHTML: '',
        TagColor: 'btn-login',
        inputText: ''
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this._found()
      })
    },

    methods:{

      eventChange(){
        // var inputval =document.getElementById("inputText").value;

        if (this.Invalue) {
          //console.log(this.Invalue)
          this.TagColor = 'Tag'
        } else {
          this.TagColor = 'btn-login'
        }
      },

      eventButton(){

        var inputval = document.getElementById("inputText").value;
        var Regx = /^1(3|4|5|7|8)\d{9}$/
        if (Regx.test(inputval)) {
          //console.log('111')
          this.isShow = !this.isShow
        } else {
          alert('号码不对')
        }
      },


      _found(){
        this.verifyCode = new GVerify({
        id:'v_container',
        num:4
        })

      },

      TheRegist(){},

      YanZheng(){
        if (this.verifyCode.validate(this.inputText)){
          console.log(this.inputText)
          alert('验证成功')
        }else {
          console.log(this.inputText)
          alert('验证失败')
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
      #v_container
        position absolute
        right 2px
        top 15px
        width 110px
        height 30px
        width: 9em
      .acquiring
        background: #fed171;
        border-radius: 30px;
        text-align center
        margin 0 10px
        color white
        border none
        font-size 15px
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
        border none
      .Tag
        background:red
        color white
        display block
        margin 1 10%
        width 80%
        border-radius 30px
        font-size 15px
        padding 5px 0
        text-align center
        height 30px
        border none
</style>
