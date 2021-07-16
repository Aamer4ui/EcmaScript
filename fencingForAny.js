const FencingAny = (edges, numberWire, rate) => {
    let sum = 0;
    for(let i = 0; i < edges.length; i++){
        sum = sum + edges[i];
    }
    return sum * numberWire * rate;

};
console.log(FencingAny([45,15,5,25],3,8));