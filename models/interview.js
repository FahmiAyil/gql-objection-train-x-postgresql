const { Model } = require("objection");
const User = require('./user');
const Recruitor = require('./user');
const path = require("path");


class Interview extends Model {
  static get tableName() {
    return "interviews";
  }

  static get jsonSchema() {
    return {
      type: "object",
    }
  }
  
  static get relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, "user"),
        join: {
          from: "interviews.user_id",
          to: "users.id"
        }
      },
      recruitor: {
        relation: Model.BelongsToOneRelation,
        // modelClass: Entry,
        modelClass: path.join(__dirname, "recruitor"),
        join: {
          from: "interviews.recruitor_id",
          to: "recruitors.id"
        }
      }
    };
  }
}

module.exports = Interview;