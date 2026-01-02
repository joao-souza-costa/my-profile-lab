import DefaultLayout from '@/views/layout/default-layout.vue'
import IndexPage from '@/views/pages/index/index-page.vue'
import QuestionsPage from '@/views/pages/questions/questions-page.vue'

const HOME_PAGE_CHILDREN = [
  {
    path: '',
    name: 'index',
    component: IndexPage,
  },
  {
    path: 'questions',
    name: 'questions',
    component: QuestionsPage,
  },
  {
    path: 'personal-data',
    name: 'personal-data',
    component: () => import('@/views/pages/personal-data/personal-data.vue'),
  },
  {
    path: 'report',
    name: 'report',
    children: [
      //TODO: Aqui é necessário adicionar uma regra que:
      /*
        1- Valida se o usuário já fez o pagamento (*cookie), nisso ele vai validar e passar direto pra o complete
        2- Não deixar alguém sem o cookie especifico acessar essa página
        3 - Ao acessar o report complete ele deverá ter um id que vai buscar o relatorio dessa pessoa
      */
      {
        path: '',
        name: 'report-incomplete',
        component: () => import('@/views/pages/report/report-incomplete.vue'),
      },
      {
        path: 'complete',
        name: 'report-complete',
        component: () => import('@/views/pages/report/report-complete.vue'),
      },
    ],
  },
]

export default [
  {
    path: '/',
    component: DefaultLayout,
    children: HOME_PAGE_CHILDREN,
  },
]
