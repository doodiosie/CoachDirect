export default `

scalar Date

type Booking {
    id: Int
    firstName: String
    lastName: String
    pickupDate: Date
    pickupAddress: String
    destinationAddress: String
    price: Int
}

enum BookingField {
    id
    firstName
    lastName
    pickupDate
    pickupAddress
    destinationAddress
    price
}

input BookingFilter {
    field: BookingField
    filter: String
}

input BookingOrder {
    field: BookingField
    direction: OrderDirection
}

input BookingInput {
    firstName: String!
    lastName: String!
    pickupDate: Date!
    pickupAddress: String!
    destinationAddress: String!
    price: Int!
}

enum OrderDirection {
    ASC
    DESC
}

type Query {
    hello: String
    bookings (
        order: [BookingOrder],
        filter: [BookingFilter],
        first: Int,
        skip: Int
    ): [Booking]
    booking (
        id: Int!
    ): Booking
}

type Mutation {
    addBooking (
        record: BookingInput
    ): Booking
    editBooking(
        id: Int!,
        record: BookingInput
    ): Booking
    deleteBooking (
        id: Int!
    ): Booking
}

schema {
    query: Query
    mutation: Mutation
}

`;
