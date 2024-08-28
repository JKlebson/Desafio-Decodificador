const textoRecebido = document.querySelector(".textoRecebido");
let textoDevolvido = document.querySelector(".secaoResultado__textoDevolvido");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



// console.log(matrizCodigo);

function btn_encriptar (){
    const textoEncriptado = encriptar(textoRecebido.value);
    textoDevolvido.value = textoEncriptado;
    textoRecebido.value = "";
    removerFundo();
    mostrarBotaoCopiar();
}

function encriptar (mensagemEncriptar){
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]  ];
    mensagemEncriptar = mensagemEncriptar.toLowerCase(); //força a ter letras minúsculas

    for(let i=0; i<matrizCodigo.length; i++){
        if(mensagemEncriptar.includes(matrizCodigo[i][0]) ){
            mensagemEncriptar = mensagemEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]); 
        }
    }

    return mensagemEncriptar;
}

function btn_desencriptar (){
    const textoDesencriptado = desencriptar(textoRecebido.value);
    textoDevolvido.value = textoDesencriptado;
    textoRecebido.value = "";
    removerFundo();
    mostrarBotaoCopiar();
}

function desencriptar (mensagemDesencriptar){
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]  ];
    mensagemDesencriptar = mensagemDesencriptar.toLowerCase(); //força a ter letras minúsculas

    for(let i=0; i<matrizCodigo.length; i++){
        if(mensagemDesencriptar.includes(matrizCodigo[i][1]) ){
            mensagemDesencriptar = mensagemDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]); 
        }
    }

    return mensagemDesencriptar;
}

function removerFundo() {
    const div = document.querySelector(".secaoResultado__textoDevolvido");
    div.style.backgroundImage = "none";
    console.log("chamou remover fundo");
}

function mostrarBotaoCopiar() {
    const botaoCopiar = document.querySelector(".secaoResultado__botaoCopiar");
    botaoCopiar.style.display = "block"; // Torna o botão visível
}

function copiarTexto() {
    console.log("funcao COPIAR TEXTO");
    const texto = document.querySelector(".secaoResultado__textoDevolvido").value;
    navigator.clipboard.writeText(texto).then(() => {
        console.log("Texto copiado com sucesso!");
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
}