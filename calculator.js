let display = document.getElementById('display');

buttons = document.querySelectorAll('button'); // finding all html buttons and assigning them as buttons
let previousresult =''; // to store previous result
let value= ''; // to store value obtained after calcualtion intially it is set to empty string 

for (i of buttons) {
    i.addEventListener('click', (e) => {     // when the button is clicked the function inside this listener will be executed
        buttoninput = e.target.innerText;     // retrives text within a button
        console.log('Button text ', buttoninput);

        if (buttoninput == "="){
            try{
                previousresult= eval(value);
                display.value = previousresult;      // hiding the calculations and displaying only result
                value=previousresult;
                 }catch(error){                     // to display error
                display.value='Error';
            }
        }

        else if (buttoninput == 'AC') {
            value = "";
            display.value = value;
        }

        else if (buttoninput == 'X') {
            buttoninput = '*';
            value = value+buttoninput ;
            display.value = value;
        }
      

        else {
            value = value+buttoninput;
            display.value = value;
        }

    }
    )
}

