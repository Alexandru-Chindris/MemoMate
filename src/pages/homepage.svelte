<Page>
  <Navbar title="{username} ecco i tuoi Impegni" backLink="Logout"></Navbar>
  <Fab position="right-bottom">
    <Icon f7="bag_badge_plus"/>
    <FabButtons position="top">
      <FabButton label="Aggiungi"><Link href="/form/">+</Link></FabButton>
    </FabButtons>
  </Fab>
<!--   VA TRADOTTA TUTTA IN MODO DINAMICO, SALVARE LA SCELTA UTENTE DELLA LINGUA E ASSOCIARLA AL DEFAULT ALLO START DELLA APPLIAZIONE-->
   <!-- AGGIUNTA SWIPEOUT, decorazioni task e implemetazione sistema notifiche  --> 
  <BlockTitle>Impegni</BlockTitle>
  <!-- Task init -->
  <List strong outlineIos dividersIos insetMd accordionList>
    {#each taskList as task (task.name)}
      <ListItem accordionItem title={task.name}>
        <AccordionContent>
          <Block>
            <p><strong>Nome:</strong> {task.name}</p>
            <p><strong>Descrizione:</strong> {task.description}</p>
            <p><strong><i class="alarm_fill"></i>Notifica:</strong> {task.date}</p>
          </Block>
        </AccordionContent>
      </ListItem>
    {/each}
  </List>
</Page>
<script>
  // Value of currentUser
  import {currentUser, userTasks } from '/js/store.js'; // Import degli store

  import {Navbar, Page, Fab, FabButton, FabButtons, Icon, BlockTitle, Link, AccordionContent, Block, ListItem, List} from 'framework7-svelte';
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