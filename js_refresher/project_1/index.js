// initialize the count to 0
let count = 0;
let totalCount = 0;

let countEl = document.getElementById("count-el")
let prevEntries = document.getElementById("prev-entries")
let totalEntries = document.getElementById("total-entries")

// listen to the event increment-btn
function increment() {
    count += 1;   
    countEl.innerText = count;
}


// listen to the event save-btn
function save() {
    totalCount += count;
    prevEntries.textContent += " " + count + " - ";
    totalEntries.textContent = "Total: " + totalCount;
    countEl.innerText = 0;
    count = 0;
}

// listen to the event reset-btn
function reset() {
    countEl.innerText = 0;
    count = 0;
    totalCount = 0;
    prevEntries.textContent = "Previous Entries: ";
    totalEntries.textContent = "Total: " + totalCount;
}

