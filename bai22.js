/**
 * Bài này làm được nhưng nhớ format code: control + shift + f
 * @param {*} str 
 * @param {*} letter 
 */


function demChu(str, letter) 
{
 var letter_Count = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letter_Count ++;
      }
  }
  return letter_Count;
}

console.log(demChu('w3resourooce.com', 'o'));