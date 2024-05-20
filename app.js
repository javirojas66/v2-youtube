const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// app.get('/', function (req,res) {
//     res.send('Hola mundo!');
// });

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function() {
    console.log('escuchando desde el puerto', app.get('puerto'));
})