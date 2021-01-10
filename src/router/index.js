import Vue from 'vue'
import VueRouter from 'vue-router'
// 
import HomePage from '../components/homePage.vue'
import HomePageContainer from '../components/homePage/homePageContainer.vue'
import PersonalPage from '../components/personalPage.vue'
// 动态
import PersonalContainer from '../components/personalCenter/personalContainer.vue'
// 文章
import PersonalArticle from '../components/personalCenter/personalArticle.vue'
// 图片
import PersonalPicture from '../components/personalCenter/personalPicture.vue'
// 空页面
import EmptyContent from '../components/common/emptyContent.vue'
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
      { path: '/homePageContainer', name: 'homePageContainer', component: HomePageContainer },
      {path: '/qq2', component: Qq2},
      {path: '/www', component: Www},
      {path: '/ww2', component: Ww2},
      {path: '/eee', component: Eee},
      {path: '/ee2', component: Ee2},
    ]
    },
    {
      path: '/personalContainer',
      component: PersonalPage,
      children: [
        // 动态
        { path: '/personalContainer', name: 'personalContainer', component: PersonalContainer },
        // 文章
        { path: '/personalArticle', name: 'personalArticle', component: PersonalArticle },
        // 相册
        { path: '/personalPicture', name: 'personalPicture', component: PersonalPicture },
        // 关注空页面
        {path: '/focusEmptyContent', name: 'focusEmptyContent',component: EmptyContent},
        // 粉丝空页面
        {path: '/fansEmptyContent', name: 'fansEmptyContent',component: EmptyContent},
        // 收藏空页面
        {path: '/collectEmptyContent', name: 'collectEmptyContent',component: EmptyContent},
     
      ]
    }
  
]

const router = new VueRouter({
  routes
})

export default router
