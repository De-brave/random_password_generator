// Get the two html input tags and store them in two different Variables using the DOM
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");

// Characters that will be used as passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// Codes for the Generate password btn
function generatePassword() {
    
    // Declare empty string variable with let keyword
    let password1 = "";
    let password2 = "";

    // this for loop determines the ammount of characters that will be printed out.
    for (let i = 0; i < 15; i++) {

        // Generates a random number between 0 and the length of the characters array.
        const passwordIndex1 = Math.floor(Math.random() * characters.length //Characters.length returns the number of elements in the characters array.
        );
        const passwordIndex2 = Math.floor(Math.random() * characters.length);


        // Use the passwordIndex variable to select a random character from the character array and store it's value in a randomPassword varaible.
        const randomPassword1 = characters[passwordIndex1];
        const randomPassword2 = characters[passwordIndex2];

       // Concatenate the randomPassword to the password1 and password2 variables in other for it to become a string.  
       password1 += randomPassword1;
       password2 += randomPassword2;
    }

    passwordOne.value = password1;
    passwordTwo.value = password2;
};

// Codes for the copy password btn // These codes works when Copying from an input field or a text area element.
function copyPassword1() {
    passwordOne.select(); // The select method is used to select the text in the input field
    passwordOne.setSelectionRange(0, 99999); // The setSelectionRange() method sets the selection range of a text input field.
    document.execCommand("copy");
    
    // Displays copy success message
    if (passwordOne.value === "") {
        window.alert("Please generate password!");
    } else {
        window.alert("Copied Successfully!")
    }
}

function copyPassword2() {
    passwordTwo.select();
    passwordTwo.setSelectionRange(0, 99999);
    document.execCommand("copy");

    if (passwordTwo.value === "") {
        window.alert("Please generate password!");
    } else {
        window.alert("Copied Successfully!")
    }
}

