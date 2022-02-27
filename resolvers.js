const User = require('./models/User');
const Listing = require('./models/Listing')
const Booking = require('./models/Booking')

const bcrypt = require('bcrypt');
const { ApolloError } = require('apollo-server-express');

exports.resolvers = {
    Query: {
        getUsers: async (parent, args) => {
            return await User.find({}) 
        },
        getUserByID: async (parent, args) => {
            return User.findById(args.id)
        },
        getUserBytype: async (parent, args) => {
            return User.find({ "type": args.type })
        },

        getListing: async (parent, args) => {
            return Listing.find({})
        },
        getListingByID: async (parent, args) => {
            return Listing.findById(args.id)
        },
        getListingByusername: async (parent, args) => {
            return Listing.find({ "username": args.username })
        },
        getListingBycity: async (parent, args) => {
            return Listing.find({ "city": args.city })
        },
        getListingBypostal: async (parent, args) => {
            return Listing.find({ "postal_code": args.posta })
        },

        getBooking: async (parent, args) => {
            return Booking.find({})
        },
        getBookingByID: async (parent, args) => {
            return Booking.findById(args.id)
        },
        getBookingByusername: async (parent, args) => {
            return Booking.find({ "username": args.username })
        }
    },

    Mutation: {
        addUser: async (parent, args) => {

            let hashpassword = await bcrypt.hash(args.password, 0);
            console.log(args)

            let newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: hashpassword,
                email: args.email,
                type: args.type,

            })

            return newUser.save()
        },
        login: async (parent, args) => {
            const userLogin = await User.find({ "username": args.username});
            const checkPass = await bcrypt.compare(args.password, userLogin.password);
            if (userLogin || checkPass) {
                return Listing.find({})
            } else {
                throw new ApolloError('invalid password or username')
            }
        },
        addListing: async (parent, args) => {
            console.log(args)

            let newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username,

            })

            return newListing.save()
        },
        addBooking: async (parent, args) => {
            console.log(args)

            let newBooking = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: Date.parse(args.booking_date),
                booking_start: Date.parse(args.booking_start),
                booking_end: Date.parse(args.booking_end),
                username: args.username,

            })

            return newBooking.save()
        },
    }
}