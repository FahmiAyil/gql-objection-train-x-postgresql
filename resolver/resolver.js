const { ApolloError } = require("apollo-error");
const User = require("./../models/user");
const Reqruitor = require("./../models/recruitor");


const resolvers = {
  Query: {
    users(_, args) {
      const data_user = User.query();
      return data_user
    },
    async getOneUser(_, args) {
      console.log(args, '========');
      
      const handleFinish = await User
        .query()
        .where('code', args.code)
      return handleFinish.pop();
    },

    recruitors(_, args) {
      const data_reqruitor = Reqruitor.query();
      return data_reqruitor
    },
    async getOneRecruitor(_, args) {
      console.log(args, '========');
      
      const handleFinish = await Reqruitor
        .query()
        .where('name', args.name)
      return handleFinish.pop();
    }
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
      
      const handleFinish = await User
        .query()
        .where('code', args.input.code)
      
      console.log('============================', handleFinish);
        
      return handleFinish.pop();
    },

    async addRecruitor(_, args) {
      const addquery = await Reqruitor
        .query()
        .insert({ 
          name: args.input.name, 
          email: args.input.email,
          hp: args.input.hp,
          principal: args.input.principal
        });
      
      const handleFinish = await Reqruitor
        .query()
        .where('name', args.input.name)
      
      console.log('============================', handleFinish);
        
      return handleFinish.pop();
    }
  }
};

module.exports = resolvers;