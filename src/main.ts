import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { useTaskStore } from './stores/taskStore';


const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const taskStore = useTaskStore();
taskStore.loadTasksFromLocalStorage();

app.use(router);

app.mount('#app');
