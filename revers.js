function rilak(number){
    let revers = '' ;
    for(let i = number.length-1 ; i >= 0 ; i--){
        const element= number[i];
        revers = revers + element ;
        console.log(element, revers);
    }
    return revers ;
}
const value = 'I am a good boy in this Room';
const revers = rilak(value);
console.log(revers);