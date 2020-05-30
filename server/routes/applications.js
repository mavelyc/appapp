const router = require('express').Router();
const {User, Application} = require('../models/applicationModel')

router.route('/:user').get((req, res) => {
    User.findOne({user: req.params.user},)
        .then(applications => res.json(applications))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const company = req.body.company;
    const position = req.body.position;
    const date = Date(req.body.date);
    const status = req.body.status;


    const application = {
        company,
        position,
        date,
        status
    }   

    User.findOneAndUpdate({user: req.body.user}, { $push: {apps: application}})
        .then(() => res.json("JS is so sick"))
        .catch(err => "Error: " + err)
});

// router.route('/:id').post((req,res) => {

//     User.findOne({user: req.body.user})
//         .then(applications => {

            // applications.apps.pull(id)
            // applications.save()
            //     .then(() => res.json("Deleted"))
            //     .catch(err => res.json("Nah styll"))
//             res.json(applications)
//         })
//         .catch(err => "Error: " + err)
// })

router.route('/:id').delete((req, res) => { //delete job app using object id
    User.findOne({user: req.body.user})
        .then(applications => {

            applications.apps.pull(req.params.id)
            applications.save()
            res.json(applications)
        })
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;