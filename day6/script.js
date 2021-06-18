
//check whether the input is array or not;
function check_arr(){
  console.log(Array.isArray('w3resource'));
  console.log(Array.isArray([1, 2, 4, 0]));
}

check_arr();




//clone an Array
function arr_clone(arra1) {
 return arra1.slice(0);
}

console.log(arr_clone([1, 2, 4, 0]));
console.log(arr_clone([1, 2, [4, 0]]));



//Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
let arr = [7,9,0,-2];

function ret_arr(arr, n){
  if(arr==null){
    return 0;
  }
  if(n==null){
    return arr[0];
  }
  if(n<0){
    return [];
  }
  return arr.slice(0,n);

}

console.log(ret_arr(arr, 0));
console.log(ret_arr(arr, 3));
console.log(ret_arr(arr, 8));
console.log(ret_arr(arr, -3));




// Write a simple JavaScript program to join all elements of the following array into a string.44
mycolor = ["Red", "Green", "White", "Black"];
console.log(mycolor.toString());
console.log(mycolor.join());
console.log(mycolor.join('+'));



 // Write a JavaScript program to find the most frequent item of an array
 const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

 function most_freq(arr){

   let max=1, count=0;
   let elem;
   for(let i=0;i<arr.length;i++){
     for(let j=i;j<arr.length;j++){
       if(arr[i]==arr[j]){
         count++;
         if(max<count){
           max = count;
           elem = arr[i];
         }
       }
     }
     count=0;
   }

    console.log(`${elem} is occured ${max} times in an array`);
 }

most_freq(arr1);
