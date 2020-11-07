// buttons for the secret-page
//promts the user for an interger and return whether the number is odd
//or even
function OddOrEven() {
    let userNum = prompt ('Hey there! Enter an integer');
    if (userNum %2 == 1 ){
    alert('That number is odd!');
}
else if(userNum % 2 == 0){
    alert ('That number is even!');
}
    else {
        alert ('Please enter an integer!');
    }
}

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

function button4() {
    location.reload();
alert ('Boom. Press OK and the large text will disappear!')
}

function centuryFromYear() {
    let userYear = prompt ('Want to know what century any year is in? Enter a year!', '2020');
    let century = 0;

    century = Math.floor(userYear/100+1);
        if (toString(century)[-1] == 1) /*&& toString(century)[-1] !=11)*/{ 
           century = toString(century) + 'st'
        }

    return alert ('The year you entered is in the century of ' + century);
    
}

function largerNumber() {
    let num1 = parseInt(prompt ('Insert an integer! :'))
    let num2 = parseInt(prompt ('Insert another integer to find out which one is larger!'))

    if(num1 > num2){
        return alert('If I calculated correctly, ' + num1 + ' is larger!');
    }
    else if (num2 > num1){
        return alert('If I calculated correctly, ' + num2 + ' is larger!');
    }
    else if(num1 = num2){
        return alert('If I calculated correctly, it seems as if ' + num1 + ' and ' + num2 + ' are the same!');
    }
    else {
        alert('Please enter 2 integers!');
    }

};
//3 integers, find th esign when the 3 are multiplied
function signOfProduct () {
  let numSign = parseInt (prompt ('Let\'s find the sign of the product! Enter a number', '0'));
  let numSign2 =  parseInt (prompt ('Enter another number', '0'));
  let numSign3 =  parseInt (prompt ('Enter one more number', '0'));
    if (numSign * numSign2 * numSign3 > 0) {
        return alert('The sign for the product of ' + numSign + ' ,' + numSign2 +' and ' + numSign3 + ' is positive')
        
    }
}

function button8 () {
    alert ('boop. There\'s nothing special here!! Sorry!')
}

function button9 () {
    alert ('Yes, nine buttons. There may be less in the final product for this website!')
}

function button10 () {
    alert ('Woah 10 buttons! Still nothing cool though :(')
}

function button11 () {
    alert ('This is kind of disappointing considering how interactive the other buttons were right? Dang :(')
}

//button 12 functions: Credit: W3 Schools. Functions and variables are set in the HTML. 

/*
function varDemo(){
let firstNumber = 9;
let secondNumber = 85;
let answer = firstNumber + secondNumber;
}*/