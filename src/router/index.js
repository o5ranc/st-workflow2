import { createRouter, createWebHistory } from 'vue-router'
import WorkFlowList from '@/views/WorkFlowList.vue'
import EditWorkFlow from '@/views/EditWorkFlow.vue'

const routes = [
  {
    path: '/',
    component: WorkFlowList,
  },
  {
    path: '/workflw/create',
    component: EditWorkFlow, // 등록
  },
  {
    path: '/workflw/edit/:id',
    component: EditWorkFlow, // 수정
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router