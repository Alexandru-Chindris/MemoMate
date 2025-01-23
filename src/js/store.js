
import { createStore } from 'framework7/lite';
import { writable } from 'svelte/store';

const store = createStore({
  state: {

  },
  getters: {

  },
  actions: {

  },
})

export const validCredentials = [
  {
    username: 'Admin',
    password: 'admin'
  },
  {
    username: 'Alex',
    password: 'alex'
  },
  {
    username: 'Ludovica',
    password: 'amore'
  }
  // Including Express in future release
];

// Current user logged in.
export const currentUser = writable(null);

// Store per gli impegni, separati per utente
export const userTasks = writable({}); // Oggetto che associa username -> lista di impegni

// Funzione per aggiungere un impegno per l'utente corrente
export function addTaskForCurrentUser(task) {
  currentUser.subscribe(username => {
    if (username) {
      userTasks.update(tasks => {
        // Se non ci sono impegni per l'utente, inizializziamo un array vuoto
        if (!tasks[username]) {
          tasks[username] = [];
        }
        // Aggiungiamo il nuovo impegno
        tasks[username].push(task);
        return tasks;
      });
    }
  })();
}

// Funzione per ottenere gli impegni dell'utente corrente
export function getTasksForCurrentUser() {
  let userTasksForCurrentUser = [];
  currentUser.subscribe(username => {
    if (username) {
      userTasks.subscribe(tasks => {
        userTasksForCurrentUser = tasks[username] || [];
      })();
    }
  })();
  return userTasksForCurrentUser;
}

// v0.3 - Reactive export for the variable 
export let currentLanguage = writable('en');

// Default store export.
export default store;
