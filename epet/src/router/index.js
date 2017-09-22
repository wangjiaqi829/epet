import Vue from 'vue'
import Router from 'vue-router'

//引入路由组件
import home from '../components/home/home.vue'
import classifi from  '../components/classifi/classifi.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import myuser from '../components/myuser/myuser.vue'


//引入路由子组件
import one from '../components/one/one.vue'
import two from '../components/two/two.vue'
import three from '../components/three/three.vue'
import four from '../components/four/four.vue'
import five from '../components/five/five.vue'
import six from '../components/six/six.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component:home,
      children:[
        {
          path:'one',
          component:one,
        },
        {
          path:'two',
          component:two,
        },
        {
          path:'three',
          component:three,
        },
        {
          path:'four',
          component:four,
        },
        {
          path:'five',
          component:five,
        },
        {
          path:'six',
          component:six,
        },
        {
          path:'one',
          redirect:one,
        }
      ]
    },
    {
      path: '/classifi',
      component: classifi,
    },
    {
      path: '/shopcart',
      component: shopcart,
    },
    {
      path: '/myuser',
      component: myuser,
    },

    {
      path: '/',
      redirect: '/home',
    },
  ]
})
