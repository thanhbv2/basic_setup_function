// Viết hàm JavaScript để có được tất cả các tập hợp con có thể có các kết hợp có độ dài cố định (ví dụ 2) trong một mảng.


function subset(arra, arra_size) {
    var result_set = [],
        result;

    for (var x = 0; x < Math.pow(2, arra.length); x++) {
        result = [];
        i = arra.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(arra[i]);
            }
        } while (i--);

        if (result.length >= arra_size) {
            result_set.push(result);
        }
    }

    return result_set;
}

console.log(subset([1, 2, 3], 2));
