function list(list1){
    let str = ''
    let str1='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890'
    for(i=0;i<list1;i++){
        str+= str1.charAt(Math.random()*str1.length)
    }
    return str
}
console.log(list(8))




// function makeid(l)
// {
// var text = "";
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// }
// return text;
// }
// console.log(makeid(8));
///  đây là code cũ e chưa hiểu vì sao phải lấy floor làm gì, e thử k cần floor ở code trên vẫn được
//// vì chỉ cần lấy ra các phần được được chỉ định và radoom nó chứ k cần làm tròn
////