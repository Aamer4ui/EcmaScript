const FencingRect = (b , w , wire, foot) =>{
    const para = b+w+b+w;
    const cost = para * wire * foot;
    return cost;
} ;
console.log(FencingRect(30,40,7,12));