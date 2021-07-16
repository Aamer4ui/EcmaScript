const fencingTra = (h, b , a , wire, foot) =>{
    const para =h+b+a;
    const cost = para * wire * foot;
    return cost;
} ;
console.log(fencingTra(30,40,60,7,12));