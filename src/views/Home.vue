<template>
    <div>
      <h1>Welcome to Task Manager</h1>
      <router-link to="/tasks">View Tasks</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Home',
  });
  </script>
  <style scoped>
  div {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    color: #007bff;
    margin-bottom: 20px;
  }
  
  a {
    display: inline-block;
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
  }
  
  a:hover {
    background-color: #218838;
  }
  </style>
  