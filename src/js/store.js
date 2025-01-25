
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
  // Not planning to include database in future realese, this project is not aiming to backend managment.
];

// Current user logged in.
export const currentUser = writable(null);

// Saving data based on every user
export const userTasks = writable({});

export function addTaskForCurrentUser(task) {
  currentUser.subscribe(username => {
    if (username) {
      userTasks.update(tasks => {
        // Empty array for non user task
        if (!tasks[username]) {
          tasks[username] = [];
        }
        // new user task
        tasks[username].push(task);
        return tasks;
      });
    }
  })();
}

export function removeTaskForCurrentUser(taskName) {
  currentUser.subscribe(username => {
    if (username) {
      userTasks.update(tasks => {
        if (tasks[username]) {
          tasks[username] = tasks[username].filter(task => task.name !== taskName);
        }
        return tasks;
      });
    }
  })();
}

// Function to get user task
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
