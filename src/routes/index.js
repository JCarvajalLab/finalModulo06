import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionesView from '../views/OpinionesView.vue'
import AdministracionView from '../views/AdministracionView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/opiniones/:juegoId', name: 'opiniones', component: OpinionesView },
    { path: '/administracion', name: 'administracion', component: AdministracionView },
    { path: '/:catchAll(.*)', name: 'notFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router