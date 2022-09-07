let scoreHome = 0
let scoreGuest = 0
document.getElementById("scr-home-el").textContent = scoreHome
document.getElementById("scr-guest-el").textContent = scoreGuest

function incrementHome() {
    scoreHome ++
    document.getElementById("scr-home-el").textContent = scoreHome
}

function incrementGuest() {
    scoreGuest ++
    document.getElementById("scr-guest-el").textContent = scoreGuest
}

function resetHome() {
    scoreHome = 0
    document.getElementById("scr-home-el").textContent = scoreHome
}

function resetGuest() {
    scoreGuest = 0
    document.getElementById("scr-guest-el").textContent = scoreGuest
}