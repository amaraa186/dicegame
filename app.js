//Тоглогчийн ээлжийг хадгалах хувьсагч тоглогч нэг нь 0, тоглогч хоёр нь 1 гэж тэмдэглэлээ.
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Идэвхтэй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

//DOM-оос тоглогчийн id-г олох
document.getElementById('score-0').textContent = scores[0];
document.getElementById('score-1').textContent = scores[1];

//зурагны код
var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

//event
document.querySelector(".btn-roll").addEventListener("click", shooShid);
document.querySelector(".btn-hold").addEventListener("click", Hadgal);

//functions
function shooShid() {
    //Шоог ямар талаараа буусныг илтгэх хувьсагч 1-6
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    if(diceNumber !== 1){
        roundScore += diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        switch (activePlayer) {
            case 1: activePlayer = 0; break;
            case 0: activePlayer = 1;
        }
    }
}
function Hadgal() {
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer] += roundScore;
    if(scores[activePlayer] >= 100) {
        alert("Тоглогч " + (activePlayer + 1) + " та энэ тоглолтонд яллаа.");
    } else {
        roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    switch (activePlayer) {
        case 1: activePlayer = 0; break;
        case 0: activePlayer = 1;
    }
    }
}

