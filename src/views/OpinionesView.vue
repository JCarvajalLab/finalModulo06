<template>
<div class="container">
    <OpinionForm :juegoName="$route.params.juegoName"></OpinionForm>
    <form @submit.prevent="submitOpinion">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" v-model="nombre" class="form-control" id="nombre" required>
        </div>
        <div class="mb-3">
            <label for="opinion" class="form-label">Opinión</label>
            <textarea v-model="opinion" class="form-control" id="opinion" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">{{ isEditing ? 'Actualizar' : 'Agregar' }}</button>
    </form>

    <h2 class="mt-4">A continuación podrás ver tu opinión</h2>
    <div v-if="opiniones.length === 0" class="alert alert-danger">
        No existen opiniones
    </div>
    <div v-for="(opinion, index) in opiniones" :key="index" class="border p-3 mb-2">
        <p><strong>Opinión creada por:</strong> {{ opinion.nombre }}</p>
        <p><strong>Opinión:</strong> {{ opinion.texto }}</p>
        <button @click="editOpinion(index)" class="btn btn-warning">Editar</button>
        <button @click="deleteOpinion(index)" class="btn btn-danger">Eliminar</button>
    </div>
</div>
</template>

<script>
import OpinionForm from '@/components/OpinionForm.vue'
export default {
    name: 'OpinionesView',
    components: {
        OpinionForm
    },
    data() {
        return {
            nombre: '',
            opinion: '',
            opiniones: [],
            isEditing: false,
            editingIndex: null
        }
    },
    computed: {
        juegoName() {
            return this.$route.params.juegoName; // Obtiene el nombre del juego desde los parámetros de la ruta
        }
    },
    methods: {
        submitOpinion() {
            if (this.isEditing) {
                // Actualiza la opinión existente
                this.opiniones[this.editingIndex] = {
                    nombre: this.nombre,
                    texto: this.opinion
                };
                this.isEditing = false;
            } else {
                // Agrega una nueva opinión
                this.opiniones.push({
                    nombre: this.nombre,
                    texto: this.opinion
                });
            }
            this.resetForm();
        },
        editOpinion(index) {
            this.nombre = this.opiniones[index].nombre;
            this.opinion = this.opiniones[index].texto;
            this.isEditing = true;
            this.editingIndex = index;
        },
        deleteOpinion(index) {
            this.opiniones.splice(index, 1);
            this.resetForm();
        },
        resetForm() {
            this.nombre = '';
            this.opinion = '';
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
}

.alert {
    margin-top: 20px;
}
</style>
