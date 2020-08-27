//Тоглогчийн ээлжийг хадгалах хувьсагч тоглогч нэг нь 0, тоглогч хоёр нь 1 гэж тэмдэглэлээ.
var activePlayer;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores;

//Идэвхтэй тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore;

// Тоглоомын бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая
// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;

//зурагны код
var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

//event
document.querySelector(".btn-roll").addEventListener("click", shooShid);
document.querySelector(".btn-hold").addEventListener("click", Hadgal);
document.querySelector(".btn-new").addEventListener("click", shineerehel);

shineerehel();

//functions
function shineerehel() {
    isNewGame = true;

    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;

    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    //DOM-оос тоглогчийн id-г олох
    document.getElementById('score-0').textContent = scores[0];
    document.getElementById('score-1').textContent = scores[1];

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    diceDom.style.display = "none";
}
function shooShid() {
    if(isNewGame) {
    //Шоог ямар талаараа буусныг илтгэх хувьсагч 1-6
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //Шооны зургийг гаргаж ирэх
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if(diceNumber !== 1){

        roundScore += diceNumber;

        document.getElementById('current-' + activePlayer).textContent = roundScore;

    } else {
        switchPlayer();
    }
} else {
    alert("New game товч дээр дарж тоглоомоо дахин эхлүүлээрэй.");
}
}
function Hadgal() {
    if(isNewGame) {

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer] += roundScore;

    if(scores[activePlayer] >= 100) {
        document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
        isNewGame = false;
    } else {
        switchPlayer();
    }
} else {
    alert("New game товч дээр дарж тоглоомоо дахин эхлүүлээрэй.");
}
}

function switchPlayer() {
    //Улаан цэгээ арилгах үйлдэл
    document.querySelector(".player-"+ activePlayer + "-panel").classList.remove("active");

    roundScore = 0;

    document.getElementById('current-' + activePlayer).textContent = roundScore;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Улаан цэгээ солих үйлдэл
    document.querySelector(".player-"+ activePlayer + "-panel").classList.add("active");
}

