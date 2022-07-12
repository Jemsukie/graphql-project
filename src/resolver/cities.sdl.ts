export const citiesTypeDefinitions = /* GraphQL */ `
    type City {
        rank: Int!
        state: String!
        city: String!
        growth_from_2000_to_2013: String!
        location: Location!
        info: CityInfo!
    }

    type Location {
        latitude: Float
        longitude: Float
    }

    input createCityInput {
        city: String!,
        state: String!, 
        growth_from_2000_to_2013: String!, 
        latitude: Float!, 
        longitude: Float!
    }

    input updateCityInput {
        city: String,
        state: String, 
        growth_from_2000_to_2013: String, 
        latitude: Float, 
        longitude: Float
    }

    type CityInfo {
        id: Int!
        population: Int!
        remarks: String!
    }

    type Query {
        cities: [City!]!
        city(rank: Int!): City
        cityInfos: [CityInfo!]!
    }

    type Mutation {
        createCity(input: createCityInput!): City!
        updateCity(rank: Int!, input: updateCityInput!): City!
        deleteCity(rank: Int!): City!
        createCityInfo(population: Int!, remarks: String!): CityInfo!
    }

`