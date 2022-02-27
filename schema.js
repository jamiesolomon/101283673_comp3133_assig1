const { gql } = require('apollo-server-express');

//graphql schema
exports.typeDefs = gql `
    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type login{
        username:String!
        password:String!
    }

    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price:Float!
        email: String!
        username: String!
    }

    type Booking {
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username: String!
    }

    type Query {
        getUsers: [User]
        getUserByID(id: ID!): User
        getUserBytype(type: String!): [User]
        getBooking: [Booking]
        getBookingByID(id: ID!): Booking
        getBookingByusername(username: String!): [Booking]
        getListing: [Listing]
        getListingByID(id: ID!): Listing
        getListingByusername(username: String!): [Listing]
        getListingBycity(city: String!): [Listing]
        getListingBypostal(postal_code: String!): [Listing]
    }

    type Mutation {
        addUser(username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!): User
        login(
            username:String!
            password:String!):User
        addListing(listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!): Listing
        addBooking(listing_id: String!
            booking_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            username: String!): Booking
    
}

`