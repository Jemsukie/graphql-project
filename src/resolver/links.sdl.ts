export const linkTypeDefinitions = /* GraphQL */ `
    type Link {
        id: ID!
        description: String!
        url: String!
    }
    type Query {
        feeds: [Link!]!
        hello: String!
    }

    type Mutation {
        postLink(url: String!, description: String!): Link!
    }

`