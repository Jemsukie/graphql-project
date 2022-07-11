import { makeExecutableSchema } from '@graphql-tools/schema'
//import { linkTypeDefinitions } from './resolver/links.sdl'
//import { feeds, hello, postLink } from './resolver/links'
import { cities, city, createCity, updateCity, deleteCity, cityInfos, createCityInfo } from './resolver/cities'
import { citiesTypeDefinitions } from './resolver/cities.sdl'

const cityResolver = {
  Query: {
    cities,
    city,
    cityInfos
  },
  Mutation: {
    createCity,
    updateCity,
    deleteCity,
    createCityInfo
  }
}

export const schema = makeExecutableSchema({
  resolvers: [cityResolver],
  typeDefs: [citiesTypeDefinitions],
})