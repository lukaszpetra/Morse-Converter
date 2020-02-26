var letters = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
                'p','q','r','s','t','u','v','w','x','y','z'];

var morseCode = [" ",".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
                "-.-",".-..","--","-.","---",".--.","--.-",".-.","...",
                "-","..-","...-",".--","-..-","-.--","..--"];

function convertTextToMorse(){
    var userText = document.getElementById("textToChange").value;
    textToCode = userText.split('');
    
    var textMorse = "";
    
    for(var i = 0; i <textToCode.length;i++){
        for(var j=0; j<morseCode.length; j++){
            if(textToCode[i] == letters[j]){
                textMorse+=morseCode[j];
                textMorse+="  ";
            }
        }
    }
    
    var answer = document.getElementById("newText").innerHTML = textMorse;

}