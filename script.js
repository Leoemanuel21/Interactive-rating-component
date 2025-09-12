const numberDOM = document.querySelectorAll('.menu_number');
const resultDOM = document.querySelector('.result');
let activeRatingNumber;

function select(number){
    const selectNumberDOM = numberDOM[number - 1];
    selectNumberDOM.classList.add('numberActive');

    if(activeRatingNumber){
        const activeRatingDOM = numberDOM[activeRatingNumber - 1];
        activeRatingDOM.classList.remove('numberActive');
    }

    activeRatingNumber = number;
}

function subimit(){
    if(!activeRatingNumber) return;

    const main = document.querySelector("main");
    const resposta = document.getElementById("resposta");
    main.style.display = "none";
    resposta.style.display = "flex";

    resultDOM.textContent = activeRatingNumber;
}