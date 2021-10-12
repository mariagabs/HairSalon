<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: 0;
}

a {
  text-decoration: none;
}

ul li {
  list-style: none;
}

body {
  font-family: Lato, sans-serif;
  background: #4c2a85;
}
</style>
