const router = require('express').Router();
let battles = require('../models/battles-model');

router.route('/:name').get((req, res) => {
    battles.find().then((response) => {
        totalBattles = response.map((item) => {
            const { attacker_king, defender_king, name } = item;
            if(attacker_king === req.params.name || defender_king === req.params.name)
                return name;
        }).filter((item) => item);
        res.json(totalBattles.length);
    })
       .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;