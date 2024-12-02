<template>
<div class="container">
    <h3 style="margin: 30px; text-align: center">
        Escribe tu opinión para el juego: {{ juegoName }} <!-- Muestra el nombre del juego -->
    </h3>
</div>
</template>

<script>
export default {
    props: {
        juegoName: String // Recibe el nombre del juego como prop
    },
}
</script>