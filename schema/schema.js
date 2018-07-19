const typeDefs = `
  type Query {
    users: [User]
    getOneUser(code: String!): User
    recruitors: [Recruitor]
    getOneRecruitor(name: String): Recruitor
  }

  type Mutation {
    addUser(input: UserReq): User
    addRecruitor(input: RecReq): Recruitor
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

  type Recruitor {
    id: Int!
    name:String
    email:String
    hp:String
    principal:String
  }

  input RecReq {
    name:String
    email:String
    hp:String
    principal:String
  }
  `;

module.exports = typeDefs;