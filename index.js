const express = require('express');
const cors = require('cors');
const knex = require('./src/database');



const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// metodo de criação (products)


app.post('/products', async function(req, res){
    const data = req.body

    const products = await knex.insert(data).into('products')
    return res.status(201).json(products)
});


app.listen(port, () => {
    console.log('Server web está ouvindo na port ${port}');
});