const router = require('express').Router();
let Application = require('../models/applicationModel');

router.route('/').get((req, res) => {
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
        .then(() => res.json('Application added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Application.findById(req.params.id)
        .then(application => res.json(application))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route('/:id').delete((req,res) => {
    Application.findByIdAndDelete(req.params.id)
        .then(() => res.json('Application deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').post((req, res) => {
    Application.findById(req.params.id)
        .then(application => {
            application.company = req.body.company
            application.position = req.body.position
            application.date = Date(req.body.date)
            application.status = req.body.status

            application.save()
                .then(() => res.json("Exercise updates!"))
                .catch(err => res.status(400).json("Error: " + err))
        })
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;