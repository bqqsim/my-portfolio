// buttons for the secret-page
//promts the user for an interger and return whether the number is odd
//or even
function OddOrEven() {
    let userNum = prompt ('Hey there! Enter an integer');
    if (userNum % 2 == 1 ){
    alert('That number is odd!');
}
else if(userNum % 2 == 0){
    alert ('That number is even!');
}
    else {
        alert ('Please enter an integer!');
    }
}
//uses the while loop to find the sum of the multiples of 3 to a 1000
function whileSumThrees() {
    let sum = 0;
    let i = 0;
    while (i < 1000) {
        sum += i;
        i = i + 3;
    }
    console.log(sum) 
}
//button 3 was moved to the HTML and has its functions there. Page: secret-page.html

//refreshes page to remove the access text from the 'Let's talk' button
function reFresh() {
    location.reload();
alert ('Boom. Press OK and the large text will disappear!')
}
//finds the century the entered year is in
function centuryFromYear() {
    let userYear = prompt ('Want to know what century any year is in? Enter a year!', '2020');
    let century = 0;

    century = Math.floor(userYear/100+1);
        if (toString(century)[-1] == 1) /*&& toString(century)[-1] !=11)*/{ 
           century = toString(century) + 'st'
        }

    return alert ('The year you entered is in the century of ' + century);
    
}
//finds the larger number of the entered integers
function largerNumber() {
    let num1 = parseInt(prompt ('Insert an integer! :'))
    let num2 = parseInt(prompt ('Insert another integer to find out which one is larger!'))

    if(num1 > num2){
        return alert('If I calculated correctly, ' + num1 + ' is larger!');
    }
    else if (num2 > num1){
        return alert('If I calculated correctly, ' + num2 + ' is larger!');
    }
    else if(num1 == num2){
        return alert('If I calculated correctly, it seems as if ' + num1 + ' and ' + num2 + ' are the same!');
    }
    else {
        alert('Please enter 2 integers!');
    }

};
//3 integers are entered then, finds the sign when the 3 integers are multiplied
function signOfProduct () {
  let numSign = parseInt (prompt ('Let\'s find the sign of the product! Enter a number', '0'));
  let numSign2 =  parseInt (prompt ('Enter another number', '0'));
  let numSign3 =  parseInt (prompt ('Enter one more number', '0'));
    if (numSign * numSign2 * numSign3 > 0) {
        return alert('The sign for the product of ' + numSign + ' ,' + numSign2 +' and ' + numSign3 + ' is positive')
        
    }
    else if (numSign * numSign2 * numSign3 < 0) {
        return alert('The sign for the product of ' + numSign + ' ,' + numSign2 +' and ' + numSign3 + ' is negative')
    }
    else {
        return alert ('Please enter 3 integers')
    }
}
//sorts the 3 entered integers from least to greatest
function threeNumberSort () {
    
    let num1 = parseInt (prompt ('Let\'s sort some numbers! Enter a number!'));
    let num2 = parseInt (prompt('Enter another number!'));
    let num3 = parseInt (prompt ('Enter one last number!'));

    let numSort = [num1, num2, num3];
    numSort.sort(function(a,b){return a-b})
    return alert('Here are the numbers you entered from least to greatest: ' + numSort);

}
//uses the for loop to find the sum of the multiples of 3 to a 1000
function forSumThrees () {
 let sumOfThrees = 0;
 
 for(let i = 0; i<1000; i = i + 3){

    sumOfThrees = sumOfThrees + i;

 }
 console.log(sumOfThrees);
}
//highlights the multiples of 10 or 4 up to 100. Also finds the mmutiples of 4 and 10
function tenFour() {
    //let sum = 0;
    let multipleOf4or10 = 0;

     for(i = 1; i<101; i = i +1){
        
         if(i % 4 === 0 && i % 10 === 0){

            multipleOf4or10 += (' TenFour! ');
         }
         else if(i % 4 === 0){
             multipleOf4or10 += (' Four! ');
         }
         else if(i % 10 === 0){
             multipleOf4or10 += ('Ten!');
         }
         else(multipleOf4or10 += ' ' + i + ' ');
     }
    alert (multipleOf4or10);
}
//finds the missing angle of a triangle

function thirdAngle () {
    
    let angle1 = parseInt (prompt('Let\'s find the missing angle for a triangle! Enter an angle'));
    let angle2 = parseInt (prompt('Enter a second angle and I\'ll tell you the missing angle!'));

    let totalAngle = angle1 + angle2;

    if (totalAngle < 180){
        let missingAngle = 180 - totalAngle;

        return alert ('The missing angle is ' + totalAngle);
    }
    else if (totalAngle > 180){
        return alert('The angles in a triangle add up to 180. The angles you entered are larger than 180!')
    }
    else{
        alert('Please enter valid angles.')
    }
}

//button 12 functions: Credit: W3 Schools. Functions and variables are set in the HTML. 

/*
function varDemo(){
let firstNumber = 9;
let secondNumber = 85;
let answer = firstNumber + secondNumber;
}*/