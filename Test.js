
function GreetingPrompt() {
    var user = prompt("Enter your name, please: ");
    while (!user){
        alert("Please give me your name")
        user = prompt("Enter your name, please: ");
    }
    if (user != null) {
        alert("Greeting " + user + "!");
    }
}

function Choice(){
    var choice = prompt("Do you like Bach?");
    if (choice === "yes") {
        alert("Yeah! I do as well!")
    } else {
        alert("You will like Bach!")
    }
} 

function Welcome() {
    alert ("Welcome to the Bach's page" + " user" + "!")
}


function numberValidation(){
    
    let attempts = 4 
    let favNum = 3; 

    for(i = 0; i < attempts; i++){

        let number = parseInt(prompt("What is my favorite number between 1 to 5?"));

        if (number === favNum){
            alert("Great job, it is my favorite number!")
            break;
        } else if(number < favNum){
            alert("too low, try higher it a little bit!");
        } else if(number > favNum){
            alert("too high, try again please!");
        }
        if(i === attempts - 1){
            alert(`my favorite number is ${favNum}`);
        }
    }
}


let getName = function(){

    let composer_name = prompt("How many time would you like to see my favorite musical composer?");

    for (let i = 0; i < composer_name; i++){
        document.write("<img src = './images/funny_Bach.jpeg'> <p style = 'color:brown;'>Have a wonderful day!</p>")
    }
    // if (composer_name == "Bach"){
    //     document.write("I am glad you like his work now!")
    // } else {
    //     document.write("I like " + composer_name  + " too! Please feel free to let me know your thoughts. Thank you!")
    // }
}



numberValidation()

//pushing data to git hub
