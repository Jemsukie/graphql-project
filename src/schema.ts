import { makeExecutableSchema } from '@graphql-tools/schema'
//import { linkTypeDefinitions } from './resolver/links.sdl'
//import { feeds, hello, postLink } from './resolver/links'
import { cities, createCity } from './resolver/cities'
import { citiesTypeDefinitions } from './resolver/cities.sdl'

const cityResolver = {
  Query: {
    cities
  },
  Mutation: {
    createCity
  }
}

export const schema = makeExecutableSchema({
  resolvers: [cityResolver],
  typeDefs: [citiesTypeDefinitions],
})