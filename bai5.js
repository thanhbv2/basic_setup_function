/// viet hoa cac chu dau cua 1 chuoi
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

/**
 * Không dùng var, nhớ format code 
 * Dùng let nếu biến đấy được gán lại VD: let a = 5 ... sau đó a = 6
 * Dùng const nếu biến chỉ dùng và k gán lại tương đương như 1 hằng số
 * 
 */

```
function uppercase(str) {
  var array1 = str.split(' ');
  var newarray1 = [];

  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(' ');
}
```