const { Model } = require("objection");
const path = require("path");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      interview: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "interview"),
        join: {
          from: 'users.id',
          to: 'interviews.user_id'
        }
      },
      goal: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "goal"),
        join: {
          from: 'users.id',
          to: 'goals.user_id'
        }
      },
      
    }
  }
}

module.exports = User;