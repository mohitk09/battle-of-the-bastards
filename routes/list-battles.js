const router = require('express').Router();
let battles = require('../models/battles-model');

router.route('/').get((req, res) => {
    battles.find().then((response) => {
        locations = response.map(({ location }) => location).filter(item => item);
        res.json(locations);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;