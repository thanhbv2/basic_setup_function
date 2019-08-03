//// so hoan hao
function is_perfect(number)
{
let temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
console.log(is_perfect(28)); 

/**
 * Format code 
 * Tư tưởng tạm ổn không biết có hiểu tại sao mà chỉ lấy number / 2 không ?
 */