

let homePt = document.getElementById("home-pt");
let awayPt = document.getElementById("away-pt");


let homeScore = 0;
let awayScore = 0;

function add1HomePoint() {
    homeScore += 1;
    homePt.textContent = homeScore;
}

function add2HomePoint() {
    homeScore += 2;
    homePt.textContent = homeScore;
}

function add3HomePoint() {
    homeScore += 3;
    homePt.textContent = homeScore;
}

function add1GuestPoint() {
    awayScore += 1;
    awayPt.textContent = awayScore;
}

function add2GuestPoint() {
    awayScore += 2;
    awayPt.textContent = awayScore;
}

function add3GuestPoint() {
    awayScore += 3;
    awayPt.textContent = awayScore;
}

function clear_btn() {
    homeScore = 0;
    homePt.textContent = homeScore;
    awayPt.textContent = awayScore;
}



