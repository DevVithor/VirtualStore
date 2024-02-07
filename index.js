const express = require('express');
const cors = require('cors');
const knex = require('./src/database');



const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

// metodo de criação (products)

// rotas da aplicação

app.post('/products', async function(req, res){
    const data = req.body

    const products = await knex.insert(data, { includeTriggerModificatios: true}).into('products')
    return res.status(201).json(products)
});

app.get('/products', async function(req, res){

    const products = await knex('products')
    return res.status(200).json(products)
});

app.get('/product/:id', async function(req, res){
    const id = req.params.id

    const product = await knex('products').where({id})
    return res.status(200).json(product)

});

app.delete('/products/:id', async function(req, res){
    const id = req.params.id

    const product = await knex('products').where({id}).delete()
    return res.status(200).json(product)
});

app.put('/products/:id', async function(req, res){
    const id = req.params.id;

    const product = await knex('products')
    .where({ id })
    .update({
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        price: req.body.price,
    });

    return res.status(200).json(product)
});

// app.get('/', function(req, res){
//    return res.status().json()
// });


app.listen(port, () => {
    console.log(`Server web está ouvindo na port ${port}`);
});