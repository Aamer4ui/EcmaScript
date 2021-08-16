// ------------ first way

// const factorial = (num ) =>{
//     for (let i = num-1 ; i > 0; i--){
//         num = num * i;
//     }
//     return num;
// }
// console.log (factorial(20));


//------------- second way

// const factorialnew = (num) =>{
//     if (num == 0){
//         return 1;
//     }else {
//         return num * factorialnew(num - 1);
//     }
// }
// console.log (factorialnew (5))

// ------------ optimim
 const factorialOpt = (n) => n<0 ? 1:n*(n-1);
 console.log (factorialOpt(5));