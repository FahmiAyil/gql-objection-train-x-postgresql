const { Model } = require("objection");
const Interview = require('./interview');

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      interview: {
        relation: Model.HasManyRelation,
        modelClass: Interview,
        join: {
          from: 'users.id',
          to: 'interviews.user_id'
        }
      }
    }
  }
}

module.exports = User;