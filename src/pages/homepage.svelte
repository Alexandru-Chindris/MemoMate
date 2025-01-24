<Page>
  <Navbar title="{username} {titlePlaceholder}" sliding>
    
    <Button small slot="nav-left" popoverOpen=".popover-menu"><Icon f7="menu"/></Button>
  </Navbar>
  <Popover class="popover-menu" closeByOutsideClick closeOnEscape arrow>
    <List>
      <ListItem popoverClose on:click={homepageLink}  title="{logout}" />
<!--  <ListItem link="/tabs/" popoverClose  title="Tabs" />
      <ListItem link="/panel/" popoverClose title="Side Panels" />
      <ListItem link="/list/" popoverClose title="List View" />
      <ListItem link="/inputs/" popoverClose title="Form Inputs" /> -->
    </List>
  </Popover>
  <Fab position="center-bottom" text="{add}" on:click={formLink}>
    <Icon f7="bag_badge_plus"/>
  </Fab>
  {commitments}
  <!-- Task init -->
      {#each taskList as task (task.name)}
            <div class="block-title block-title-medium">
              {taskName} {task.name}
            </div>
            <div class="block block-strong">
              <p>{taskDescription} {task.description || "No description"}</p>
              <p><Icon f7="alarm_fill" size="20px"/>{taskNotification | "No notification"}</p>
              <div class="grid grid-cols-4 grid-gap">
                <p><Icon f7="trash" size="30px" on:click={()=>removeTask()}/></p>
                <p><Icon f7="gear" size="30px" on:click={()=>removeTask()}/></p>
                <p><Icon f7="tray_arrow_down" size="30px" on:click={() => removeTask()}/></p>
                <p><Icon f7="tbell_slash" size="30px" on:click={() => removeTask()}/></p>
              </div>
            </div>
      {/each}
  <!-- Task template end -->
</Page>
<script>
  import '../css/login.css';
  // Value of currentUser
  import {currentUser, userTasks } from '/js/store.js'; // Import degli store
  import {currentLanguage} from '/js/store.js'; // v0.3 Reactive language
  import {f7,Popover,Button, Navbar, Page, Fab, FabButton, FabButtons, Icon, BlockTitle, Link, AccordionContent, Block, ListItem, List, SwipeoutActions, SwipeoutButton} from 'framework7-svelte';
  
  const texts={
    it: {
      add: "Aggiungi",
      logout: "Esci",
      titlePlaceholder: "ecco i tuoi Impegni",
      commitments: "Impegni",
      taskName: "Nome:",
      taskDescription: "Descrizione:",
      taskNotification: "Notifica:"
    },
    es: {
      add: "Agregar",
      logout: "Salida",
      titlePlaceholder: "Estos son sus compromisos",
      commitments: "Compromisos",
      taskName: "Nombre:",
      taskDescription: "Descripción:",
      taskNotification: "Notificación:"
    },
    en:{
      add: "Add",
      logout: "Logout",
      titlePlaceholder: "here are your commitments",
      commitments: "Commitments",
      taskName: "Name:",
      taskDescription: "Description:",
      taskNotification: "Notification:"
    },
    ro:{
      add: "Adăuga",
      logout: "Deconectare",
      titlePlaceholder: "Iată angajamentele tale",
      commitments: "Angajamentele",
      taskName: "Nume:",
      taskDescription: "Descriere:",
      taskNotification: "Notificare:"
    }
  }

  let add = texts[$currentLanguage].add;
  let logout = texts[$currentLanguage].logout;
  let titlePlaceholder = texts[$currentLanguage].titlePlaceholder;
  let commitments = texts[$currentLanguage].commitments;
  let taskName = texts[$currentLanguage].taskName;
  let taskDescription = texts[$currentLanguage].taskDescription;
  let taskNotification = texts[$currentLanguage].taskNotification;
  
  let username;
  let taskList = [];
  // Assign of username to username
  const unsubscribe = currentUser.subscribe(value => {
    username = value;
  });

function homepageLink(){
  f7.views.main.router.navigate('/');
}

function formLink(){
  f7.views.main.router.navigate('/form/');
}

// v0.4 Task removal
function removeTask(){
  console.log("Task removed");
}

  // Object destruction for 2nd iteration
  import { onDestroy } from 'svelte';
  onDestroy(() => {
    unsubscribe();
    unsubscribeTasks();
  });

  // Sottoscrizione agli impegni dell'utente corrente
  const unsubscribeTasks = userTasks.subscribe(tasks => {
    if (username) {
      taskList = tasks[username] || [];
    }
  });
</script>