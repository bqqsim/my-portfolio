// buttons for the secret-page
//promts the user for an interger and return whether the number is odd
//or even
function OddOrEven() {
    let userNum = prompt ('Hey there! Enter an integer');
    if (userNum %2 ==1 ){
    alert('That number is odd!');
}
    else {
        alert ('That number is even!');
    }
}

function whileSumThrees() {
    let sum = 0;
    let i = 0;
    while (i < 1000) {
        sum += i;
        i = i + 3;
    }
    console.log(sum) //log to console
}
//button 3 was moved to the HTML and has its functions there. Page: secret-page.html

function button4() {
    location.reload();
alert ('Boom. Press OK and the large text will disappear!')
}

function button5() {
    prompt ('Aren\'t you getting bored of the same old pop ups?');
    alert ('Let\'s see what is in the other buttons.')
}

function button6() {
    alert ('Well, by the looks of it, you are not bored of these yet!')
}

function button7 () {
    alert ('Soon, these buttons will do more than these lame alerts! Keep checking in from time to time!')
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