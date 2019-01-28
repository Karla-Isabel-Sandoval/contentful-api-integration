var express = require('express');
var app = express();
const contentful = require('contentful');

const SPACE_ID = '7yubk7dp5oio'
const ACCESS_TOKEN = '87a9791be0ceec922583ec5f647f2f2660799fabec2b5bd255feaad401ada921'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

const entries =  client.getEntries({
  content_type: "1kUEViTN4EmGiEaaeC6ouY"
});

// console.log(entries);
entries.then((response) => {

//  console.log(response);

  // const items = response.items;
  // const name = items[0].fields.name;
  // console.log(name);


  // const bio = items[0].fields.biography;
  // console.log(bio);

  // const person = { 
  //   name: response.items[0].fields.name,
  //   bio: response.items[0].fields.biography
  // };

  
  // response.items.each((item) => {
  //   console.log("****");
  //   console.log(item);
  // });

  const firstItem = response.items[0];
  const person = { 
    name: firstItem.fields.name,
    bio: firstItem.fields.biography
  };


  for (item of response.items) {
    const person = { 
      name: response.items[0].fields.name,
      bio: response.items[0].fields.biography
    };
    console.log("****");
    console.log(person);
  }






  // for (variable in object) {
  //   statements
  // }






  // const authors = response.items.map((item) => {
  //   return { name: item.fields.name, 
  //     bio: item.fields.biography
  //   }
  // });
  // console.log(authors);


})
.catch((error) => {
console.log(chalk.red(`\nError occurred while fetching Entries for ${chalk.cyan(contentType.name)}:`))
console.error(error)
});

app.get('/', function (req, res) {
    res.send("Hello World");
});
  
app.listen(3000);