const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
function appendCat(name) {
    const newArray = [...cats]
    newArray.push(name);
    return newArray;
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat() {
    let newArray2 = [...cats];
    newArray2.pop(name);
    return newArray2;
}
function removeFirstCat() {
    let newArray3 = [...cats];
    newArray3.shift(name);
    return newArray3;
}