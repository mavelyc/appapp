const mongoose = require('mongoose');

const Schema = mongoose.Schema

const applicationSchema = new Schema({
    company: {type: String, required: true},
    position: {type:String, required: true},
    date: {type: Date, required: true},
    status: {
        applied: {type: Boolean, required: true},
        interviewing: {type: Boolean, required: true},
        offered: {type: Boolean, required: true},
        rejected: {type: Boolean, required: true}
    }
},{
    collection: "users"
})

const Application = mongoose.model('Application', applicationSchema)

module.exports = Application;