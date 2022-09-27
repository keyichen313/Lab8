function Welcome() {
    alert ("Welcome to the Bach's page!")
}

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


function numberValidation(){
    let number = prompt("What is my favorite number between 1 to 100?")
    
    if (number > 3){
        alert("too high")
    } else if(number < 3 ){
        alert("too low")
    } else if(number == 3){
        alert("Great, it is my favorite number!")
    } else {
        alert("Sorry, it is not a number.")
    }
   /*while(typeof parseduserAge != "number"){
        alert("You are appreciated to provide us a numerical information regarding to your age.")

        userAge = prompt("Hello! how old are you?")
        parseduserAge = Number(userAge)
    }

    if (parseduserAge <= 18){
        document.write("Congratulations! You start to appreciate classical music in your young age.")
    } else {
        document.write("Congratulations!You have abundant life experience to appreciate classical music!")
    }
    return; */
}


let getName = function(){

    let composer_name = prompt("Name a classical music composer you like, please?");

    if (composer_name == "Bach"){
        document.write("I am glad you like his work now!")
    } else {
        document.write("I like " + composer_name  + " too! Please feel free to let me know your thoughts. Thank you!")
    }
}





Welcome()
GreetingPrompt()
numberValidation()
getName()

