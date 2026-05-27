const stackCards = document.querySelectorAll('.stack-card');

const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentIndex = 0;

function updateStack() {

    stackCards.forEach((card, index) => {

        card.classList.remove('active');

        const position =
            (index - currentIndex + stackCards.length)
            % stackCards.length;

        /* FRONT CARD */

        if (position === 0) {

            card.style.transform =
                'rotate(0deg) translateY(0px) scale(1.02)';

            card.style.zIndex = 10;

            card.style.opacity = 1;

            card.classList.add('active');
        }

        /* SECOND CARD */

        else if (position === 1) {

            card.style.transform =
                'rotate(5deg) translateY(12px) scale(0.96)';

            card.style.zIndex = 5;

            card.style.opacity = 0.9;
        }

        /* THIRD CARD */

        else {

            card.style.transform =
                'rotate(-5deg) translateY(24px) scale(0.92)';

            card.style.zIndex = 1;

            card.style.opacity = 0.8;
        }

    });

}

/* NEXT BUTTON */

next.addEventListener('click', () => {

    currentIndex =
        (currentIndex + 1)
        % stackCards.length;

    updateStack();
});

/* PREV BUTTON */

prev.addEventListener('click', () => {

    currentIndex =
        (currentIndex - 1 + stackCards.length)
        % stackCards.length;

    updateStack();
});

/* CLICK IMAGE = NEXT */

stackCards.forEach((card) => {

    card.addEventListener('click', () => {

        currentIndex =
            (currentIndex + 1)
            % stackCards.length;

        updateStack();
    });

});

/* INITIALIZE */

updateStack();