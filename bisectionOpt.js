let firstIndex =0;
let lastIndex = 0;
const findExist = (arryNum, findNum) =>{
    const mid =Math.floor((firstIndex+lastIndex)/2) ;
    if (arrNum[mid]===findNum){
        return mid;
    }else if (arrNum[mid]>findNum){
        firstIndex =mid;
    }else{
        lastIndex= mid
    }
    findExist (arryNum,findNum);
}
const bisectionOpt = (arrNum,  findNum) =>{
    let firstIndex = 0;
    let lastIndex = arrNum.length-1;
    findExist (arryNum,findNum);

}
console.log(bisectionOpt([2,4,7,8,11,45,75,120,135,145,175],75))


// ---------------------Optimum-----------------
