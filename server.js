const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
console.log('listening on port')
})

app.get('/greeting/:username', (req,res) => {
    res.send(`Wagwan ${req.params.username}`)
})

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

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    