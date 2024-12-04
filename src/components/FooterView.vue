<template>
<footer class="footer">
    <div class="footer-content">
        <h1>PRÁCTICA DE CONSOLIDACIÓN</h1>
        <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
    </div>
</footer>
</template>

<script>
export default {
    name: 'FooterView'
}
</script>

<style scoped>
.footer {
    /* background-color: #333;  Color de fondo similar al navbar */
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    /* Color del texto */
    padding: 20px;
    /* Espaciado interno */
    text-align: center;
    /* Centrar el texto */
}

.footer-content {
    max-width: 1200px;
    /* Ancho máximo del contenido */
    margin: 0 auto;
    /* Centrar el contenido */
}
</style>
