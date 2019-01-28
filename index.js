const express = require('express');
const app = express();
const contentful = require('contentful');

// TODO: move into environment variable if we need to remove from GitHub
const SPACE_ID = '7yubk7dp5oio';
const ACCESS_TOKEN = '87a9791be0ceec922583ec5f647f2f2660799fabec2b5bd255feaad401ada921';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

// fetch all the entries from a particular content
// type from the contentful api.
const entries =  client.getEntries({
  // id of the `Author` content type
  content_type: "1kUEViTN4EmGiEaaeC6ouY"
});

entries.then((response) => {
  for (element of response.items) {
    const person = { 
      name: element.fields.name,
      bio: element.fields.biography
    };
    console.log("****");
    console.log(person);
  }

})
.catch((error) => {
    console.log(chalk.red(`\nError occurred while fetching Entries for ${chalk.cyan(contentType.name)}:`));
    console.error(error);
});

app.get('/', function (req, res) {
    res.send("Hello World");
});
  
app.listen(3000);