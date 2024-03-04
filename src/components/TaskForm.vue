<template>
    <form @submit.prevent="submitTask">
      <div>
        <label for="title">Title</label>
        <input v-model="task.title" type="text" id="title" required>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea v-model="task.description" id="description"></textarea>
      </div>
      <button type="submit">Save Task</button>
    </form>
  </template>
  
  <script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue';
import { Task } from '../types/task.ts';

export default defineComponent({
  props: {
    initialTask: {
      type: Object as PropType<Task>,
      default: () => ({ id: null, title: '', description: '' })
    }
  },
  emits: ['save-task'],
  setup(props, { emit }) {
    const task = ref<Task>({ ...props.initialTask });

    watch(() => props.initialTask, (newVal) => {
      task.value = { ...newVal };
    });

    const submitTask = () => {
      emit('save-task', { ...task.value });
      task.value = { id: null, title: '', description: '' }; 
    };

    return { task, submitTask };
  },
});
</script>  
  
<style scoped>
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #495057;
  font-size: 16px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  font-size: 16px;
  color: #495057;
}

button {
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>
