let home = document.getElementById('home');
let homeScore = 0;

function add1() {
    homeScore += 1;
    home.textContent = homeScore;
}
function add2() {
    homeScore += 2;
    home.textContent = homeScore;
}
function add3() {
    homeScore += 3;
    home.textContent = homeScore;
}
let away = document.getElementById('away');
let awayScore = 0;

function add1away() {
    awayScore += 1;
    away.textContent = awayScore;
}
function add2away() {
    awayScore += 2;
    away.textContent = awayScore;
}
function add3away() {
    awayScore += 3;
    away.textContent = awayScore;
}
function Restart() {
    homeScore = 0;
    home.textContent = homeScore;
    awayScore = 0;
    away.textContent = awayScore;
}