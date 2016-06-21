import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db';
import middleware from './middleware';
import api from './api';
//import https from 'https';
//import fs from 'fs';
const https = require('https');
const fs = require('fs');

var options = {
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem'),
};




var app = express();

// 3rd party middleware
app.use(cors({
	exposedHeaders: ['Link']
}));

// internal middleware
app.use(middleware());

// api router
//this is how you do nested routes or modules
app.use('/api', api());

http.createServer(app).listen(8080);

https.createServer(options, app).listen(8000);

export default app;
