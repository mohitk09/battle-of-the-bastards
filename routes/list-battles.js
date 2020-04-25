const router = require('express').Router();
let battles = require('../models/battles-model');

router.route('/').get((req, res) => {
    battles.find({}, 'name region year attacker_king defender_king').then((response) => {
        res.json(response);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;