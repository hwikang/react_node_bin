const express= require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello',(req,res)=>{
    res.send({message:"hello express!"})
})

app.get('/api/customer',(req,res)=>{
    res.send([
        {
            'id':'khdrogba',
            'name':'hwiba',
            'gender':'male',
            'image' : 'https://placeimg.com/64/64/1'
        },{
            'id':'ahdrogba',
            'name':'kwiba',
            'gender':'male',
            'image' : 'https://placeimg.com/64/64/2'
        },{
            'id':'dhdrogba',
            'name':'bwiba',
            'gender':'female',
            'image' : 'https://placeimg.com/64/64/3'
        }
    ])
})



app.listen(port,()=>console.log(`listening on port ${port}`))