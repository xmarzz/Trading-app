import dotenv from 'dotenv';
dotenv.config() 

import express from 'express';
import cors from 'cors';
import Connection from './databases/db.js';


const app = express();
const PORT = 8080

app.use(express.json())
app.use(cors())



app.listen(PORT, ()=> console.log(`listening to ${PORT}`)) 

Connection()




