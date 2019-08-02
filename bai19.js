function isBigEnough(element) {

    return (element >= 10);
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered)