const mongoose = require('mongoose');


const imageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Image is required']
    }
});

module.exports = mongoose.model('Gallery', imageSchema);