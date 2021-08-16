const leastNum = (arrNum ) =>{
    let minNum = arrNum [0] ;
    arrNum.forEach(element => {
        if (element<minNum){
            minNum = element;
        }
    });
    return minNum;
}
console.log (leastNum([2,5,8,1,25,36,99,85]))