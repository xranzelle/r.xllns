const dropdown = document.querySelector(".dropdown");

const dropdownBtn =
    document.querySelector(".dropdown-toggle");

dropdownBtn.addEventListener("click", (e) => {

    if(window.innerWidth <= 700){

        e.preventDefault();

        dropdown.classList.toggle("active");
    }
});

