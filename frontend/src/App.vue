<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ExampleCounter/>
</template>

<script>
import ExampleCounter from './components/ExampleCounter.vue'

export default {
  name: 'App',
  components: {
    ExampleCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
