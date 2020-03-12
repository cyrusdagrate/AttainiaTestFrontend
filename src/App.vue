<template>
  <div id="app">
    <div class="router">
      <router-link class="routerLink" to="/">home</router-link>
      <router-link class="routerLink" to="/page1">Page1</router-link>
      <router-link class="routerLink" to="/page2">Page2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router {
  float: left;
  text-indent: 50px;
  margin-bottom: 60px;
}
</style>
