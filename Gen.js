const EL_FROM_UI = {
    FORM: document.querySelector("#form"),
    INPUT: document.querySelector("#input"),
    RESULT:document.querySelector(".result"),
}
EL_FROM_UI.FORM.addEventListener("submit",getName);
const serverUrl = 'https://api.genderize.io';

function getName(event){
    let name = EL_FROM_UI.INPUT.value;
    if(name!==''){
        event.preventDefault();
        getResult(name); }
    else {alert('name is empty')};
};

function getResult(name){
    const url = `${serverUrl}?name=${name}`;
    let response = fetch(url);
    response
    .then(response=>response.json())
    .then((value) => {
        const gender = value.gender;
        showResult(gender, name)})
    .catch(function(){
        EL_FROM_UI.RESULT.textContent = `Нету ответа, попробуйте снова`
        EL_FROM_UI.RESULT.textContent = ''
    })
}

function showResult(name,gender){
    let result = EL_FROM_UI.RESULT;
    result.textContent = `${name} is ${gender}`;
}

