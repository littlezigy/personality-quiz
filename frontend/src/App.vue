<template>
  <div id="app">
    <nav>
      <router-link to="/start">Start Quiz</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.text-big {
  font-size: 3em;
}
nav {
  display: flex;
  justify-content: center;
}
</style>
