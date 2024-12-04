<template>
<footer class="footer">
    <div class="footer-content">
        <h1>Footer</h1>
        <p>© 2023 Tu Empresa. Todos los derechos reservados.</p>
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
    background-color: #333;
    /* Color de fondo similar al navbar */
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
