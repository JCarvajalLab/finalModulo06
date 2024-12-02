<template>
<div class="container">
    <h1>Juegos</h1>
    <div v-if="loading" class="text-center">
        <img src="https://i.imgur.com/JfPpwOA.gif" alt="Cargando...">
    </div>
    <div v-else-if="error" class="text-center">
        <h2>Error al cargar los datos</h2>
        <p>{{ error }}</p>
    </div>
    <div v-else class="row">
        <div class="col-md-4" v-for="juego in juegos" :key="juego.id">
            <div class="card" style="width: 22rem;">
                <img :src="juego.imagen" :alt="juego.name" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ juego.name }}</h5>
                    <p class="card-text">Calificación: {{ juego.rating }}</p>
                    <p class="card-text">Lanzamiento: {{ juego.released }}</p>
                    <p class="card-text">Actualización: {{ juego.updated }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-primary">Opinion</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            juegos: [],
            loading: true,
            error: null
        }
    },
    mounted() {
        this.obtenerJuegos();
    },
    methods: {
        obtenerJuegos() {
            axios.get(`https://api.rawg.io/api/games?key=c99c1c019f3246afa2cccbc2209eda01&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
                .then(response => {
                    this.juegos = response.data.results.map(juego => ({
                        imagen: juego.background_image,
                        name: juego.name,
                        rating: juego.metacritic,
                        released: juego.released,
                        updated: juego.updated
                    }));
                    this.loading = false;
                })
                .catch(error => {
                    this.error = error.message;
                    this.loading = false;
                });
        }
    }
}
</script>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    margin-bottom: 20px;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>
