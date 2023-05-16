// responsive bars

const bars = document.querySelector(".bars");
const headerRightSide = document.querySelector(".header .rightSide");

bars.addEventListener("click", () =>  {
    bars.classList.toggle("active");
    headerRightSide.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth == 769) {
        bars.classList.remove("active");
        headerRightSide.classList.remove("active");
    }
});
//dark and light mode

const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");
const darkLightMode = document.querySelector(".dark_light_mode");

darkLightModeFun();
darkLightMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkLightModeFun();
})

function darkLightModeFun() {
    if (document.body.classList.contains("dark")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "flex";
    } else {
        moonIcon.style.display = "flex";
        sunIcon.style.display = "none";
    }
}

/*.heroPage {
    width: 100%;
    min-height: calc(100% - 80px);
    position: relative;
    top: 80px;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.heroPage .leftSide {
   width: 60%;
   display: flex;
   flex-direction: column;
   gap: 2rem;
}

.heroPage .leftSide .content {
   display: flex;
   flex-direction: column;
   gap: 2rem;
}

.heroPage .leftSide .content h1 {
   font-size: 70px;
   line-height: 100px;

}

.heroPage .leftSide .content p {
   width: 80%;
   color: var(--secondary-color);
} */
