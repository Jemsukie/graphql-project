import { makeExecutableSchema } from '@graphql-tools/schema'
import { linkTypeDefinitions } from './resolver/links.sdl'
import { feeds, hello, postLink } from './resolver/links'

const linkResolver = {
  Query: {
    feeds,
    hello
  },
  Mutation: {
    postLink
  }
}

export const schema = makeExecutableSchema({
  resolvers: [linkResolver],
  typeDefs: [linkTypeDefinitions],
})