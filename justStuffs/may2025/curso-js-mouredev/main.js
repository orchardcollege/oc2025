


document.addEventListener("DOMContentLoaded", () => {

    let title = document.querySelector("#title");
    let subtitle = document.querySelector("#subtitle");

    title.addEventListener("mouseenter", () => {
        console.log("title hovered");
        title.style.color = 'blue'
    });

    title.addEventListener("mouseleave", () => {
        console.log("title hovered");
        title.style.color = 'black'
    });

    subtitle.addEventListener("mouseenter", () => {
        console.log("subtitle hovered");
        subtitle.classList.add("change__background");
    });

    subtitle.addEventListener("mouseleave", () => {
        subtitle.classList.remove("change__background");
    });
});

