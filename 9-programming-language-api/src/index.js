import express from 'express'; //external module for using express
import pg from 'pg';
import config from './config.js'; // internal module for connecting to our config file
const { Client } = require('pg');
const app = express();
const port = 3000;

app.use(express.json());

const client = new Client(config); //creating our database Client with our config values
 
await client.connect() //connecting to our database


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

await client.end() //ending the connection to our database

//   import express from 'express';
//   import pg from 'pg';
//   import config from './config.js';
  
//   const { Client } = pg;
//   const app = express();
//   const port = 3000;
  
//   app.use(express.json());
  
//   const client = new Client(config);
//   await client.connect(); // Establish database connection
  
//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//   });

// Helper Function to get all languages
async function getAllLanguages(){
    const client = new Client(config)
    await client.connect()
    let result = await client.query('SELECT * FROM programming_languages')
    console.log(result.rows)
    await client.end()
    return result.rows
}

//API ENDPOINT for all languages
app.get("/get-all-languages" , async (req,res) => {
    let languages = await getAllLanguages()
    let JSONLanguages =  JSON.stringify(languages);
    res.send(JSONLanguages);
   
});

async function getOneLanguage (id) {
    const client = new Client(config)
    await client.connect()
    let result = client.query(`SELECT * FROM programming_languages WHERE id = ${id}`)
    await client.end()
    return result.rows
};

app.get("/get-one-language/:id" , async (req,res) => {
    let language = await getOneLanguage(req.params.id)
    let JSONLanguages =  JSON.stringify(language);
    res.send(JSONLanguages);
   
});


app.post("/add-one-language", async (req, res) => {
    await addOneLanguage(req.body)
    res.send('You successfully added a language ')
})

async function addOneLanguage(obj){
    console.log(obj)
    const client = new Client(config)
    await client.connect()
    let result = client.query("INSERT INTO programming_language(id,name,released_year,github_rank, pypl_rank, tiobe_rank) VALUES (17, '${obj.name}', '${obj.githubRank}', '${obj.releasedYear}', '${obj.pyplRank}', '${tiobeRank}') ")
    await client.end()
    return result.rows
}


// Helper function to get all languages sorted by year
async function getAllLanguagesSortedByYear() {
    const client = new Client(config);
    await client.connect();
    let result = await client.query("SELECT * FROM programming_languages ORDER BY released_year ASC");
    await client.end();
    return result.rows;
  }

//  Get all languages sorted by released_year
app.get("/get-all-languages/sort-by-year", async (req, res) => {
   let languages = await getAllLanguagesSortedByYear();
   res.json(languages);
   
});


  
// //   // API endpoint to get all languages sorted by a specified column
 app.get("/get-all-languages/sort-by/:column", async (req, res) => {
   try {
    let languages = await getAllLanguagesSortedByColumn(req.params.column);
     res.json(languages);
   } catch (error) {
     res.status(400).json({ error: error.message });
    }
  });
  
// Helper function to get all languages sorted by a user-specified column
async function getAllLanguagesSortedByColumn(column) {
    const client = new Client(config);
    await client.connect();
    let result = await client.query(`SELECT * FROM programming_languages ORDER BY ${column} ASC`);
    await client.end();
    return result.rows;
  }

// API ENDPOINT to Get all languages sorted by a specified column
app.get("/get-all-languages/sort-by/:column", async (req, res) => {
    let languages = await searchLanguagesByName(req.params.name);
    res.json(languages);
  });
 
 // Helper function to search languages by name
async function searchLanguagesByName(name) {
    const client = new Client(config);
    await client.connect();
    let result = await client.query("SELECT * FROM programming_languages WHERE name ILIKE $1", [`%${name}%`]);
    await client.end();
    return result.rows;
  } 
  
  //  Search languages by name
  app.get("/search-languages-by-name/:name", async (req, res) => {
      const { name } = req.params;
      let languages = await searchLanguagesByName(name);
      res.json(languages);
   
  });







  