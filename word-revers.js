function dhjksdk (number){
    const word =number.split(' ') ;
    let jdfh = [] ;
    for(let i = word.length-1 ; i >= 0 ; i-- ){
        const element= word[i] ;
        jdfh.push(element ) ;
    }
    const reversed = jdfh.join(' ') ;
    return reversed ;
}
const value = 'I am a good boy in this Room';
const  jdfh  = dhjksdk(value);
console.log(jdfh) ;