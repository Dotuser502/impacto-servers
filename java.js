// ================================
// PAINEL LATERAL
// ================================

const painel = document.querySelector(".painel");
const abrirPainel = document.getElementById("abrirPainel");
const fecharPainel = document.getElementById("fecharPainel");

if (painel && abrirPainel) {
    abrirPainel.addEventListener("click", function () {
        painel.classList.add("aberto");
    });
}

if (painel && fecharPainel) {
    fecharPainel.addEventListener("click", function () {
        painel.classList.remove("aberto");
    });
}


// ================================
// CONTADOR DE JOGADORES
// ================================

const botoes = document.querySelectorAll(".button");

botoes.forEach(function (botao) {

    const card = botao.parentElement;
    const jogador = card.querySelector(".Jogadores");

    if (!jogador) {
        return;
    }

    let ativos = 0;

    botao.addEventListener("click", function () {

        if (ativos < 10) {

            ativos++;

            jogador.textContent = `Jogadores: ${ativos}/10`;

            alert("Conectando");

        } else {

            botao.textContent = "Servidor cheio";

            alert("Servidor cheio");

        }

    });

});


// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const elementos = document.querySelectorAll(".reveal");

if (elementos.length > 0) {

    const observer = new IntersectionObserver(function (elementosVisiveis) {

        elementosVisiveis.forEach(function (elemento) {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("show");

                observer.unobserve(elemento.target);

            }

        });

    }, {
        threshold: 0.15
    });


    elementos.forEach(function (elemento) {

        observer.observe(elemento);

    });

}


// ================================
// TROCA DE PÁGINA
// ================================

const links = document.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const destino = link.href;

        // Link externo
        if (link.hostname !== window.location.hostname) {
            return;
        }

        // Link para uma parte da mesma página
        if (link.getAttribute("href").startsWith("#")) {
            return;
        }

        // Não possui destino
        if (!destino) {
            return;
        }

        event.preventDefault();

        document.body.classList.add("page-exit");

        setTimeout(function () {

            window.location.href = destino;

        }, 500);

    });

});