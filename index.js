var recipes = {
  prop : 1
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object[key] = value;
}
