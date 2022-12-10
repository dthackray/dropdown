const dropdownBtn = document.querySelector("#btn")
const dropdownMenu = document.querySelector("#dropdown")
const toggleArrow = document.querySelector("#arrow")

const toggleDropdown = () => {
    dropdownMenu.classList.toggle("show")
    toggleArrow.classList.toggle("arrow")
}

dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation()
    toggleDropdown()
})