const inputField = document.querySelector("#inputField");
const divs = document.querySelectorAll(".movie");

inputField.addEventListener("keyup", event => {
const word = event.target.value.toLowerCase();

divs.forEach(item => {
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display="block") : (item.style.display="none");
})
})
