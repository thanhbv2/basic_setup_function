function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(let x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)  //// đoạn này có nghĩ là kiểm tra các phần tử có tồn tại đã cho có tồn tại hay k
    {
      vcount += 1;   ////// dưới này nếu có thì đếm các phần tử 
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

/// bài này mặc dù cop code nhưng e đã debug đếm các phần tử tồn tại và đã hiểu