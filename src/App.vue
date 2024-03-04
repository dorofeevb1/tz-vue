<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/tasks">Tasks</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>

html, body, #app {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

header {
  background-color: #007bff;
  color: #ffffff;
  padding: 1rem;
}

header nav a {
  color: #ffffff;
  text-decoration: none;
  margin: 0 1rem;
}

header nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  padding: 1rem;
}

button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-group {
  margin-bottom: 1rem;
}
</style>

