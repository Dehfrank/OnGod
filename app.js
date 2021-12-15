const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.get('/' , (req, res)=> {
    res.send('Hello Awura');
})

app.post("/user", (req, res) => {
    res.send({name: "john"});
})

app.listen(port, ()=>{
    console.log('app running on port ' + port)

})