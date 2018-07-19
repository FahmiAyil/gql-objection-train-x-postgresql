const { Model } = require("objection");

class Recruitor extends Model {
  static get tableName() {
    return "recruitors";
  }

  static get relationMappings() {
    return {
      interview: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "interview"),
        join: {
          from: 'recruitors.id',
          to: 'interviews.user_id'
        }
      }
    }
  }
}

module.exports = Recruitor;