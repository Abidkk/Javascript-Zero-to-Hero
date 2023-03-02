//  :::  01:  Arthematics Operator ::

/*

addition            +
subtraction         -
Multiplication      *
Division            /
Modules             %
increment           ++
decrement           --

*/                                      //  Let's Code :


 let a = 10;
 let b = 3;

 console.log(a+b) // will print 13
 console.log(a-b) // will print 7
 console.log(a*b) // will print 30
 console.log(a/b) // wil print 3.333
 console.log(a%b) // will print 1 as a reminder

a++;   /// increment in a it will be 11
console.log(a)
b--;
console.log(b) // decrement in b it will be 2

console.log(' |||||><<<<<<<<<<<<>>>>>>|||||||>>>>>>>>>>>>><<<<<<<<<<|||||||||>>>>>>>>>><<<<<<<<<<<<|||||||||>>>>>>>>>><<<<<<<<<||||||| ')
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>||||||||||||||




/*
  :::  02:  Comparison Operator ::

Equal to                      ==    
not equal to                 !==  
Greter than                   >
Less than                     <
Greater than equal to         >=
Less than Equal to            <=

*/        ///         :::   Let's code   :::

let num1 = 100;
let num2 = 200;

console.log(num1 == num2); //false
console.log(num1 != num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2);//  true

// more

let fruit1 =  'Apple';
let fruit2 = 'Orange';
console.log(fruit1 == fruit2) //false
console.log(fruit1 == 'Apple'); //true
console.log(fruit1 == 'apple') //false

console.log('>>>>>>>>><<<<<<<<|||||||>>>>>>>><<<<<<<|||||||||>>>>>>><<<<<<<<||||||||>>>>>>>>>><<<<<<<|||||||><<<<<<<<<<<>>>>>>|||||')
///<<<<<<<>>>>>>>|||||||||>>>>>>><<<<<<<<<<||||||||||<<<<<<>>>>>>>|||||||<<<<<>>>>>>|||||>>>>>><<<<<<|||||>>><<<<<<>>>>>>||||||||||||

/*
  :::  03:  Assignment Operator ::
Assignment              =
Add & Assign            +=
Subtract & Assign       -=
Multiply & Assign       *=
Divide & Assign         /=
Modules & Assign        %=
*/ //////////                 :::::::::   Let's code      :::::::::::::


let num3 = 5;
let num4 = 3; //we are using assignment operator = to assig value

 

num3 += num4;  // Add and Assign
console.log(num3) // 8 


num3 -= num4; // subtract and Assign
console.log(num3) // 5

num3 *= num4 ;
console.log(num3); // 15


num3 /= num4;
console.log(num3) // 5

num3 %= num4
console.log(num3) // 2

console.log('>>>>><<<<<<|||||||||||>>>>>>>>>>><<<<<<<<<||||||>>>>>>>>>>><<<<<<|||||||>>>>>>>><<<<<<<<<||||||||||>>>>>>>><<<<<<<<||||||||');
// ----|||||||||||>>>>>>>>>><<<<<<<<<<<<<<<<<<||||||||||||>>>>>>>>>><<<<<<<<<<|||||||||||>>>>>>>><<<<<<<<<<<|||||||||||||>>>>>>><<|||||||



/*
  :::  04: Logical Operator ::

And         &&
Or          ||

*/

let x = 3;
let y = 4;
// in And && operator all conditions should true
console.log(x < y && x > 2) /// true
console.log(x > y && x > 2) // false

// in Or || condition any one condition should true.
console.log(x < y || x > 2) // true
console.log(x > y || x >2) // true
console.log(x > y || x < 2)

console.log('>>>><<<<<<<<||||||||||>>>>>>>>>><<<<<<<<|||||||||>>>>>>>><<<<<<<<||||||||>>>>>>><<<<<<<|>>>>>>>>>>>><<<<<||||||||||||||');
//\|||||||>>>>>>>>>>>><<<<<<<<<<<<<<|||||||||||>>>>>>>>><<<<<<<<<||||||||||||||>>>>>>>>>>>><<<<<<<<<<<||||||||||>>>>>>>>>>><|||||||||





/*

:::  05: Ternary Operator ::


        (condition) ? (true) : (false)
    example :  2 > 1  ? "Yes" : "no"

*/ ///////////          :::   Let's Code    :::::

console.log(2 > 1 ? 'Yes':'No');  // yes
console.log(2 > 4 ? 'yes': 'No'); // no











