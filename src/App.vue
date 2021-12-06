<template>
  <div id="nav">
    <!--
    <router-link class="router-button" to="/">Apps</router-link> |
    <router-link class="router-button" to="/about">Schedule</router-link>
    -->
    <div class="router-button" @click="$router.push('/')">Apps</div>
    <div class="router-button" @click="$router.push('about')">Schedule</div>
  </div>
  <router-view />
</template>

<style>
html, body {
  margin: 0px; 
  padding: 0px;
  height: 100%; 
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 85%;
}

#nav {
  position: fixed;
  bottom: 0px;
  height: 12%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}

.router-button {
  background-color: rgba(121, 175, 224, 1);
  height: 100%;
  flex: 1 1 49%;
  border: 1px solid rgba(49, 120, 187, 0.76);

  font-weight: bold;
  font-size: 2em;

  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
