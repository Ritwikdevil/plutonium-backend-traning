const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ritwikmukherjee:OD2EVF8X47p26tdw@cluster0.tzjat9y.mongodb.net/Ritwikdb?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



//Global middleware
app.use(
    function globalMw(req, res, next) {
        const today = moment();
        let formatted = today.format('YYYY-MM-DD HH:MM:SS' );
        console.log(formatted, ",", req.ip, ",", req.originalUrl);
        next()
    } 

)


 app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
