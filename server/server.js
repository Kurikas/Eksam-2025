import {api} from "./api.js";
import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('../public'))

app.listen(port);
app.use(express.static("../client/dist"));          

app.use(express.json());


app.use(api);
    
console.log(`Server started and running on address http://localhost:${port}`);