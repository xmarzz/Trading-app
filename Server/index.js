import dotenv from 'dotenv';
dotenv.config() 

import express, { Router } from 'express';
import cors from 'cors';
import Connection from './databases/db.js';
import bodyParser from 'body-parser';


const app = express();
const PORT = 8080

app.use(cors())
app.use(express.json())
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Router)

app.listen(PORT, ()=> console.log(`listening to ${PORT}`))

Connection()


