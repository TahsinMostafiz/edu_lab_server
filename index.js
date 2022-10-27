const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');


app.use(cors());

app.get('/', (rep, res)=>{
    res.send('Edu Lab');
});

app.get('/edu_categories', (req, res) => {
    res.send(categories);
});


app.listen(port, ()=> {
    console.log("Edu Lab Sever Running", port);
});

