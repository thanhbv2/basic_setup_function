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

console.log(demChu('w3resource.com', 'o'));