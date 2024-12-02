import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue'
import OpinionesView from '../views/OpinionesView.vue'
import AdministracionView from '../views/AdministracionView.vue'
import NotFound from '../views/NotFound.vue'

//import OpinionForm from '../components/OpinionForm.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/opiniones/:juegoId/:juegoName', name: 'opiniones', component: OpinionesView },
    { path: '/administracion', name: 'administracion', component: AdministracionView },
    { path: '/:catchAll(.*)', name: 'notFound', component: NotFound },
    //{ path: '/opinion/:juegoId', name: 'opinionform', component: OpinionForm, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router