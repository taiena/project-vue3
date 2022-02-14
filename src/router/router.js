import Main from '@/pages/Main'
import PostsPage from '@/pages/PostsPage'
import PostsPageWithStore from '@/pages/PostsPageWithStore'
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi'
import PostPage from '@/pages/PostPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/storeposts',
    component: PostsPageWithStore,
  },
  {
    path: '/compositionposts',
    component: PostsPageCompositionApi,
  },
  {
    path: '/posts/:id',
    component: PostPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
