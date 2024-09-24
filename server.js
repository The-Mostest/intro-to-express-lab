const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
console.log('listening on port')
})



// 1. Be polite, Greet the User

app.get('/greeting/:username', (req,res) => {
    res.send(`Wassup ${req.params.username}`)
})





// 2. Rolling the dice

app.get('/roll/:numberParam', (req,res) => {
    const num = Number(req.params.numberParam)

    if(isNaN(num)){
        return res.send('Thats not a number silly')
    }
    
    const maths = Math.floor(Math.random() * req.params.numberParam);
    return res.send(`You rolled a ${maths}`)
})


// if(!isNaN(req.params.numberParam)){
    //     return res.send(`You rolled a ${req.params.numberParam}`)
    //     }
    
    // res.send('Thats not a number silly!')







    //  3. I want that one
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    

      app.get('/collectibles/:idx', (req, res) => {
       const idx = req.params.idx
       if(collectibles[idx]){
        return res.send(
            `So, you want the ${collectibles[idx].name }? For ${collectibles[idx].price}, it can be yours!`
        )
    } else {
    return res.send('This item aint here chief')}
      })







      // 4. Filter Shoes by Query Parameters (incomplete)
      const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

    app.get('/shoes', (req,res) => {
        const {query: {filter,value}, } = req
            if(!filter && !value){
                return res.send(shoes)
            }
        })