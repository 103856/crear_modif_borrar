<template>
  <div class="container">
    <router-link to="/CrearComponente" class="btn btn-success"> Agregar Nuevo Empleado </router-link>
    <br>
    <br>
    <br>

    <div class="card">
      <div class="card-header">Empleados</div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>correo</th>
              <th>acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empleado in empleados" :key="empleado.id">
              <td>{{ empleado.id }}</td>
              <td>{{ empleado.nombre }}</td>
              <td>{{ empleado.correo }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="">
                  <router-link
                    :to="{
                      name: 'EditarComponente',
                      params: { id: empleado.id },
                    }"
                    class="btn btn-info"
                    >Editar</router-link
                  >

                  <button
                    type="button"
                    v-on:click="BorrarEmpleado(empleado.id)"
                    class="btn btn-danger"
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empleados: [],
    };
  },
  created: function () {
    this.consultarEmpleados();
  },
  methods: {
    consultarEmpleados() {
      fetch("http://localhost/empleados/")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);

          this.empleados = [];
          if (typeof datosRespuesta[0].success === "undefined") {
            this.empleados = datosRespuesta;
          }
        })
        .catch(console.log);
    },
    BorrarEmpleado(id) {
      console.log(id);

      fetch("http://localhost/empleados/?borrar=" + id)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          window.location.href = "ListarComponente";
        })
        .catch(console.log);
    },
  },
};
</script>
