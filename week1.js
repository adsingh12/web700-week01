console.log("Welcome to first class of Web Programming")
var a=100
console.log(a)
console.log(typeof(a))

a="Hello"
console.log(a)
console.log(typeof(a))

let b =1000
console.log(a)
console.log(typeof(a))

//We cannot use the line "let b =2" once it is declared 

var z;
console.log(z)  //Shows undefined at output

const x=500
console.log(x)

//We cannot change the value of a const variable
//x=300 
//console.log(x)

student ={ 
    sid:1,
    fnm: "pritesh",
    lastname: "Patel",
    result: "Pass"
}

console.log(student)
console.log(student.sid) //Acessing object values
console.log(student.siiid) //Incorrect variable donot make a error (Value : undefined)
console.log(typeof(student))

 var ne = 10+20
 console.log(ne)


 function sayHello() {
    console.log("Hello, Pritesh")
 }

 sayHello()
 console.log(type0f(sayHello))

 //Another way of defining a function
var Hello= function(){
    console.log("Hello, Everyone")
}
Hello()

//Function with argument
var HelloName= function(name){
    console.log(`Hello, ${name}`)
}
HelloName('Akash')

//A more preffered way to do so
var HelloName= function(name){
    console.log(`Hello, ${name}`)
}
HelloName('Akash')



