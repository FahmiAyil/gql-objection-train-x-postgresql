const { Model } = require("objection");
const User = require('./user');

class Interview extends Model {
  static get tableName() {
    return "interviews";
  }
  
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'interviews.user_id',
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = Interview;