<template>
    <div>
      <!-- Поисковое поле -->
      <input type="text" v-model="searchQuery" placeholder="Поиск по задачам...">
      
      <TaskForm :initialTask="editableTask" @save-task="handleSave" />
      
      <div v-if="filteredTasks.length > 0">
        <div v-for="task in filteredTasks" :key="task.id">
          <TaskItem :task="task" @edit-task="handleEdit" @delete-task="() => handleDelete(task)" />
        </div>
      </div>
      <div v-else>
        <p>No tasks found.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import TaskForm from '../components/TaskForm.vue';
  import TaskItem from '../components/TaskItem.vue';
  import { useTaskStore } from '../stores/taskStore';
  import { Task } from '../types/task';
  
  export default defineComponent({
    components: { TaskForm, TaskItem },
    setup() {
      const taskStore = useTaskStore();
      const editableTask = ref<Task | null>(null);
      const searchQuery = ref('');
  
      const filteredTasks = computed(() => {
        if (!searchQuery.value.trim()) {
          return taskStore.tasks;
        }
        return taskStore.tasks.filter(task =>
          task.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
  
      const handleSave = (task: Task) => {
        if (!task.id) {
          taskStore.addTask({ ...task, id: Date.now() }); // Добавление новой задачи
        } else {
          taskStore.updateTask(task); // Обновление существующей задачи
        }
        editableTask.value = null;
      };
  
      const handleEdit = (task: Task) => {
        editableTask.value = task;
      };
  
      const handleDelete = (task: Task) => {
        taskStore.removeTask(task.id);
      };
  
      return { searchQuery, filteredTasks, editableTask, handleSave, handleEdit, handleDelete };
    },
  });
  </script>
  