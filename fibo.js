// dara call korta hila amadar let i = 2  dita hoibo abon tow value taktai hoba .
const man =[0, 1]
for(let n = 2 ; n < 38 ; n++){
    man[n] = man[n-1] + man [n-2] ;

}
console.log(man);