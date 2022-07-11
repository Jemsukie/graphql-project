export const citiesTypeDefinitions = /* GraphQL */ `
    type City {
        rank: ID!
        state: String!
        city: String!
        growth_from_2000_to_2013: String!
        latitude: Float!
        longitude: Float!
        #info: CityInfo!
    }

    type CityInfo {
        population: String!
        remarks: String!
    }

    type Query {
        cities: [City!]!
    }

    type Mutation {
        createCity(city: String!, state: String!, growth_from_2000_to_2013: String!, latitude: Float!, longitude: Float!): City!
    }

`