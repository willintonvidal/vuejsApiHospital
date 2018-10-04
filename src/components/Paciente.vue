<template>
    <div>
        <h1>Bienvenido paciente {{this.$route.query.nombre}}</h1>
        <h2>GESTIONAT CITA</h2>
    <form v-on:submit.prevent="runRegistro">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Motivo Consulta</label>
            <input type="text" class="form-control" v-model="registro.motivo_consulta" required>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Fecha que deseas la cita</label>
            <input type="date" class="form-control col-md-6" v-model="registro.fecha_cita" required>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Registrarse</button>
      </div>
    </form>
    </div>
</template>


<script>
export default {
    name:'Login',
    data(){
      return{
        usuario:{},
        registro:{}
      }
    },
    methods: {
      runRegistro(){
          
        let uri = 'https://hospital-seratic.herokuapp.com/api/usuario/'+this.$route.query.id+'/cita';
        this.axios.post(uri, this.registro).then((respuesta) => {
          console.log(respuesta);
          alert("creaste correctamente la alerta")
          
        });
        
       
      }
    }
  }
  </script>


</script>
