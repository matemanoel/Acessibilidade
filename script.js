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
   LEITURA DO TEXTO POR VOZ
   ========================================== */

// Obtém o botão "Ler Página".
document.getElementById("ler").onclick = function () {

    // Obtém o conteúdo do parágrafo identificado pelo id "texto".
    let texto = document.getElementById("texto").innerText;

    // Cria um objeto de síntese de voz contendo o texto da página.
    let fala = new SpeechSynthesisUtterance(texto);

    // Define que a leitura será realizada em Português do Brasil.
    fala.lang = "pt-BR";

    // Inicia a leitura utilizando o sintetizador de voz do navegador.
    speechSynthesis.speak(fala);

};