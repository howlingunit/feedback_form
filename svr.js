import express from 'express';

import * as api from './lib/api.js' 

const app = express();

app.get('/get-all', api.getAll)

app.post('/send', express.json(), api.send);

app.use(express.static('static'));

app.listen(8080);
