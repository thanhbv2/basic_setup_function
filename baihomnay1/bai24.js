//// sort theo thu tự từ lớn tới bé
function sort(a){
    return a.sort(function(a,b){
        return b-a
    })
}
console.log(sort([40, 100, 1, 5, 25, 10]))