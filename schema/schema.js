const typeDefs = `
  type Query {
    users: [User]
    getOneUser(id: Int!): User
  }

  type Mutation {
    addUser(input: UserReq): User
  }

  type User {
    id: Int!
    code: String!
    name: String
    email: String
    hp: String
    skill: String
  }

  input UserReq {
    code: String!
    name: String
    email: String
    hp: String
    skill: String
  }
  `;

module.exports = typeDefs;