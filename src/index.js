const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const mongoose =require('mongoose')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://ritwikmukherjee:OD2EVF8X47p26tdw@cluster0.tzjat9y.mongodb.net/Ritwikdb?retryWrites=true&w=majority"
,{
    useNewUrlParser: true,
}
).then( ()=> {console.log( "MongoDb is connected" )} )
.catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});