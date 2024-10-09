<template>
  <div class="counter">
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ExampleCounter',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    async fetchCounter() {
      try {
        const response = await axios.get('http://localhost:3000/counter');
        this.count = response.data.counter;
      } catch (error) {
        console.error('Fehler beim Abrufen des Zählerwerts:', error);
      }
    },
    async increment() {
      try {
        const response = await axios.post('http://localhost:3000/counter/increment');
        this.count = response.data.counter;
      } catch (error) {
        console.error('Fehler beim Erhöhen des Zählers:', error);
      }
    }
  },
  mounted() {
    // Abrufen des initialen Zählerwerts, wenn die Komponente geladen wird
    this.fetchCounter();
  }
}
</script>

<style scoped>
.counter {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
