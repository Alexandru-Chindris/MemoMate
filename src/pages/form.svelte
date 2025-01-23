<Page>
    <Navbar title="Aggiunta impegno" />
    <List strongIos outlineIos dividersIos form formStoreData id="demo-form">
        <ListInput
        label="Titolo"
        name="name"
        type="text"
        clearButton
        placeholder="Inserisci il titolo del tuo impegno"
        bind:value={formData.name}
      />
      <ListInput
        label="Descrizione"
        type="textarea"
        resizable
        placeholder="Descrivimi l'attività che dovrò ricordarti!"
        bind:value={formData.description}
      />
      <ListInput
        label="Notifica"
        name="date"
        type="datetime-local"
        placeholder="Quando devo ricordartelo?"
        bind:value={formData.date}
      />
    </List>
      <Block>
        <Button fill round onClick={saveData}>Aggiungi</Button>
      </Block>
</Page>

<script>
  import { f7, Navbar, Page, List, ListInput, Button, Block, Link} from 'framework7-svelte';
  import { addTaskForCurrentUser } from '/js/store.js'; // Import della funzione per aggiungere un impegno

    //Reactive translation
    const texts={
      it:{
        addingTask: "Aggiunta impegno",
        taskTitle: "Titolo",
        taskTitlePlaceholder: "Inserisci il titolo del tuo impegno",
        taskDescription: "Descrizione",
        taskDescriptionPlaceholder: "Descrivimi l'attività che dovrò ricordarti!",
        taskDate: "Notifica",
        taskDatePlaceholder: "Quando devo ricordartelo?",
        taskBtn: "Aggiungi",
        taskError: "Errore",
        taskNotificationTime: "ora",
        taskNotificationSubtitle: "Il tuo impegno deve avere un nome ed una descrizione!",
        taskNotificationText: "Clicca per chiudere"
      },
      en:{
        addingTask: "Add Activity",
        taskTitle: "Title",
        taskTitlePlaceholder: "Enter the title of your engagement",
        taskDescription: "Description",
        taskDescriptionPlaceholder: "Describe the activity I will have to remind you!",
        taskDate: "Notification",
        taskDatePlaceholder: "When should I remind you?",
        taskBtn: "Add",
        taskError: "Error",
        taskNotificationTime: "now",
        taskNotificationSubtitle: "Your commitment must have a name and a description!",
        taskNotificationText: "Click to close"
      },
      es:{
        addingTask: "Agregar actividad",
        taskTitle: "Título",
        taskTitlePlaceholder: "Ingresa el título de tu compromiso",
        taskDescription: "Descripción",
        taskDescriptionPlaceholder: "Describe la actividad que tendré que recordarte!",
        taskDate: "Notificación",
        taskDatePlaceholder: "Cuándo debo recordártelo?",
        taskBtn: "Agregar",
        taskError: "Error",
        taskNotificationTime: "Ahora",
        taskNotificationSubtitle: "Tu compromiso debe tener un nombre y una descripción!",
        taskNotificationText: "Haga clic para cerrar"
      },
      ro:{
        addingTask: "Adăugați activitate",
        taskTitle: "Titlu",
        taskTitlePlaceholder: "Introduceți titlul angajamentului dvs.",
        taskDescription: "Descriere",
        taskDescriptionPlaceholder: "Descrie activitatea pe care va trebui să ți-o reamintesc!",
        taskDate: "Notificare",
        taskDatePlaceholder: "Când ar trebui să vă reamintesc?",
        taskBtn: "Adăuga",
        taskError: "Eroare",
        taskNotificationTime: "acum",
        taskNotificationSubtitle: "Logodna ta ar trebui să aibă un nume și o descriere!",
        taskNotificationText: "Click pentru a închide"
      }
    }



    // Reactive form data object
    let formData = {
        name: '',
        description: '',
        date: ''
    };

    // Force form data reset
    f7.form.fillFromData('#demo-form', formData);

    let notificationCloseOnClick;

    function showNotificationCloseOnClick() {
      // Create notification
      if (!notificationCloseOnClick) {
        notificationCloseOnClick = f7.notification.create({
          icon: '<i class="icon icon-f7"></i>',
          title: 'Errore',
          titleRightText: 'ora',
          subtitle: 'Il tuo impegno deve avere un nome ed una descrizione!',
          text: 'Clicca per chiudere',
          closeOnClick: true,
        });
      }
      notificationCloseOnClick.open();
    }

    // Funzione per salvare i dati nello store
    function saveData() {
        if(formData.name == '' && formData.description == ''){
          // Error notification
          showNotificationCloseOnClick();

        }else{
          // Saving current data form to user
          addTaskForCurrentUser({ ...formData });

          // Moving user in case of succesful add
          f7.views.main.router.navigate('/homepage/');
        }
    }
</script>