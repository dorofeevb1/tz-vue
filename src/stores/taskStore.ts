import { defineStore } from 'pinia';
import { Task } from '../types/task';

interface State {
  [x: string]: any;
  tasks: Task[];
}

export const useTaskStore = defineStore({

  id: 'taskStore',
  state: (): State => ({
    tasks: [],
  }),
  actions: {
    beforeMount() {
        this.loadTasksFromLocalStorage();
    },

    addTask(task: Task) {
        const exists = this.tasks.some(existingTask => existingTask.id === task.id);
        if (!exists) {
        this.tasks.push(task);
        }
        this.saveTasksToLocalStorage();
    },

    updateTask(this: State, updatedTask: Task) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
        this.saveTasksToLocalStorage(); 
      }
    },
    removeTask(this: State, taskId: number) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.saveTasksToLocalStorage();
    },
    loadTasksFromLocalStorage(this: State) {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
    saveTasksToLocalStorage(this: State) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  },
  
});
