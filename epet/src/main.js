// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//使用mint-ui
//轮播图+
import { Swipe, SwipeItem,} from 'mint-ui';
Vue.component(Swipe.name, Swipe,);
Vue.component(SwipeItem.name, SwipeItem);

/*// tab显示卡
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);*/


import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
})
