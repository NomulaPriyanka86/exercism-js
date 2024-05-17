/// <reference path="./global.d.ts" />
// @ts-check
/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
 export function cookingStatus(time) {
  if (time === 0) {
    return 'Lasagna is done.';
  }
  else if (time > 0) {
    return 'Not done, please wait.';
  }
  else {
    return 'You forgot to set the timer.';
  }
 }
 export function preparationTime(layers, timePerLayer=2) {
  return layers.length * timePerLayer;
 }
  export function quantities(layers){
      const obj = {
    noodles: 0,
    sauce: 0,
  }
  for (let i = 0; i < layers.length; i++) {
    if (layers[i]=== 'noodles'){
      obj.noodles += 50;
    }else if (layers[i] === 'sauce'){
      obj.sauce += 0.2;
    }
  }
    console.log(obj);
  return obj;
  }
export function addSecretIngredient(friendsList,myList) {
   let secretIng = friendsList[friendsList.length-1];
    myList.push(secretIng);
  
}
export function scaleRecipe(recipe,amount) {
  const scaled = {};
  for (const key in recipe) {
    scaled[key] = recipe[key] * amount / 2;
  }
  return scaled;
}
