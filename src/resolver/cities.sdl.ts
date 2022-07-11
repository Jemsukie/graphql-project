export const citiesTypeDefinitions = /* GraphQL */ `
    type City {
        rank: Int!
        state: String!
        city: String!
        growth_from_2000_to_2013: String!
        latitude: Float!
        longitude: Float!
        #info: CityInfo!
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
        createCity(city: String!, state: String!, growth_from_2000_to_2013: String!, latitude: Float!, longitude: Float!): City!
        updateCity(rank: Int!, city: String!, state: String!, growth_from_2000_to_2013: String!, latitude: Float!, longitude: Float!): City!
        deleteCity(rank: Int!): City!
        createCityInfo(population: Int!, remarks: String!): CityInfo!
    }

`