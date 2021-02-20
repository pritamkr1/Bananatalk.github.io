var talkBtn = document.querySelector('#btn');
var inputText = document.querySelector('textarea');

talkBtn.addEventListener('click', clickHandler)

function clickHandler(){
    console.log(inputText.value);

}