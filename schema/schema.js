const typeDefs = `
  type Query {
    users: [User]
    getOneUser(code: String!): User
    recruitors: [Recruitor]
    getOneRecruitor(name: String): Recruitor
    interviews: [Interview]
    goals: [Goal]
  }

  type Mutation {
    addUser(input: UserReq): User
    addRecruitor(input: RecReq): Recruitor
    addInterview(input: IntReq): Interview
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
  
  type Interview {
    id: Int!
    user_id: Int!
    reqruitor_id: Int!
    place: String
    time: String
    type: String
    users: User
    recruitors: Recruitor
  }
  input IntReq {
    user_id:Int!
    recruitor_id:Int!
    place:String
    time:String
    type:String
  }

  type Goal {
    id: Int!
    user_id: Int!
    reqruitor_id: Int!
    interview_id: Int!
    acceptor: Int!
    referal: Int!
    users: User
  }
  `;

module.exports = typeDefs;