import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录页面
import Login from '../components/loginPage.vue'
// 登录之后的页面
import Home from '../components/home.vue'
// 首页
import HomePage from '../components/homePage.vue'
// 首页的博客内容
import HomePageContainer from '../components/homePage/homePageContainer.vue'
// 个人中心
import PersonalPage from '../components/personalPage.vue'
// 个人中心-- 动态
import PersonalContainer from '../components/personalCenter/personalContainer.vue'
// 个人中心--文章
import PersonalArticle from '../components/personalCenter/personalArticle.vue'
// 个人中心--图片
import PersonalPicture from '../components/personalCenter/personalPicture.vue'
// 空页面
import EmptyContent from '../components/common/emptyContent.vue'

Vue.use(VueRouter)

const routes = [
  // 登录页面
  {
    path: '/login',
    component: Login,      
  },
  // 首页
  {
    path: '/',
    redirect: '/homePageContainer',
    component: Home,
    children: [
      {
        path: '/homePage',
        component: HomePage,
        children: [
          { path: '/homePageContainer', name: 'homePageContainer', component: HomePageContainer },
        ]
      }      
    ]
  },
  // 个人中心
  {
      path: '/personalContainer',
      component: Home,
      children: [{
        path: '/personalPage',
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
  }  
]

const router = new VueRouter({
  routes
})

export default router
