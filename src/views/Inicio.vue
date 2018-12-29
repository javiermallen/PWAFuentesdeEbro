<template>
<div class="app">
  <div class="container-fluid"> 

  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8">
        <div class="inicio">
          <img class="img-fluid" alt="Fuentes de ebro" src="../assets/FuentesdeEbroescudo.svg">
          <HelloWorld msg="Bienvenidos a la aplicación de avisos de Fuentes de Ebro"/>
      </div>
    </div>  
  </div>
</div>
  
</div>

  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'inicio',
  components: {
    HelloWorld
  }
}
</script>
