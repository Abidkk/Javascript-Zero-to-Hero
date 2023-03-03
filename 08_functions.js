//>>>>>>>>>><<<<<<<<<<      :::  Functions  ES5 ::::: >>>>>><<<<<<<<<<<<>>>>>>>/||||||

// Simple Function:
function call(){
    console.log("Hello Simple Function")
    console.log('ES5 simple Function')
}
call()



// function with 1 parameter and 1 Arguments
// with Predefined value
function call2(name = 'Abid'){
    console.log('Hello' + name)
}
call2() ;



// function with Multiple parameters and Arguments 
// with predefined values:
function call3(color = 'red', code = 1546, status = true){
    console.log(color + code + status)
}
call3()


// Function with single Parameter and Argument:
// not predefined value ;

function data1(city){
    console.log(city)
}
data1() // undefindes
data1('Mirpurkhas')  // added a value 


//.. Function with Multiple Parameters and Arguments 
//.. Not predefined values:
function data2(boxNo, boxColor, boxCountry, boxStatus){
    console.log(boxNo+boxColor+boxCountry+boxStatus)
}
data2(45,'red','Pakistan',false)


// function with return keyword

function ret(favColor){
    return favColor;
}
// ret('Green')  // can not work : have to console it
console.log(ret('green'));

/// Arrow Function with Predefined and Not predefined values:
function fun1(color, background = 'red') {
    console.log(background + " " + color);
  }
  
  fun1('black'); // Outputs: "red black"


// >>>>>><<<<<<<<<<||||||||||||>>>><<< |||    ::: ES6 Arrow Function =>   >>>>>>><<<<<<<<<<|||||||
console.log('====>     ||||||     =========>    ||||||     ===========>')
console.log("Hello Arrow Function");


// Simple Arrow Function:
 let Arrow1 = () =>{
    console.log('Hi Arrow => function')
 }
 Arrow1()



// Arrow function with 1 parameter and 1 Arguments
// with Predefined value
let Arrow2 = (name = 'Abid Ali') => {
    console.log(name)
}
Arrow2()



// Arrow function with Multiple parameters and Arguments 
// with predefined values:
let Arrow3 = (favCity = 'Karachi', favNumber = 45) => {
    console.log(favCity + " "+ favNumber)
}
Arrow3()




// Arrow  Function with single Parameter and Argument:
// not predefined value ;
let Arrow4 = (msg = 'Wellcome to my channel') =>{
    console.log(msg)
}
Arrow4()



//..Arrow  Function with Multiple Parameters and Arguments 
//.. Not predefined values:
let Arrow5 = (msg1 = 'Thanks', msg2 = 'Sorry', msg3 ='Wellcome') =>{
    console.log(msg1 + " " + msg2 + " " + msg3)
}
Arrow5()



// Arrow function with return keyword
let Arrow6 = (msg5) =>{
    return msg5
}


console.log(Arrow6(4545))

/// Arrow Function with Predefined and Not predefined values:
let fun2 = (color, background = 'orange') => {
    console.log(background + " " + color);
  }
  fun2('black'); // Outputs: "orange black"
