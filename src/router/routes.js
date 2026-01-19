import IndexPage from '@/views/pages/index/index-page.vue'
import QuestionsPage from '@/views/pages/questions/questions-page.vue'
import { defineAsyncComponent } from 'vue'

export default [
  {
    name: 'index',
    component: IndexPage,
  },
  {
    name: 'questions',
    component: QuestionsPage,
  },
  {
    name: 'personal-data',
    component: defineAsyncComponent(() => import('@/views/pages/personal-data/personal-data.vue')),
  },

  {
    name: 'report-incomplete',
    component: defineAsyncComponent(() => import('@/views/pages/report/report-incomplete.vue')),
  },
  {
    name: 'report-complete',
    component: defineAsyncComponent(() => import('@/views/pages/report/report-complete.vue')),
  },
]
