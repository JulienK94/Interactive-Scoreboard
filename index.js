let count = 0
let countG = 0

let homeScoreParagraph = document.getElementById("home-paragraph")
homeScoreParagraph.textContent = count

let guestScoreParagraph = document.getElementById("guest-paragraph")
guestScoreParagraph.textContent = countG

function addOne() {
    count += 1;
    homeScoreParagraph.textContent = count
}

function addTwo() {
    count += 2;
    homeScoreParagraph.textContent = count
}

function addThree() {
    count += 3;
    homeScoreParagraph.textContent = count
}

function addOneG() {
    countG += 1;
    guestScoreParagraph.textContent = countG
}

function addTwoG() {
    countG += 2;
    guestScoreParagraph.textContent = countG
}

function addThreeG() {
    countG += 3;
    guestScoreParagraph.textContent = countG
}
