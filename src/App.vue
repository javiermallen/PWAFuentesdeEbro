<template>
  <div id="app">
    <router-view/>

    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/nosotros">Nosotros</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
