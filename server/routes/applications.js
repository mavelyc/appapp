const router = require('express').Router();
let Application = require('../models/applicationModel');

router.route('/').get((res, req) => {
    Application.find()
        .then(applications => res.json(applications))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const company = req.body.company;
    const position = req.body.position;
    const date = Date(req.body.date);
    const status = req.body.status;

    const newApplication = new Application({
        company,
        position,
        date,
        status
    });

    newApplication.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;