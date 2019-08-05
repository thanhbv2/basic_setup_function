//// sort theo thu tự từ lớn tới bé
function sort(a){
    return a.sort(function(a,b){
        return b-a
    })
}
console.log(sort([40, 100, 1, 5, 25, 10]))

/**
 * Bài này dùng thuật toán lặp các phần tử so sánh vs nhau rồi sắp xếp lại đổi chỗ cho nhau
 * Xem lời giải làm theo, cố hiểu ý tưởng
 */