const { ApolloError } = require("apollo-error");
const User = require("./../models/user");


const resolvers = {
  Query: {
    users(_, args) {
      const data_user = User.query();
      return data_user
    },
    // getOneUser(_, args) {
    //   return fakeData.filter(item => args.id === item.id).pop();
    // }
  },
  Mutation: {
    async addUser(_, args) {
      const addquery = await User
        .query()
        .insert({ 
          code: args.input.code, 
          name: args.input.name, 
          email: args.input.email,
          hp: args.input.hp,
          skill: args.input.skill
        });
    }
  }
};

module.exports = resolvers;