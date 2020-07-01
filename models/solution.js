const Person = require('./person');
const Recipe = require('./recipe')

Person.hasMany(Recipe);
Recipe.belongsTo(Person);

Person.findWithRecipes = function() {
    return Person.findAll({includes: [{model: Recipe}]})
};

Person.prototype.writeRecipe = function(recipeObj) {
    return Recipe.create({...recipeObj, PersonId: this.id})
}

module.exports = {Person, Recipe}