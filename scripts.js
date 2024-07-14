function botaoCriptografar() {
    const inputTexto = document.getElementById("esquerda-input").value;
    if (inputTexto.trim() === "") {
        alert("Por favor, insira uma mensagem para criptografar.");
        return;
    }
    const textoCriptografado = criptografarTexto(inputTexto);
    document.getElementById("saidaTexto").innerText = textoCriptografado;
    document.getElementById("direitaOrientacoes").style.display = "none";
    document.getElementById("direitaResultado").style.display = "block";
    document.getElementById('botaoCopiar').style.display = 'block';
}

function botaoDescriptografar() {
    const inputTexto = document.getElementById("esquerda-input").value;
    if (inputTexto.trim() === "") {
        alert("Por favor, insira uma mensagem para descriptografar.");
        return;
    }
    const textoDescriptografado = descriptografarTexto(inputTexto);
    document.getElementById("saidaTexto").innerText = textoDescriptografado;
    document.getElementById("direitaOrientacoes").style.display = "none";
    document.getElementById("direitaResultado").style.display = "block";
    document.getElementById('botaoCopiar').style.display = 'block';
}

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copiar() {
    const texto = document.getElementById("saidaTexto").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}