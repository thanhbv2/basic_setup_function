function find_longest_word(str)
{
  let array1 = str.match(/\w[a-z]{0,}/gi);
  let result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 

    ///// vòng for này e  hiểu theo ý nghĩa là so sánh từng chuỗi với nhau  
  }
  return result;



}
console.log(find_longest_word('Web Development Tutorial'));

//// bài này e cop code và ko hiểu phân :  var array1 = str.match(/\w[a-z]{0,}/gi);