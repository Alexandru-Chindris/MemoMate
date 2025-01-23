<Page>
  <Navbar title="{username} {titlePlaceholder}" backLink="{logout}"></Navbar>
  <Fab position="right-bottom">
    <Icon f7="bag_badge_plus"/>
    <FabButtons position="top">
      <FabButton label='{add}'><Link href="/form/">+</Link></FabButton>
    </FabButtons>
  </Fab>
  <BlockTitle>{commitments}</BlockTitle>
  <!-- Task init -->
  <List strong outlineIos dividersIos insetMd accordionList>
    {#each taskList as task (task.name)}
      <ListItem accordionItem title={task.name}>
        <AccordionContent>
          <Block>
            <p><strong>{taskName}</strong> {task.name}</p>
            <p><strong>{taskDescription}</strong> {task.description}</p>
            <p><strong><i class="alarm_fill"></i>{taskNotification}</strong> {task.date}</p>
          </Block>
        </AccordionContent>
      </ListItem>
    {/each}
  </List>
  <!-- Task template end -->
</Page>
<script>
  // Value of currentUser
  import {currentUser, userTasks } from '/js/store.js'; // Import degli store
  import { currentLanguage } from '/js/store.js'; // v0.3 Reactive language
  import {Navbar, Page, Fab, FabButton, FabButtons, Icon, BlockTitle, Link, AccordionContent, Block, ListItem, List} from 'framework7-svelte';
  
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