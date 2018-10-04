<template>
    <div>
      <h1>Iniciar sesion</h1>
    <form v-on:submit.prevent="runLogin">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Correo</label>
            <input type="email" class="form-control" v-model="usuario.correo" required>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Contraseña</label>
            <input type="password" class="form-control col-md-6" v-model="usuario.password" required>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Iniciar sesion</button>
      </div>
    </form>
    <div>

      <h1>Registrate!</h1>
    <form v-on:submit.prevent="runRegistro">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="registro.nombre" required>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Correo</label>
            <input type="email" class="form-control col-md-6" v-model="registro.correo" required>
          </div>
        </div>
      </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Contraseña</label>
            <input type="password" class="form-control" v-model="registro.password" required>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Tipo usuario</label>
            <select class="custom-select" v-model="registro.rol">
              <option selected>Seleccione el tipo de usuario</option>
              <option value="Administrador">Administrador</option>
              <option value="Paciente">Paciente</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Entidad Afiliacion</label>
            <select class="custom-select" v-model="registro.entidad_afiliacion">
              <option selected>Seleccione el tipo de Afiliacion</option>
              <option value="EDSALUD">EDSALUD</option>
              <option value="COLMED">COLMED</option>
              <option value="OTRA">OTRA</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Teléfono</label>
            <input type="text" class="form-control col-md-6" v-model="registro.telefono" required>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Registrarse</button>
      </div>
    </form>
    </div>
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
      runLogin(){
          
        let uri = 'https://hospital-seratic.herokuapp.com/api/loginFinal';
        this.axios.post(uri, this.usuario).then((respuesta) => {
          
          if(respuesta.data[0] == null){
            console.log(respuesta.data[0]);
            alert("Datos incorrectos");
          
          }else{
            console.log(respuesta.data[0]);
            this.$emit("authenticated", true);
            this.$emit("usuario", respuesta.data[0]);
            
            if(respuesta.data[0].rol == "Administrador"){
                this.$router.replace({ name: 'MostrarPrueba',query:respuesta.data[0]})
            }else{
                this.$router.replace({ name: 'MostrarPaciente',query:respuesta.data[0]})
            }
          }
        });
        
       
      },
      runRegistro(){
          
        let uri = 'https://hospital-seratic.herokuapp.com/api/usuario';
        this.axios.post(uri, this.registro).then((respuesta) => {
          
          console.log(respuesta.data);
          alert("se creo correctamente el usuario!!");

        });
        
       
      }
    }
  }
  </script>

