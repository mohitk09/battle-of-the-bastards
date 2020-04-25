const router = require('express').Router();
let battles = require('../models/battles-model');

router.route('/').get((req, res) => {
    battles.find({}, 'name location year region battle_type').then((response) => {
        res.json(response);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;