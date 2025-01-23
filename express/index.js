/*

Ciao, sei arrivato alla creazione del backend. Hai scelto di utilizzare MondoDB con Atlas. Vuoi usare Express come backend.
I problemi sono nell'interfacciarsi con il database per i vari problemi
Bisogna ancora scrivere tutta l'integrazione con l'applicativo di svelte.  

*/
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware per il parsing del JSON
app.use(express.json());

// Stringa di connessione a MongoDB Atlas
const dbURI = 'mongodb+srv://admin:admin@memomate.psqxt.mongodb.net/?retryWrites=true&w=majority&appName=MemoMate';

// Connessione a MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connesso a MongoDB Atlas'))
  .catch(err => console.error('Errore di connessione a MongoDB Atlas:', err));

// Definizione di uno schema e modello Mongoose
const itemSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Item = mongoose.model('users', itemSchema);

// Rotte Express
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Avvio del server Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});

// const { MongoClient } = require('mongodb');

// async function main(){
// /**
// * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
// * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
// */
// const uri = "mongodb+srv://admin:admin@atlas-sql-672e36122a1def72a13155bb-psqxt.a.query.mongodb.net/users?ssl=true&authSource=admin;"; 
//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await  listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);


// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const port = 3000;

// // Stringa di connessione a MongoDB Atlas
// const uri = 'mongodb+srv://admin:admin@memomate.psqxt.mongodb.net/?retryWrites=true&w=majority&appName=MemoMate';

// // mongodb+srv://admin:<db_password>@memomate.psqxt.mongodb.net/?retryWrites=true&w=majority&appName=MemoMate
// // Connessione a MongoDB
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch(err => console.error('Error connecting to MongoDB Atlas', err));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
