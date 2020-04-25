const router = require('express').Router();
let battles = require('../models/battles-model');

router.route('/').get((req, res) => {
    battles.find().then((response) => {
        locations = response.map(({ location }) => location);
        res.json(locations);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/count').get((req, res) => {
    battles.find().then((response) => {
        totalBattles = response.map(({ name }) => name);
        const uniqueBattles = [...new Set(totalBattles)];
        console.log('uniqueBattles', uniqueBattles.length);
        res.json(uniqueBattles.length);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    battles.findById(req.params.id)
    .then(battles => res.json(battles))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;