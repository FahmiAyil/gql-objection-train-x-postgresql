const { Model } = require("objection");

class Goal extends Model {
  static get tableName() {
    return "goals";
  }
}

module.exports = Goal;