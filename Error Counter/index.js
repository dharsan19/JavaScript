let countpeople = document.getElementById("countpeople")
let saveel = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countpeople.innerText = count
}


function save() {
    let countstr = count + " - "
    saveel.textContent += countstr
    count = 0
    countpeople.textContent = count
}
