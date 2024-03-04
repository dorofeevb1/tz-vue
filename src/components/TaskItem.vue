<template>
    <div>
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <button @click="$emit('edit-task', task)">Edit</button>
      <button @click="$emit('delete-task', task.id)">Delete</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Task } from '../types/task.ts';
  
  export default defineComponent({
    props: {
      task: {
        type: Object as PropType<Task>,
        required: true,
      },
    },
    emits: ['delete-task', 'edit-task']
  });
  </script>
  
<style scoped>
.task-item {
  background-color: #f9f9fa;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.task-item h3 {
  color: #007bff;
  font-size: 20px;
  font-weight: 600;
}

.task-item p {
  color: #495057;
}

button {
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #218838;
}

button:nth-of-type(2) {
  background-color: #dc3545;
}

button:nth-of-type(2):hover {
  background-color: #c82333;
}
input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
</style>
