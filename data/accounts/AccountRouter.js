const express = require('express');

const router = express.Router();

const knex = require('../dbConfig');

router.use(express.json());

router.get('/', (req, res) => {
    knex.select('*')
        .from('accounts')
        .then(accounts => {
            res.status(200).json(accounts)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'Error getting accounts' })
        })
})

router.get('/:id', (req, res) => {
    knex.select('*')
        .from('accounts')
        .where({ id: req.params.id })
        .then(accounts => {
            res.status(200).json(accounts)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'Error getting the specific account' })
        })
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;