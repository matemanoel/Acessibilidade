//======================================
// Detecta se o foco veio da tecla TAB
//======================================

let tabPressionado = false;

document.addEventListener("keydown", function(event){

    if(event.key === "Tab"){

        tabPressionado = true;

    }

});

//======================================
// Fala o elemento focado
//======================================

document.addEventListener("focusin", function(event){

    if(!tabPressionado) return;

    tabPressionado = false;

    speechSynthesis.cancel();

    let elemento = event.target;

    let texto = "";

    switch(elemento.tagName){

        case "H1":
        case "H2":
        case "H3":

            texto = "Título. " + elemento.innerText;
            break;

        case "P":

            texto = "Texto. " + elemento.innerText;
            break;

        case "FOOTER":

            texto = "Rodapé da página. " + elemento.innerText;
            break;

        case "FIGCAPTION":

            texto = "Texto da imagem. " + elemento.innerText;
            break;

        case "IMG":

            texto = "Imagem";
            break;

        case "BUTTON":

            texto = "Botão. " + elemento.innerText;
            break;

        case "A":

            texto = "Link. " + elemento.innerText;
            break;

        case "INPUT":

            let label = document.querySelector(
                "label[for='" + elemento.id + "']"
            );

            texto = label ?
                "Campo " + label.innerText :
                "Campo de texto";

            break;

        case "TEXTAREA":

            let legenda = document.querySelector(
                "label[for='" + elemento.id + "']"
            );

            texto = legenda ?
                "Área de texto " + legenda.innerText :
                "Área de texto";

            break;

    }

    if(texto !== ""){

        let fala = new SpeechSynthesisUtterance(texto);

        fala.lang = "pt-BR";
        fala.rate = 1;
        fala.pitch = 1;

        speechSynthesis.speak(fala);

    }

});

/* ==========================================
   AUMENTAR O TAMANHO DA FONTE
   ========================================== */

// Define o tamanho inicial da fonte em 18 pixels.
let tamanho = 18;

// Obtém o botão "A+" e executa a função quando ele for clicado.
document.getElementById("fonteMais").onclick = function () {

    // Aumenta o tamanho da fonte em 2 pixels.
    tamanho += 2;

    // Aplica o novo tamanho da fonte ao corpo da página.
    document.body.style.fontSize = tamanho + "px";

};


/* ==========================================
   DIMINUIR O TAMANHO DA FONTE
   ========================================== */

// Obtém o botão "A-" e executa a função quando ele for clicado.
document.getElementById("fonteMenos").onclick = function () {

    // Diminui o tamanho da fonte em 2 pixels.
    tamanho -= 2;

    // Atualiza o tamanho da fonte em toda a página.
    document.body.style.fontSize = tamanho + "px";

};


/* ==========================================
   ATIVAR/DESATIVAR O ALTO CONTRASTE
   ========================================== */

// Obtém o botão "Alto Contraste".
document.getElementById("contraste").onclick = function () {

    // Adiciona ou remove a classe "altoContraste"
    // sempre que o botão for pressionado.
    document.body.classList.toggle("altoContraste");

};


/* ==========================================
   ATIVAR/DESATIVAR O MODO ESCURO
   ========================================== */

// Obtém o botão "Modo Escuro".
document.getElementById("escuro").onclick = function () {

    // Adiciona ou remove a classe "dark",
    // alterando as cores da página.
    document.body.classList.toggle("dark");

};

/* ==========================================
   LEITURA COMPLETA DA PÁGINA
   ========================================== */

// Função para ler toda a página
function lerPagina() {

    // Interrompe qualquer leitura anterior
    speechSynthesis.cancel();

    // Seleciona os elementos que normalmente contêm texto
    const elementos = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, nav, li, footer, img, alt, label, figcaption, blockquote"
    );

    let textoCompleto = "";

    // Junta todos os textos em uma única string
    elementos.forEach(function(elemento){

        const texto = elemento.innerText.trim();

        if(texto !== ""){
            textoCompleto += texto + ". ";
        }

    });

    // Cria o objeto de fala
    const fala = new SpeechSynthesisUtterance(textoCompleto);

    fala.lang = "pt-BR";
    fala.rate = 1;     // velocidade
    fala.pitch = 1;    // tom
    fala.volume = 1;   // volume

    // Inicia a leitura
    speechSynthesis.speak(fala);
}

// Para interromper a leitura
function pararLeitura(){

    speechSynthesis.cancel();

}
