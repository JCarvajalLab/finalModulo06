import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue' 
import Administracion from '@/views/Administracion.vue' 
import Opiniones from '@/views/Opiniones.vue' 
import NotFound from '@/views/NotFound.vue' 

// Le decimos a Vue que use VueRouter como un plugin.
Vue.use(VueRouter)

const routes = [
    {
        // Ruta principal que carga el componente Home.
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        // Ruta principal que carga el componente Home.
        path: '/administracion',
        name: 'administracion',
        component: Administracion
    },
    {
        // Ruta principal que carga el componente Home.
        path: '/opiniones',
        name: 'opiniones',
        component: Opiniones
    },
    {
        // Ruta principal que carga el componente Home.
        path: '/notFound',
        name: 'notFound',
        component: NotFound
    }
]


const router = new VueRouter({
    mode: 'history', // Usa el modo de historial para evitar el uso de hashes en las URLs.
    base: process.env.BASE_URL, // Establece la base de la URL desde las variables de entorno.
    routes // Asignamos las rutas definidas anteriormente.
})

// Exportamos el router para usarlo en la aplicación principal.
export default router