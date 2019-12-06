const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

const sides = 
[
    {'type':'Dark Side', 'img':'./img/darkmaul.jpg' ,'name':'Dark Maul', 'description':'You are ugly and you always have a bad mood'},
    {'type':'Dark Side', 'img':'./img/jabbathehutt.jpg', 'name':'Jabba el Hutt', 'description':'You already have cases against you for abuse of rancor'},
    {'type':'Dark Side', 'img':'./img/darthvader.jpg', 'name':'Darth Vader', 'description':'We told you that motorcycles are dangerous and now look how you look'},
    {'type':'Dark Side', 'img':'./img/palpatine.jpg', 'name':'Darth Sidious', 'description':'I think you need wrinkle cream'},
    {'type':'Dark Side', 'img':'./img/kyloren.jpeg', 'name':'Kylo Ren', 'description':'Hey boy, stop throwing things on the floor'},
    {'type':'Light Side', 'img':'./img/luke.jpeg', 'name':'Luke Skywalker', 'description':'You are so good, you will be alone'},
    {'type':'Light Side', 'img':'./img/yoda.jpg', 'name':'Yoda', 'description':'The only good damn goblin in this world'},
    {'type':'Light Side', 'img':'./img/obi.jpg', 'name':'Obi-Wan Kenobi', 'description':'keep having that patience someday you will win the lottery'},
    {'type':'Light Side', 'img':'./img/Mace_Windu.jpg', 'name':'Mace Windu', 'description':'I dont know why you are here, you are the only one who breaks the rules'},
    {'type':'Light Side', 'img':'./img/c3po.jpeg', 'name':'C-3PO', 'description':'it shows that you know how to dance very well *laughs*'}
]
app.get("/sides", (request, response) => {
    const theSide = request.query.type
    if (theSide) {
      response.json(sides.filter(said => said.type.toLowerCase() === type.toLowerCase()))
    }else{
      response.json(sides)
    }
  })

app.get('/sides/random', (request, response) => {
    response.json(sides[Math.floor(Math.random() * sides.length)])
  })

  const port = process.env.PORT || 8000
  app.listen(
    port,
    () => { console.log(`API listening on port ${port}...`) }
  )