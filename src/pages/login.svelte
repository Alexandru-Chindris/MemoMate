
<script>
  export let f7router;
  // Valid user database and current user import
  import {validCredentials, currentUser} from '/js/store.js';
  import '../css/homepage.css';
  import { currentLanguage } from '/js/store.js';
  import {
    f7,
    Page,
    LoginScreen,
    ListInput,
    List,
    Block,
    Button,
    LoginScreenTitle,
    BlockFooter,
    ListButton,
    Sheet,
    PageContent,
    BlockTitle,
    Popover,
    ListItem,
  } from 'framework7-svelte';
  
  // Responsive language settings for motivational text
  const texts = {
    it: {
      plan: "Pianifica",
      act: "Agisci",
      achieve: "Realizza",
      language: "Seleziona la tua lingua",
      login: "Accedi",
      user: "Utente",
      pass: "Password",
      userPlaceholder: "Inserisci il tuo nome utente",
      passPlaceholder: "Inserisci la tua password",
      help: "Hai bisogno di una mano?",
      helpText: "Ehi! Per iniziare a usare questa applicazione,ti serviranno delle credenziali valide. Non preoccuparti, basta chiedere al creatore. Questo progetto è stato realizzato con tanta passione per mettere in pratica nuove competenze e imparare cose sempre più interessanti.Questa applicazione è disponibile sia per Android che per iOS",
      issueUsername: "Il campo 'Utente' non può rimanere vuoto",
      issuePassword: "Il campo 'Password' non può rimanere vuoto",
      invalidLogin: "Username o password non corretti",
      correctLogin: "Ti sei autenticato correttamente",
      contacts: "Contattami!"
    },
    en: {
      plan: "Plan",
      act: "Act",
      achieve: "Achieve",
      language: "Choose your language",
      login: "Login",
      user: "Username",
      pass: "Password",
      userPlaceholder: "Enter yourt username",
      passPlaceholder: "Enter your password",
      help: "Need a help?",
      helpText: "Hey! To start using this application, you will need valid credentials. Don't worry, just ask the creator. This project was carried out with a lot of passion to put into practice new skills and learn more and more interesting things. This app is available for both Android and iOS",
      issueUsername: "The 'Username' field cannot be empty",
      issuePassword: "The 'Password' field cannot be empty",
      invalidLogin: "Username or password is incorrect",
      correctLogin: "You have successfully logged in",
      contacts: "Contact me!"
    },
    es: {
      plan: "Planifica",
      act: "Actúa",
      achieve: "Logra",
      language: "Selecciona tu idioma",
      login: "Inicia sesión",
      user: "Usuario",
      pass: "Contraseña",
      userPlaceholder: "Ingresa tu nombre d e usuario",
      passPlaceholder: "Ingresa tu contraseña",
      help: "Necesitas una mano?",
      helpText: "¡Eh! Para comenzar a usar esta aplicación, necesitará credenciales válidas. No te preocupes, pregúntale al creador. Este proyecto se llevó a cabo con mucha pasión para poner en práctica nuevas habilidades y aprender cosas cada vez más interesantes. Esta aplicación está disponible tanto para Android como para iOS",
      issueUsername: "El campo 'Usuario' no puede estar vacío",
      issuePassword: "El campo 'Contraseña' no puede estar vacío",
      invalidLogin: "El nombre de usuario o la contraseña son incorrectos",
      correctLogin: "Has iniciado sesión correctamente",
      contacts: "Contactame"
    },
    ro: {
      plan: "Planifică",
      act: "Acționează",
      achieve: "Realizează",
      language: "Selectați limba",
      login: "Conectează-te",
      user: "Nume de utilizator",
      pass: "Parolă",
      userPlaceholder: "Introduceți numele de utilizator",
      passPlaceholder: "Introduceți parola",
      help: "Ai nevoie de ajutor?",
      helpText: "Hei! Pentru a începe să utilizați această aplicație, veți avea nevoie de acreditări valide. Nu vă faceți griji, întrebați-l pe creator. Acest proiect a fost realizat cu multă pasiune pentru a pune în practică noi abilități și a învăța din ce în ce mai multe lucruri interesante. Această aplicație este disponibilă atât pentru Android, cât și pentru iOS",
      issueUsername: "Câmpul 'Utilizator' nu poate fi gol",
      issuePassword: "Câmpul 'Parolă' nu poate fi gol",
      invalidLogin: "Numele de utilizator sau parola sunt incorecte",
      correctLogin: "Te-ai autentificat cu succes",
      contacts: "Contactează-mă"
    }
  };

  // Default language
  //let currentLanguage = "it"; //removed in 0.3 for dynamic store save

  function changeLanguage(lang) {
    if (lang === "it") $currentLanguage='it';
    if (lang === "en") $currentLanguage='en';
    if (lang === "es") $currentLanguage='es';
    if (lang === "ro") $currentLanguage='ro';

    plan = texts[$currentLanguage].plan;
    act = texts[$currentLanguage].act;
    achieve = texts[$currentLanguage].achieve;
    language= texts[$currentLanguage].language;
    login= texts[$currentLanguage].login;
    user= texts[$currentLanguage].user;
    pass= texts[$currentLanguage].pass;
    userPlaceholder= texts[$currentLanguage].userPlaceholder;
    passPlaceholder= texts[$currentLanguage].passPlaceholder;
    help= texts[$currentLanguage].help;
    helpText= texts[$currentLanguage].helpText;
    issueUsername= texts[$currentLanguage].issueUsername;
    issuePassword= texts[$currentLanguage].issuePassword;
    invalidLogin= texts[$currentLanguage].invalidLogin;
    correctLogin= texts[$currentLanguage].correctLogin;
    contacts= texts[$currentLanguage].contacts;
  }

  let plan = texts[$currentLanguage].plan;
  let act = texts[$currentLanguage].act;
  let achieve = texts[$currentLanguage].achieve;
  let language = texts[$currentLanguage].language;
  let login = texts[$currentLanguage].login;
  let user = texts[$currentLanguage].user;
  let pass = texts[$currentLanguage].pass;
  let userPlaceholder = texts[$currentLanguage].userPlaceholder;
  let passPlaceholder = texts[$currentLanguage].passPlaceholder;
  let help = texts[$currentLanguage].help;
  let helpText= texts[$currentLanguage].helpText;
  let issueUsername= texts[$currentLanguage].issueUsername;
  let issuePassword= texts[$currentLanguage].issuePassword;
  let invalidLogin= texts[$currentLanguage].invalidLogin;
  let correctLogin= texts[$currentLanguage].correctLogin;
  let contacts= texts[$currentLanguage].contacts;

  $: login_first = login.charAt(0);
  $: login_cont = login.slice(1);
  // Responsive language end

  // Loading animation for button init
  let isLoading2 = false;

  const load2 = () => {
    if (isLoading2) return;
    isLoading2 = true;
    setTimeout(() => {
      isLoading2 = false;
    }, 4000);
  };
  // Loading end

  // Authentication init
  let loginScreenOpened = false;
  let username = '';
  let password = '';


  function signIn() {
    if (username === '') {
      f7.dialog.alert(issueUsername);
    } else if (password === '') {
      f7.dialog.alert(issuePassword);
    }else if (checkCredentials(username,password)) {
      // User assign to CurrentUser, useful for UX
      if (true) {
        currentUser.set(username);
      }

      // Useful alert for authentication.
      f7.dialog.alert(correctLogin , () => {
        if(username == 'Ludovica' ){ // 0.5 custom route for special user
          f7.loginScreen.close();
          f7.dialog.close();
          f7router.navigate('/ludohomepage/');
        }else{
          f7.loginScreen.close();
          f7.dialog.close();
          f7router.navigate('/homepage/');
        }
      });
    } else {
      f7.dialog.alert(invalidLogin);
      //username = ''; Removed textbox cleaner
      //password = ''; Removed textbox cleaner
    }
  }

  function checkCredentials(inputUsername, inputPassword) {
    for (let user of validCredentials) {
      if (user.username === inputUsername && user.password === inputPassword) {
        return true;
      }
    }
    return false;
  }
  // Authentication end
</script>

<Page>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <Block>
    <div class="container">
      <video autoplay muted loop class="background-video">
        <source src="/images-ux/background_video.mp4" type="video/mp4">
        Il tuo browser non supporta i video HTML5.
      </video>
      <span class="sp12vh"/>
      <span class="logo-image-wide"/>
      <span class="poppins-bold motStyle">
        {plan},<br>
        {act},<br>
        {achieve}.<br>
      </span>
      <span class="sp4vh"/>
      <span class="langStyle">
        {language}
      </span>
      <div class="flagContainer">
        <span class="flag it" on:click={() => changeLanguage('it')}/>
        <span class="flag en" on:click={() => changeLanguage('en')}/>
        <span class="flag es" on:click={() => changeLanguage('es')}/>
        <span class="flag ro" on:click={() => changeLanguage('ro')}/>
      </div>
      <span class="footer-login"/>
      <span class="sp12vh"/>
      <Button round preloader loading={isLoading2} onClick={load2} large fill loginScreenOpen=".demo-login-screen">{login_first}<p style="text-transform: lowercase;"  class="btnStyle">{login_cont}</p></Button>
    </div>
  </Block>
  <LoginScreen
    class="demo-login-screen"
    opened={loginScreenOpened}
    onLoginScreenClosed={() => {
      loginScreenOpened = false;
      console.log('foobar');
    }}>
    <Page loginScreen>
      <LoginScreenTitle>MemoMate</LoginScreenTitle>
      <List form>
        <ListInput
          label={user}
          type="text"
          placeholder={userPlaceholder}
          value={username}
          onInput={(e) => (username = e.target.value)}
        />
        <ListInput
          label={pass}
          type="password"
          placeholder={passPlaceholder}
          value={password}
          onInput={(e) => (password = e.target.value)}
        />
      </List>
      <List inset>
        <ListButton onClick={signIn}>{login}</ListButton>
      </List>
      <BlockFooter>
        <Button sheetOpen=".demo-sheet-swipe-to-close">{help}</Button>
        <Sheet class="demo-sheet-swipe-to-close" style="height: auto" swipeToClose push backdrop>
          <div class="swipe-handler" />
      
          <PageContent>
            <BlockTitle large>{help}</BlockTitle>
            <Block>
              <p>
                {helpText}
              </p>
              <p>
                <Button fill popoverOpen=".popover-menu">{contacts}</Button>
              </p>
              <Popover class="popover-menu">
                <List>
                  <ListItem popoverClose>
                    <a href="https://github.com/Alexandru-Chindris" target="_blank" rel="noopener noreferrer" class="link external">
                      Github
                    </a>
                  </ListItem>
                  <ListItem popoverClose>
                    <a href="https://www.linkedin.com/in/alexandru-chindris-6a8780213?original_referer=" target="_blank" rel="noopener noreferrer" class="link external">
                      Linkedin
                    </a>
                  </ListItem>
                </List>
              </Popover>
            </Block>
          </PageContent>
        </Sheet>
      </BlockFooter>
    </Page>
  </LoginScreen>
</Page>