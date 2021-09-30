const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00.noc4w.mongodb.net:27017,omnistack-shard-00-01.noc4w.mongodb.net:27017,omnistack-shard-00-02.noc4w.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-wumwv5-shard-0&authSource=admin&retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * req.query = acessar query params  para filtros
 * req.params = acessar route params para edicao, delete
 * req.body = acessar corpo da requisicao para criacao, edicao
 */

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(process.env.PORT || 3333);