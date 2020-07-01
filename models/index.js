const Person = require('./person');
const Recipe = require('./recipe');
//YOUR CODE HERE
Person.hasMany(Recipe);
Recipe.belongsTo(Person);

Person.prototype.findWithRecipes = function() {
    return Recipe.findAll({where: {personId: this.id}});
}

Person.prototype.writeRecipe = function() {
    return new Recipe;
}
module.exports = { Person, Recipe };
