function minInArray(number){
    let smaller = number[0];
    for(let i = 0 ; i < number.length ; i++){
        const imdex = i ;
        const element = number[imdex] ;
        if(element < smaller ){
            smaller = element ;
        }
    }
    return smaller ;
}
const lowest = [ 38, 36, 46, 664, 346, 34, 53,23, 25, 5, 24, 2];
const lower = minInArray(lowest);
console.log(lower)