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

// Lista de vozes disponíveis
let vozes = [];

// Carrega as vozes do navegador
function carregarVozes() {

    vozes = speechSynthesis.getVoices();

}

// Alguns navegadores carregam as vozes depois da página
speechSynthesis.onvoiceschanged = carregarVozes;

// Carrega imediatamente (caso já estejam disponíveis)
carregarVozes();

document.getElementById("ler").onclick = function () {

    // Verifica se o navegador suporta síntese de voz
    if (!('speechSynthesis' in window)) {

        alert("Seu navegador não suporta leitura por voz.");

        return;

    }

    // Cancela qualquer leitura em andamento
    speechSynthesis.cancel();

    // Obtém o texto
    let texto = document.getElementById("texto").innerText;

    // Cria a fala
    let fala = new SpeechSynthesisUtterance(texto);

    // Configurações da voz
    fala.lang = "pt-BR";
    fala.rate = 1;      // velocidade
    fala.pitch = 1;     // tom
    fala.volume = 1;    // volume

    // Procura uma voz em português
    let vozPT = vozes.find(v =>
        v.lang === "pt-BR" ||
        v.lang.startsWith("pt")
    );

    // Se existir, utiliza-a
    if (vozPT) {
        fala.voice = vozPT;
    }

    // Inicia a leitura
    speechSynthesis.speak(fala);

};
