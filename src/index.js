const express = require('express');
const handleBars = require('hbs');
const path = require('path');
const Insert = require('./models/todo');


require('./db/dbconn');

const PORT = process.env.port || 3000;

const staticPath = path.join(__dirname, "../public");

const viewsPath = path.join(__dirname, "../templates/views");

const app = express();
// console.log(staticPath);


app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(staticPath));

app.set('view engine', "hbs");
app.set('views', viewsPath);

app.get('/', (req, res) => {
    Insert.find()
        .then((data) => res.render("index", {
            todos: data
        }))
        .catch((err) => res.status(500).json(`${err}`));
});

app.post('/', async (req, res) => {
    const saveData = new Insert({
        title: req.body.textarea
    });
    const result = await saveData.save();

    res.redirect("/");
    
});

app.get("/delete", async (req,res)=>{
    const { id } = req.query;
    console.log(id);
    const result = await Insert.deleteOne( { _id : id},function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.redirect("/");


        }
    });
   
});

app.listen(PORT, () => { console.log(`Running on port ${PORT}`) });