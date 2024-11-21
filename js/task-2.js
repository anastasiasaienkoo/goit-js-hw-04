function makeArray(firstArray, secondArray, maxLength) {
const combinedArray = firstArray.concat(secondArray);
if (combinedArray.length > maxLength && Array.isArray(combinedArray)) {
    return combinedArray.slice(0,maxLength);
} else {
    return combinedArray;
}
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));