const projects =
    document.querySelectorAll(".project");

projects.forEach((project) => {

    const slides =
        project.querySelector(".slides");

    const slide =
        project.querySelectorAll(".slide");

    const dots =
        project.querySelectorAll(".dot");

    const prev =
        project.querySelector(".prev");

    const next =
        project.querySelector(".next");

    let index = 0;

    function updateSlider() {

        slides.style.transform =
            `translateX(-${index * 100}%)`;

        dots.forEach(dot =>
            dot.classList.remove("active")
        );

        dots[index].classList.add("active");
    }

    next.addEventListener("click", () => {

        index++;

        if (index >= slide.length) {

            index = 0;
        }

        updateSlider();
    });

    prev.addEventListener("click", () => {

        index--;

        if (index < 0) {

            index = slide.length - 1;
        }

        updateSlider();
    });

    dots.forEach((dot, i) => {

        dot.addEventListener("click", () => {

            index = i;

            updateSlider();
        });

    });

});