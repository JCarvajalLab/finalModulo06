<template>
<div class="general">

    <nav class="navbar navbar-expand-lg "> <!-- navbar-dark bg-dark -->
        <div class="container-fluid">
            <a class="navbar-brand " href="#"><i class="fas fa-headset"></i> Games opinion</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <ul class="d-flex navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/"><i class="fas fa-home"></i> Home</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Navbar content -->
    </nav>
</div>
</template>

<script>
export default {
    name: 'NavbarView'
}
</script>

<style scoped>
/* Estilos específicos para el componente navBar */
nav {
    background-color: rgba(0, 0, 0, 0.8); /* Negro con 50% de opacidad */
    color: white; /* Color del texto */
    padding: 10px
}

a{
    color: white
}
a:hover{
    color: rgb(216, 204, 204)
}
</style>
