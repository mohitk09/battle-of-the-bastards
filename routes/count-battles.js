const router = require('express').Router();
let battles = require('../models/battles-model');

router.route('/').get((req, res) => {
    battles.find().then((response) => {
        totalBattles = response.map(({ name }) => name);
        const uniqueBattles = [...new Set(totalBattles)];
        res.json(uniqueBattles.length);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;