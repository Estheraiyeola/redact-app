let textCollected = document.getElementById("text-to-be-worked-on");
let wordsCollected = document.getElementById("text-to-be-asterisked");
let button = document.getElementById("button");
let textGenerated = document.getElementById("text-generated");


function getText(){
    let realText = textCollected.value;
    const arrayOfWords = realText.split(' ');
    return arrayOfWords;
}
function findSelectedWords(){
    let selectedWords = wordsCollected.value;
    const arrayOfSelectedWords = selectedWords.split(', ')

    return arrayOfSelectedWords

    
}

function performAction(){
    let arrayOfWords = getText();
    let arrayOfSelectedWords = findSelectedWords();

    for (let index = 0; index < arrayOfSelectedWords.length; index++) {
        for (let idx = 0; idx < arrayOfWords.length; idx++) {
            if(arrayOfSelectedWords[index] === arrayOfWords[idx]){
                arrayOfWords[idx] = '*'.repeat(arrayOfWords[idx].length)
            }
        }
        
    }
    let newString = arrayOfWords.join(' ');
    textGenerated.innerText = newString;
    return newString;
}
button.addEventListener("click", function() {
    console.log(performAction());
});
