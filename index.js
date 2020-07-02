
function convert() {
    let pkr = document.getElementById("inp").value
    let dollar = pkr *161
    let para = document.getElementById("para")
    para.innerHTML = `${dollar} PKR`
}