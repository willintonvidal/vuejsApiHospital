<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link :to="{ name: 'Login' }" class="navbar-brand">
        HOSPITAL-SERATIC
      </router-link>
      <router-link v-if="authenticated" to="/" v-on:click.native="logout()" replace>Logout</router-link>
      
    </nav>
    <!-- CONTENIDO -->
    <div class="container">
      <div>
        <transition name="fade">
          <router-view @authenticated="setAuthenticated"/>>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
        name :'App',
        data() {
            return {
                authenticated: false,
                usuario:["usuario"]
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "Login" });
            }else{
              this.$router.replace({ name: "MostrarPrueba" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
        },
            logout() {
                this.authenticated = false;
                this.usuario = false;
            }
    }
  }
</script>

   


<style>
  .fade-enter-active .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter .fade-leave-active {
    transition: 0;
  }
</style>


