var requestURL = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200410T092658Z.cf3a68a6f9e389d9.bfb396491bbe729b40604539b23b2a40a0d153b9&lang=ru-en&text=';
var request = new XMLHttpRequest();
var parent = document.getElementById("block2");



function sendResponse(){
    parent.innerHTML = "";
    var enteredWord = document.getElementById("word").value; //получить значение из поля ввода
    var newRequestURL = requestURL+enteredWord; //изменить ссылку
    request.open('GET', newRequestURL); //открыть запрс
    request.responseType = 'json'; //тип запроса
    request.send(); //отправить запрос
}
document.getElementById("btn").onclick = sendResponse; //вызвать функцию по нажатию на кнопку 


request.onload = function() {
    var response = request.response;
    if (response.def.length === 0) {
        divTranslation.className = "notTranslation";
        divTranslation.innerText = "Слово в словаре не найдено";
        parent.appendChild(divTranslation);
    } else {
        afterResponce(response);
    } 
};

function afterResponce (response) {
    for (var i=0; i <= response.def[0].tr.length; i++){
    var translation = response.def[0].tr[i].text;
    var divTranslation =document.createElement("div");     
    divTranslation.className = "translation";
    divTranslation.innerText = translation;
    parent.appendChild(divTranslation);
    }
    
}