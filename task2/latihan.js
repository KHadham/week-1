var umur = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}
console.log(umur.filter(checkAdult))
