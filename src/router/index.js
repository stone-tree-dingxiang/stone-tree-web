import Vue from 'vue'
import VueRouter from 'vue-router'
// 
import HomePage from '../components/homePage.vue'
import HomePageContainer from '../components/homePage/homePageContainer.vue'
import PersonalPage from '../components/personalPage.vue'
import PersonalContainer from '../components/personalCenter/personalContainer.vue'
import Qqq from '../components/qqq/qqq.vue'
import Qq2 from '../components/qqq/qq2.vue'
import Www from '../components/www/www.vue'
import Ww2 from '../components/www/ww2.vue'
import Eee from '../components/eee/eee.vue'
import Ee2 from '../components/eee/ee2.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/homePageContainer',
    component: HomePage,
    children: [
      {path: '/homePageContainer',name:'homePageContainer', component: HomePageContainer},
      {path: '/qqq', component: Qqq},
      {path: '/qq2', component: Qq2},
      {path: '/www', component: Www},
      {path: '/ww2', component: Ww2},
      {path: '/eee', component: Eee},
      {path: '/ee2', component: Ee2},
    ]
    },
    {
      path: 'personalPage',
      component: PersonalPage,
      children: [
        {path:'/personalContainer',name:'personalContainer',component:PersonalContainer}
      ]
    }
  
]

const router = new VueRouter({
  routes
})

export default router
