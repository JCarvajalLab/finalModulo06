<template>
<div>
    <div class="info" v-if="infoVisible">
        <h2>para ver la informacion ingresa tus datos</h2>
        <button type="button" @click="datos()" class="btn btn-success" style="margin: 30px">
            Ingresar Datos
        </button>
    </div>
    <div v-if="this.nombre && this.apellido != null">
        <div class="sidebar">
            <img alt="User  profile picture" height="50" src="https://storage.googleapis.com/a1aa/image/xSCFQEgwZcJ8JFVy5oSmAPhwQX9kWTbkQFM3Iv04jvKuQw9E.jpg" width="50" />
            <h2> {{ getDatos }} </h2>
        </div>

        <div class="content">
            <h1>Resumen de tu cuenta</h1>
            <p>
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
    </div>
</div>
</template>

<script>
export default {
    name: 'AdministracionView',

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

.sidebar {
    position: fixed;
    /* Fija la sidebar en la ventana */
    top: 0;
    /* Desde la parte superior */
    left: 0;
    /* Desde el lado izquierdo */
    width: 250px;
    /* Ancho de la sidebar */
    height: 100%;
    /* Altura completa */
    background-color: #333;
    /* Color de fondo */
    color: white;
    /* Color del texto */
    padding: 20px;
    /* Espaciado interno */
    box-sizing: border-box;
    /* Incluye padding en el ancho total */
}

.sidebar img {
    border-radius: 50%;
    /* Hace que la imagen sea circular */
}

/* display: flex;
  flex-direction: column;
  align-items: center;
   Asegura que la sidebar ocupe toda la altura */

/* 
.sidebar img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.sidebar h2 {
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
} */

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

/*
.card button {
    background-color: #ffc107;
    border: none;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}
*/
/*
.progress-bar {
  background-color: #f1f1f1;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
}
.progress-bar div {
  height: 20px;
  background-color: #ddd;
  width: 50%;
}
*/
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
