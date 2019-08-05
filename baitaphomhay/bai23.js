/**
 * Bài này tìm ký tự trùng lặp gần nhau nhất
 * vd: abca1bbfd. Kết quả là b vì khoảng cách vị trí bb chỉ là 1, còn a --> a mất 3
 * Bài này ngoài việc tìm ra các cặp trùng lặp sau đấy so sánh xem khoảng cách giữa các cặp số này thằng này nhỏ nhất là kết quả
 * xem giải cố gắng hiểu chạy debug 
 * @param {*} str 
 */


function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;

    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;

        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }
    return result;
}
console.log(find_FirstNotRepeatedChar('huyvanbuih'));