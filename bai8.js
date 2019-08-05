/// kiem tra so nguyen to

function check(number) {
    if (number === 1) {
        return false
    }
    else if(number===2){
        return true
    }
    else{
        for(i = 2;i<number;i++){
            if(number%i===0){
                return false
            }
        }
        return true
    }
}

console.log(check(3));
console.log(check(8));
console.log(check(9));


/**
 * Kiểm tra điều kiện số phải dương
 * Tìm ước của 1 số thì phải kiểm trả là số hay k ?
 * bài này k bảo console.log ra
 * lưu giá trị vào 1 mảng các ước
 */