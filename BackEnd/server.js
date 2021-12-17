const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

const strConnection = 'mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(strConnection);
}

const musicSchema = new mongoose.Schema({
    Album:String,
    Year:String,
    Poster:String
});

const musicModel = mongoose.model('martindfgdfgdfg', musicSchema);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/music', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Album);
    console.log(req.body.Year);
    console.log(req.body.Poster);

    musicModel.create({
        album:req.body.Album,
        Year:req.body.Year,
        Poster:req.body.Poster
    });
    res.send('Data Sent to Server!')
})

app.get('/api/music/:id',(req, res)=>{
    console.log(req.params.id);

    musicModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

app.delete('/api/music/:id', (req, res)=>{
    console.log('Deleteing : '+req.params.id);

    musicModel.deleteOne({_id:req.params.id},
        (error, data)=>{
            if(error)
                res.send(error)
            res.send(data);
        })
})

app.put('/api/music/:id',(req, res)=>{
    console.log('update');
    console.log(req.body);
    console.log("Updating: " + req.params.id);

    musicModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})



app.get('/api/music', (req, res) => {
    musicModel.find((err, data)=>{
        res.json(data);
    })
          
           // https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg
      
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})