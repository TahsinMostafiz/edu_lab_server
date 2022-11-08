const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');
const courses = require('./Data/courses.json');


app.use(cors());

app.get('/', (rep, res)=>{
    res.send('Edu Lab');
});

app.get('/edu_categories', (req, res) => {
    res.send(categories);
});
app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/category/:id', (req, res)=> {
    const id = req.params.id;

    if(id == '08'){
        res.send(courses);
    }else{
        
        const selectedCategory = courses.filter(course => course.category_id === id);
        res.send(selectedCategory);
    }
});

app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
});

app.get('/checkout/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
});


app.listen(port, ()=> {
    console.log("Edu Lab Sever Running", port);
});

