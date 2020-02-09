const mongoose = require('mongoose');

const Schema = mongoose.Schema

const applicationSchema = new Schema({
    company: {type: String, required: true},
    position: {type:String, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true
})

const Application = mongoose.model('Application', applicationSchema)

module.exports = Application;