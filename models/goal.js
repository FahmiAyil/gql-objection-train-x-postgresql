const { Model } = require("objection");
const path = require("path");

class Goal extends Model {
  static get tableName() {
    return "goals";
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, "user"),
        join: {
          from: "goals.user_id",
          to: "users.id"
        }
      },
      
      recruitor: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, "recruitor"),
        join: {
          from: "goals.recruitor_id",
          to: "recruitors.id"
        }
      },
      
    };
  }
}

module.exports = Goal;