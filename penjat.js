//Creem una array de paraules amb les paraules que volem que sortin en el joc
var paraules = [
    ['ordinador'], ['videojoc'], ['playstation'], 
    ['taula'], ['shogo'], ['timesplitters'], ['torre'], 
    ['acuarius'], ['consola'], ['original'], ['regio'], 
    ['shader'], ['teclat'], ['ratoli'], ['estafador'],
    ['carter'], ['bomber'], ['policia'], ['heroi']
];
var paraula = ''; //Aquesta variable contindra la paraula amb la que es jugara
var guions = []; //Aqui guardarem els guions de la paraula jugada
var lletra_espais = document.getElementById("paraula"); //Lletra a jugar
var contador = 6; //Numero d'intents que quedan
var numFails = 1; //Numero de la image per la que va el jugador

/* Aquesta funció agafara una paraula de l'array*/
function generarParaula() {
    var  totalParaules = (paraules.length-1); //Agafem la longitud de l'array paraules -1
    random = (Math.random() * totalParaules).toFixed(0); //Creem un numero aleatori entre 0 i la longitd de paraules - 1
    paraula = paraules[random][0].toUpperCase(); //Assignme la paraula a la variable paraula
}
//generarParaula();

/*Aquesta funció rebra el numero total de lletres de la paraula escollida abans*/
function generarBarra(numLletres) {
    lletra_espais = document.getElementById("paraula"); //Agafem la paraula
    for (var i = 0; i < numLletres; i++) {
      guions[i] = "_"; //Afegim guions com numero de lletres tenim a la paraula
    }
    lletra_espais.innerHTML = guions.join(""); //Afegim al HTML el total de guions com lletres tingui la nostre paraula

}

//generateDash(paraula.length);
/*Aquesta funció creara els butons necesaris amb les lletres de l'alfabet per poder jugar al joc*/
function generarButons() {
    var lletraA = 'a'; //Creem una variable que contindra la lletra A
    var lletraZ = 'z'; //Creem una variable que contindra la lletra Z
    let i = lletraA.charCodeAt(0); //Agafem el codi ASCII de la lletra
    let j = lletraZ.charCodeAt(0);
    let letra = '';

    for( ; i<=j; i++) { //Recorrem desde la A fins a la Z
        letra = String.fromCharCode(i).toUpperCase(); //Agafem el codi del char de la lletra i el passem a majuscules
        document.getElementById("butons").innerHTML += "<button value='" + letra + "' onclick='comprovarLletra(\""+letra+"\")' class='letter' id='"+letra+"'>"+letra+"</button>"; //Despres afegim les lletres dins del div dels buttons amb la classe css corresponent
    }
}
//generarButons();

/*Funció que comprovara la lletra introduida per l'usuari si es bona o no*/
function comprovarLletra(lletra) {

    document.getElementById(lletra).disabled = true; //Deshabilitem el boto de la lletra
    document.getElementById(lletra).classList.remove("letter"); //Borrem  la classe del boto

    if(paraula.indexOf(lletra) != -1) { //Mirem si la lletra esta dins de la paraula
        for(var i = 0; i < paraula.length; i++) { //Recorrem la paraula
            if(paraula[i]==lletra) { //Si la lletra es igual a algune altre de la paraula
                guions[i] = lletra; //Canviem la barra baixa per la lletra en qüestió
            }
            lletra_espais.innerHTML = guions.join(""); 
            document.getElementById(lletra).classList.add("letter-correct"); //Afegim la class al boto
        }
    } else {
        contador--; //Restem 1 al comptador
        numFails++; //Sumem 1 al comptador de errors
        document.getElementById(lletra).classList.add("letter-incorrect"); //Afegim la class al boto de la lletra
        document.getElementById("intents").innerHTML = contador; //Canviem el numero restants d'intents
        document.getElementById("image").src = "hm"+numFails+".gif"; //Canviem la imatge del penjat
    }

    comprovarParaula(); //Cridem la funció que comprovara si l'usuari a guanyat o no
}

/*Funció que comprova si lk'usuari ha endevinat la paraula o no*/
function comprovarParaula() {
    if(contador==0) { //Si el comptador ha arribat a 0 signfica que l'usuari ha perdut perque no li quedan intents
    document.getElementById("butons").innerHTML = "<button value='Tornar a començar' onclick='reset()'>Tornar a començar</button>"; //Mostrem el boto de tornar a començar
    } else if (guions.indexOf("_") == -1) { //Si no quedan _ signifque que ja ha encertat totes les lletres i ha trobat al paraula
        document.getElementById("image").src = "youwin.jpg"; //Canviem la imatge per la imatge de guanyador
        document.getElementById("butons").innerHTML = "<button value='Tornar a començar' onclick='reset()'>Tornar a començar</button>"; //Mostrem el boto de tornar a començar
    }
}

/*Funció que borra tot i torna a cridar-ho*/
function reset() {
    //Possarem un altre vegades els valors inicials a totes les variables utilutzades
    var borrar1 = document.getElementById("butons");
    borrar1.innerHTML = "";
    paraula = '';
    guions = [];
    lletra_espais = document.getElementById("paraula");
    contador = 6;
    document.getElementById("intents").innerHTML = contador;
    numFails = 1;
    document.getElementById("image").src = "hm"+numFails+".gif";;
    //I tornarem a cridar la funció jugarJoc()
    jugarJoc();
}

/*Funció que cridara les altres funcions per començar a jugar*/
function jugarJoc() {
    generarParaula();
    generarBarra(paraula.length);
    generarButons();
}
//Carreguem el joc un cop s'ha carregat la pagina
window.onload = jugarJoc();

/*Funció que agafarea la tecla apretada per l'usuari i comprovara si es valida per el joc*/
function tecla(event) {
    //Agafar el keyCode
    var codigoTecla = event.keyCode;
    //Solament comprovarem si es una lletra sino no comprovarem la tecla apretada
    if(codigoTecla<=90 && codigoTecla>=65) {
       //Passem el codi a lletra
        var lletra = String.fromCharCode(codigoTecla);
        //Comprovem
        comprovarLletra(lletra);  
    }  
}