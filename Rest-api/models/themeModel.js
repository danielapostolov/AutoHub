const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const themeSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    located: {
        type: String,
        required: false
    },
    posts: [{
        type: ObjectId,
        ref: "Post"
    }], 
    userId: {
        type: ObjectId,
        ref: "User"
    },

    // description: {
    //     type: String,
    //     required: false
    // },
    //TODO add owner id
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Theme', themeSchema);
