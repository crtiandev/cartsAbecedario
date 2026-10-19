const cards = document.querySelectorAll(".card");
const contadorSpan = document.getElementById("contador");
let letrasVistas = 0;

function voltear(card) {
    card.classList.toggle("volteada");

    if (card.classList.contains("volteada") && !card.classList.contains("vista")) {
        card.classList.add("vista");
        letrasVistas++;
        contadorSpan.textContent = letrasVistas;
    }
}

function filtrar(tipo) {
    for (let card of cards) {
        if (tipo === "todas" || card.dataset.tipo === tipo) {
            card.classList.remove("oculta");
        } else {
            card.classList.add("oculta");
        }
    }
}

for (let card of cards) {
    card.addEventListener("click", () => {
        voltear(card);
    });
}

const botonFiltro = document.getElementById("btn-filtro");
if (botonFiltro) {
    botonFiltro.addEventListener("click", () => {
        filtrar("todas");
    });
}