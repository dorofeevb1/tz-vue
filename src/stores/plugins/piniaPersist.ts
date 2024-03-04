import { PiniaPluginContext } from 'pinia';

export const piniaPersist = (context: PiniaPluginContext) => {
  const { store } = context;

  const savedState = localStorage.getItem(store.$id);
  if (savedState) {
    store.$patch(JSON.parse(savedState));
  }

  store.$subscribe((_mutation, state) => {
    console.log("Сохранение состояния", state);
    localStorage.setItem(store.$id, JSON.stringify(state));
  });  
};