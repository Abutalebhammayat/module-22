// >>>>>>>>>>>>>>>>>> toUpperCase is a sting . It capitalizes Sting's name <<<<<<<<<<<<<<<<<< toUpperCase works
// >>>>>>>>>>>>>>>>>> toLowerCase is a sting . It lower case Sting's name <<<<<<<<<<<<<<<<<< toUpperCase works
// >>>>>>>>>>>>>>>>>> toLocaleLowerCase is a sting . It lower case Sting's name . But in their respective languages <<<<<<<<<<<<<<<<<< toUpperCase works
// >>>>>>>>>>>>>>>>>> toLocaleUpperCase is a sting . It capitalizes case Sting's name. But in their respective languages <<<<<<<<<<<<<<<<<< toUpperCase works




const firstName = "Kazi Abu"
const LastName = "kazi Abu"

if(firstName.toUpperCase === LastName.toUpperCase){
    console.log("value is a right")
}
else{
    console.log("Invalue is'n right")
}
console.log(firstName)
console.log(LastName)