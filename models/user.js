const { Model } = require("objection");
const Interview = require('./interview');
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
      }
    }
  }
}

module.exports = User;