const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(button => {
    button.addEventListener("click", () => {

        filters.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        cards.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});