// 1)Print odd numbers in an array
// anonymous  

function (array){
                  for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                }
// IIFE 

(function(array){
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
             })([1,2,3,4])
             
// Arrow

oddNumbers = (array) => {
                   for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                        }
                        
  //  2)Convert all the strings to title caps in a string array
   // anonymous 

function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }
// IIFE 

(function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  })("SANKAR  IS MY NAME");
//  Arrow 
 
 titleCase = (str) => {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }            
// 3)Sum of all numbers in an array 
// anonymous  

function(array){
                  var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
                }
// IIFE 

(function(array){
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
             })([1,2,3,4])
// Arrow      

sum = (array)=>{
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
                   }
// 4)Return all the prime numbers in an array
    // Anonymous 
                
    function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
  //  IIFE 
                     
                   (function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  })([1,2,3,4])
    // Arrow 
    
       primeNumber = (numArray) => {
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
                  
// 5)  Return all the palindromes in an array

function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
    
  // Anonymous 
  
  function (arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    
    // IIFE 

              (  function (arr, n)
        {
            // Traversing each element of the array
            // and check if it is palindrome or not
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)

// Arrow  
   
Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
// Q.Return median of two sorted arrays of same size
let arr1 = [45, 56, 23, 78, 89, 57, 70];
let arr2 = [23, 56, 78, 90, 80, 32, 67];

//anonymous 
let med = function(arr1,arr2)
{
let l = arr1.length;
//sorting the arr in ascending order
arr1.sort(function(a,b) { return a — b });
arr2.sort(function(a,b) { return a — b });
console.log(arr1, arr2);
//if array length is even then the avg of middle elements in the array is median
if (arr1.length % 2 === 0) 
{
console.log((arr1[l/2] + arr1[l / 2–1])/2)
console.log((arr2[l/2] + arr2[l / 2–1])/2)
}
//if lenght is odd then middle term is the median
else 
{
console.log((arr1[(l — 1)/2]))
console.log((arr2[(l — 1)/2]))
}};
med(arr1,arr2);

//IIFE 

(function(arr1, arr2) 
{
let l = arr1.length;
arr1.sort(function(a,b) { return a — b });
arr2.sort(function(a,b) { return a — b });
console.log(arr1, arr2);
if (arr1.length % 2 === 0) 
{
console.log((arr1[l/2] + arr1[l / 2–1])/2)
console.log((arr2[l/2] + arr2[l / 2–1])/2)
}
else 
{
console.log((arr1[(l — 1)/2]))
console.log((arr2[(l — 1)/2]))
}};
(arr1,arr2);


// Q.Remove duplicates from an Array
// Anonymous  

function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                      }
// IIFE                

(function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                       })([1,1,2,3,4])
                       

// Q.Rotate an array by K times

function reverse(array , li , ri){
 while(li < ri){
      int temp = a[li];
      a[li]= a[ri];
      a[ri] = temp;
      
      li++;
      ri--;
    }
}
// Anonymous 

function(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          }
                          
  //  IIFE   
   
   (function(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          })([1,2,3,4] , 2)
 