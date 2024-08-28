const encriptarBtn = document.querySelector('.btn-encriptar');
const desencriptarBtn = document.querySelector('.btn-desencriptar');
const mensajeEncriptadoTextarea = document.querySelector('.mensaje-encriptado');
const contenedorMuneco = document.querySelector('.contenedor-muneco');
const titulo = document.querySelector('.titulo');
const parrafo2 = document.querySelector('.parrafo2');
const mensajeResultante = document.querySelector('.mensaje-resultante');
const mensajeResultanteTexto = document.querySelector('.mensaje-resultante p');
const copiarBtn = document.querySelector('.btn-copiar');

function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        alert("Solo letras minúsculas y sin acentos");
        return false;
    }
    return true;
}

function mostrarResultado(resultado) {
    contenedorMuneco.classList.add('ocultar');
    titulo.classList.add('ocultar');
    parrafo2.classList.add('ocultar');
    mensajeResultante.classList.remove('ocultar');
    mensajeResultanteTexto.textContent = resultado;
}

encriptarBtn.addEventListener('click', () => {
    const texto = mensajeEncriptadoTextarea.value;
    if (validarTexto(texto)) {
        const textoEncriptado = encriptarTexto(texto);
        mostrarResultado(textoEncriptado);
    }
});

desencriptarBtn.addEventListener('click', () => {
    const texto = mensajeEncriptadoTextarea.value;
    if (validarTexto(texto)) {
        const textoDesencriptado = desencriptarTexto(texto);
        mostrarResultado(textoDesencriptado);
    }
});


copiarBtn.addEventListener('click', () => {
    
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = mensajeResultanteTexto.textContent;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alert("Texto copiado: " + mensajeResultanteTexto.textContent);
});
