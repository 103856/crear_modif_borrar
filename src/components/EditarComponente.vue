<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Empleado</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              class="form-control"
              required
              name="nombre"
              v-model="empleado.nombre"
              id="nombre"
              aria-describedby="helpId"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text text-muted">
              Escribe el Nombre del Empleado
            </small>
          </div>
          <div class="form-group">
            <label for="correo">Correo</label>
            <input
              type="email"
              class="form-control"
              required
              name="correo"
              v-model="empleado.correo"
              id="correo"
              aria-describedby="helpId"
              placeholder="Correo"
            />
            <small id="helpId" class="form-text text-muted">
              Escribe el correo del empleado
            </small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-success">Modificar</button>
            <router-link
              :to="{ name: 'ListarComponente' }"
              class="btn btn-warning"
            >
              Cancelar
            </router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="mt-3">
      <h3>Lista de Empleados</h3>
      <div v-for="emp in empleados" :key="emp.id">
        <div>{{ emp.nombre }} - {{ emp.correo }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empleado: { nombre: "", correo: "" },
      empleados: [],
    };
  },
  created() {
    this.obtenerInformacionID();
    this.cargarEmpleados(); 
  },
  methods: {
    obtenerInformacionID() {
      fetch("http://localhost/empleados/?consultar=" + this.$route.params.id)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.empleado = datosRespuesta[0];
        })
        .catch(console.log);
    },

    cargarEmpleados() {
      fetch("http://localhost/empleados/?consultar=todos")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          this.empleados = datos;
        })
        .catch(console.log);
    },
    
    actualizarRegistro() {
      var datosEnviar = {
        id: this.$route.params.id,
        nombre: this.empleado.nombre,
        correo: this.empleado.correo,
      };

      fetch("http://localhost/empleados/?actualizar=" + this.$route.params.id, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(datosEnviar),
      })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.$router.push({ name: 'ListarComponente' }); 
      })
      .catch(console.log);
    },
  },
};
</script>


