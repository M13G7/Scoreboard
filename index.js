

let homePt = document.getElementById("home-pt");
let guestPt = document.getElementById("guest-pt");


let homeScore = 0;
let guestScore = 0;

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
    guestScore += 1;
    guestPt.textContent = guestScore;
}

function add2GuestPoint() {
    guestScore += 2;
    guestPt.textContent = guestScore;
}

function add3GuestPoint() {
    guestScore += 3;
    guestPt.textContent = guestScore;
}

function clear_btn() {
    homeScore = 0;
    homePt.textContent = homeScore;
    guestPt.textContent = homeScore;
}



