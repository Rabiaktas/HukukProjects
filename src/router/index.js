import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        layout: 'full',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/hakkimizda',
      name: 'hakkimizda',
      component: () => import('@/views/Hakkimizda/Hakkimizda.vue'),
      meta: {
        pageTitle: 'Hakkimizda',
        layout: 'full',
        breadcrumb: [
          {
            text: 'Hakkimizda',
            active: true,
          },
        ],
      },
    },
    {
      path: '/UzmanlikAlanlarimiz/CezaHukuku',
      name: 'CezaHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/CezaHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    },
    {
      path: '/UzmanlikAlanlarimiz/AileHukuku',
      name: 'AileHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/AileHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    }, 
      {
      path: '/UzmanlikAlanlarimiz/TazminatHukuku',
      name: 'TazminatHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/TazminatHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    },
    {
      path: '/UzmanlikAlanlarimiz/IsVeSosyalGuvenlikHukuku',
      name: 'IsHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/IsHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    },
     {
      path: '/UzmanlikAlanlarimiz/IcraHukuku',
      name: 'IcraHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/IcraHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    },
    {
      path: '/UzmanlikAlanlarimiz/MirasHukuku',
      name: 'MirasHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/MirasHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    },
    {
      path: '/UzmanlikAlanlarimiz/TuketiciHukuku',
      name: 'TuketiciHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/TuketiciHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    },
    {
      path: '/UzmanlikAlanlarimiz/VergiHukuku',
      name: 'VergiHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/VergiHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    },   {
      path: '/UzmanlikAlanlarimiz/GayrimenkulHukuku',
      name: 'GayrimenkulHukuku',
      component: () => import('@/views/UzmanlikAlanlarimiz/GayrimenkulHukuku.vue'),
      meta: {
        pageTitle: 'UzmanlikAlanlarimiz',
        layout: 'full',
        breadcrumb: [
          {
            text: 'UzmanlikAlanlarimiz',
            active: true,
          },
        ],
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/Makaleler/Makaleler.vue'),
      meta: {
        pageTitle: 'About',
        layout: 'full',
        breadcrumb: [
          {
            text: 'About',
            active: true,
          },
        ],
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Iletişim/Contact.vue'),
      meta: {
        pageTitle: 'contact',
        layout: 'full',
        breadcrumb: [
          {
            text: 'contact',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
    {
      path: '/admin-edit',
      name: 'admin-edit',
      component: () => import('@/views/Admin/Edit/edit.vue'),
      meta: {
        pageTitle: 'Edit',
        breadcrumb: [
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Admin/Profile/account-setting/AccountSetting.vue'),
      meta: {
        pageTitle: 'Profile',
        breadcrumb: [
          {
            text: 'Profile',
            active: true,
          },
        ],
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Login/Register.vue'),
      meta: {
        layout: 'full'
      },
    },
  
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router

