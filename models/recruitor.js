const { Model } = require("objection");

class Recruitor extends Model {
  static get tableName() {
    return "recruitors";
  }
}

module.exports = Recruitor;