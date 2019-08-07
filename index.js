var recipes = {
  prop : 1
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes["prop"] = "2";
  return recipes;
}
