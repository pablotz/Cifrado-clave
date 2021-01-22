function Cifrar(){
     let textoNormal = document.getElementById('Uname').value
     let clave = document.getElementById('clave').value

     let claveAC = 0
     let temp  = 0
     let ascii = ''

     debugger

    for (let i = 0; i < clave.length; i++) {
        claveAC += clave.charCodeAt(i)
    }

    for (let i = 0; i < textoNormal.length; i++) {
        temp = textoNormal.charCodeAt(i) + claveAC
        ascii += String.fromCharCode(temp)  
    }
    document.getElementById('cifrado').innerHTML = ascii
}
function Descifrar() {
    
    var cifrado = document.getElementById('cifrado').value
    var clave = document.getElementById('clave').value

    let claveAC = 0
    let tempAC = 0
    let asciiDes = ''

    for (let i = 0; i < clave.length; i++) {
        claveAC += clave.charCodeAt(i)
    }

    for (let i = 0; i < cifrado.length; i++) {
        tempAC = cifrado.charCodeAt(i) - claveAC
        asciiDes += String.fromCharCode(tempAC)  
    }
    debugger
    alert("Desencriptado: " + asciiDes)

}

function CambiarPagSHA () {
        window.location.href = "cifradoSHA.html";
}

function CambiarPagAES () {
    window.location.href = "cifradoAES.html";
}

function CambiarPagRSA () {
    window.location.href = "cifradoRSA.html";
}

function CambiarPagClave () {
    window.location.href = "index.html";
}
