import { BurguerContainer } from "./styles";

function HamburguerMenu() {
    function animationBurguer() {
        const barTop = document.getElementsByClassName("bar")[0];
        const barMid = document.getElementsByClassName("bar")[1];
        const barBot = document.getElementsByClassName("bar")[2];

        const nav = document.getElementsByClassName("menu__toggle")[0];

        const container = document.querySelector("header");

        barTop.classList.toggle("bar--top");
        barMid.classList.toggle("bar--mid");
        barBot.classList.toggle("bar--bot");

        nav.style.display == "flex"
            ? (nav.style.display = "none")
            : (nav.style.display = "flex");

        container.style.flexDirection == "column"
            ? (container.style.flexDirection = "row")
            : (container.style.flexDirection = "column");
    }

    return (
        <BurguerContainer onClick={animationBurguer} className="burguer">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </BurguerContainer>
    );
}

export default HamburguerMenu;
