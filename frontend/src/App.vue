<template>
  <div id="app">
    <nav>
      <router-link class = 'button is-outlined is-primary' to="/start" v-if = 'this.$route.path == "/"'>Start Quiz</router-link>
      <router-link class = 'button is-outlined is-info' to="/" v-else>Home</router-link>
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
html {
  min-height: 100vh;
}
body{
  min-height: 90vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 3em;
}
.page {
	display: flex;
	flex-direction: column;
}
.text-big {
  font-size: 3em;
}
nav {
  display: flex;
  justify-content: center;
}
</style>
