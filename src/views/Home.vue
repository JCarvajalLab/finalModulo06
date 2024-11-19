<template>
<div class="home">
    <div class="container">
    <h1 style="margin: 20px">Lista de juegos disponibles</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="game in games" :key="game.id">
                <div class="card">
                    <img :src="game.image" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{{ game.name }}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Rating: {{ game.rating }}</li>
                            <li class="list-group-item">Released: {{ game.released }}</li>
                            <li class="list-group-item">Update: {{ game.update }}</li>
                        </ul>
                    </div>
                    <router-link :to="{name: 'game', params: {id: game.id}}">
                        <button type="button" class="btn btn-primary"  data-bs-whatever="@mdo">Ver juego</button>
                    </router-link>

                    <router-link :to="{name: 'Opiniones', params: {id: game.name}}">
                        <button type="button" class="btn btn-primary"  style="color:red">
                            <i class="fas fa-heart"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import { computed } from 'vue';

export default{
    name: "Home",
    components: {},
    data(){
        return{
            games: [],
            opiniones: [],
            nombre: "",
            opinion:""
        }
    },
    computed: {

    },
    methods:{
        obtenerDatos(){
            axios.get('http://localhost:3000/games')
            .then(response => {
                this.games = response.data.results
            })
        },
        agregarOpiniones(){
            this.Opiniones.push({
                nombre: this.nombre,
                opinion: this.opinion
            });
            this.$router.push('opiniones');
            this.nombre = '',
            this.opinion = ''
        }
    },
    created(){
        this.obtenerDatos();
    }
};

</script>

<style scoped>
.container{
    padding-top: 40px;
    padding-bottom: 40px;
}
</style>