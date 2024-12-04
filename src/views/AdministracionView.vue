<template>
<div>
    <div class="info" v-if="infoVisible">
        <h2>para ver la informacion ingresa tus datos</h2>
        <button type="button" @click="datos()" class="btn btn-success" style="margin: 30px">
            Ingresar Datos
        </button>
    </div>
    <div v-if="this.nombre && this.apellido != null">
        <div class="navbar-container">
            <NavbarView />
        </div>
        <div class="sidebar">
            <img alt="User  profile picture" height="50" src="https://storage.googleapis.com/a1aa/image/xSCFQEgwZcJ8JFVy5oSmAPhwQX9kWTbkQFM3Iv04jvKuQw9E.jpg" width="50" />
            <h2> {{ getDatos }} </h2>
        </div>

        <div class="content">
            <h1 style="margin-left:10px">Resumen de tu cuenta</h1>
            <p style="margin-left:10px">
                Le diste me gusta al juego <strong> {{ juegoName  }}</strong>
            </p>
            <div class="card small-card">
                <p>¿Deseas comprar coins para este juego?</p>
                <div class="">
                    <button style="margin-left: 200px; margin-right: 150px" type="button" class="btn btn-warning " @click="cont()">
                        <i class="fas fa-coins"></i> Agregar coins
                    </button>
                </div>
                <br>
                <hr>
                <br>
                <h2>Cantidad de coins comprados</h2>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{ width: contador + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :class="color">
                        $ {{ contador }}
                    </div>
                </div>

                <p v-if="contador == maximo" class="card-text">
                    <small class="text-muted">Llegaste al máximo de tu crédito</small>
                </p>
            </div>
            <br>
            <br>
            <div class="stats">
                <div class="stat yellow">
                    <p>% de finalización de juego</p>
                    <p>
                        17%
                        <i class="fas fa-bolt"></i>
                    </p>
                </div>
                <div class="stat green">
                    <p>Logros en el juego</p>
                    <p>
                        166
                        <i class="fas fa-trophy"></i>
                    </p>
                </div>
                <div class="stat blue">
                    <p>Recompensas</p>
                    <p>
                        200
                        <i class="fas fa-award"></i>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-container">
            <FooterView />
        </div>
    </div>
</div>
</template>

<script>
import NavbarView from '../components/NavbarView.vue';
import FooterView from '../components/FooterView.vue';

export default {
    name: 'AdministracionView',
    components: {
        NavbarView,
        FooterView
    },

    data() {
        return {
            contador: 0,
            maximo: 50,
            disable: false,
            nombre: "",
            apellido: "",
            infoVisible: true, // Nueva propiedad para controlar la visibilidad
        };
    },
    methods: {
        cont() {
            if (this.contador < this.maximo) {
                this.disable = true;
                this.contador++;
            } else {
                this.disable = false;
            }
        },

        datos() {
            let nombre = prompt("Ingrese nombre");
            let apellido = prompt("Ingrese apellido");
            this.nombre = nombre;
            this.apellido = apellido;
            this.infoVisible = false; // Oculta el div de información
        },
    },
    computed: {
        juegoName() {
            // Supongamos que el nombre del juego se pasa como otro parámetro
            return this.$route.params.juegoName; // Cambia esto según tu estructura
        },

        getDatos() {
            return "Bienvenid@ " + this.nombre + " " + this.apellido;
        },
        color() {
            return {
                "bg-success": this.contador <= 20,
                "bg-warning": this.contador > 20 && this.contador < 30,
                "bg-danger": this.contador >= 30,
            };
        },
    },
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
}

.info{
    text-align: center;
    margin-top: 20%;
}

.navbar-container {
    /*margin-left: 250px;*/
    /* Ajusta este valor según el ancho de tu sidebar */
    margin: 0;
}

.footer-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* background-color: #333; */
    color: white;
    text-align: center;
    /* padding: 10px; */
}
.sidebar {
    background-color: rgba(0, 0, 0, 0.5); /* Verde con 50% de opacidad */
    color: white; /* Color del texto */
    padding: 20px;
    width: 250px;
    height: 100%;
    position: fixed;
}

.sidebar img {
    border-radius: 50%;
    /* Hace que la imagen sea circular */
}

.content {
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
    flex: 1;
    padding: 20px;
}

.content h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.content p {
    font-size: 18px;
    margin-bottom: 20px;
}

.card {
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;

}

.small-card {
    padding: 10px;
    /* Reduce el padding */
    margin: 10px;
    /* Reduce el margen */
    width: 100%;
    /* Establece el ancho a la mitad */
    max-width: 600px;
    /* Establece un ancho máximo si es necesario */
}

.stats {
    display: flex;
    justify-content: space-between;
}

.stat {
    flex: 1;
    padding: 20px;
    color: white;
    text-align: center;
    border-radius: 5px;
    margin: 0 10px;
}

.stat:first-child {
    margin-left: 0;
}

.stat:last-child {
    margin-right: 0;
}

.stat i {
    margin-right: 5px;
}

.stat.yellow {
    background-color: #ffc107;
}

.stat.green {
    background-color: #28a745;
}

.stat.blue {
    background-color: #17a2b8;
}
</style>
