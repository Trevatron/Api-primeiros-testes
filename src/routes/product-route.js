'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/', controller.post);

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id, 
        item: req.body
        //status mais usados 201 - created , 400 - bad request, 401 não autenticado , 403 acesso negado , 500 internal server error.
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
  
    });

    module.exports = router;