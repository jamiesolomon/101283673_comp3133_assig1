const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 5,

    },
    booking_id: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 5,

    },
    booking_date: {
        type: Date,
    },
    booking_start: {
        type: Date,
    },
    booking_end: {
        type: Date,
    },
    username: {
        type: String,
        required: [true, 'Please enter user name'],
        trim: true,
        uppercase: true,
        minlength: 10,
        maxlength: 50,
    },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;