/*var textName = "I am Pritam Kumar";
var testUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?textName=Pritam Kumar";
fetch(testUrl)
.then (response => response.json())
.then (json => console.log(json));*/

var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');
var eventBtn = document.querySelector('.btn-primary');

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" ;

function getTranslateUrl(text){
    return serverUrl + "?" + "text=" + text;
}
eventBtn.addEventListener('click', doTranslate);

function errorHandler(error){
    alert("something wrong happen! please try agian later.")
}

function doTranslate(){
    var inputTxt = inputText.value;
    console.log(inputTxt);

    fetch(getTranslateUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText; 
          })

    .catch(errorHandler)
}