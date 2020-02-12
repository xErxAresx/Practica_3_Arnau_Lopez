//Creem una array de paraules amb les paraules que volem que sortin en el joc
var paraules = [
    ['ordinador'], ['videojoc'], ['playstation'], 
    ['taula'], ['shogo'], ['timesplitters'], ['torre'], 
    ['acuarius'], ['consola'], ['original'], ['regio'], 
    ['shader'], ['teclat'], ['ratoli'], ['estafador'],
    ['carter'], ['bomber'], ['policia'], ['heroi']
];
var ಠ_ಠ861 = ''; //Aquesta variable contindra la ಠ_ಠ861 amb la que es jugara
var ಠ_ಠ862 = []; //Aqui guardarem els ಠ_ಠ862 de la ಠ_ಠ861 jugada
var ಠ_ಠ863 = document.getElementById("ಠ_ಠ861"); //Lletra a jugar
var ಠ_ಠ864 = 6; //Numero d'intents que quedan
var ಠ_ಠ865 = 1; //Numero de la image per la que va el jugador

/* Aquesta funció agafara una ಠ_ಠ861 de l'array*/
function ಠ_ಠ874() {
    var  ಠ_ಠ866 = (paraules.length-1); //Agafem la longitud de l'array paraules -1
    random = (Math.random() * ಠ_ಠ866).toFixed(0); //Creem un numero aleatori entre 0 ಠ_ಠ867 la longitd de paraules - 1
    ಠ_ಠ861 = paraules[random][0].toUpperCase(); //Assignme la ಠ_ಠ861 a la variable ಠ_ಠ861
}
//ಠ_ಠ874();

/*Aquesta funció rebra el numero total de lletres de la ಠ_ಠ861 escollida abans*/
function ಠ_ಠ875(ಠ_ಠ888) {
    ಠ_ಠ863 = document.getElementById("ಠ_ಠ861"); //Agafem la ಠ_ಠ861
    for (var ಠ_ಠ867 = 0; ಠ_ಠ867 < ಠ_ಠ888; ಠ_ಠ867++) {
      ಠ_ಠ862[ಠ_ಠ867] = "_"; //Afegim ಠ_ಠ862 com numero de lletres tenim a la ಠ_ಠ861
    }
    ಠ_ಠ863.ಠ_ಠ882 = ಠ_ಠ862.join(""); //Afegim al HTML el total de ಠ_ಠ862 com lletres tingui la nostre ಠ_ಠ861

}

//generateDash(ಠ_ಠ861.length);
/*Aquesta funció creara els butons necesaris amb les lletres de l'alfabet per poder jugar al joc*/
function ಠ_ಠ876() {
    var ಠ_ಠ868 = 'a'; //Creem una variable que contindra la ಠ_ಠ873 A
    var ಠ_ಠ869 = 'z'; //Creem una variable que contindra la ಠ_ಠ873 Z
    let ಠ_ಠ867 = ಠ_ಠ868.charCodeAt(0); //Agafem el codi ASCII de la ಠ_ಠ873
    let j = ಠ_ಠ869.charCodeAt(0);
    let letra = '';

    for( ; ಠ_ಠ867<=j; ಠ_ಠ867++) { //Recorrem desde la A fins a la Z
        letra = String.fromCharCode(ಠ_ಠ867).toUpperCase(); //Agafem el codi del char de la ಠ_ಠ873 ಠ_ಠ867 el passem a majuscules
        document.getElementById("butons").ಠ_ಠ882 += "<button value='" + letra + "' onclick='ಠ_ಠ877(\""+letra+"\")' class='letter' id='"+letra+"'>"+letra+"</button>"; //Despres afegim les lletres dins del div dels buttons amb la classe css corresponent
    }
}
//ಠ_ಠ876();

/*Funció que comprovara la ಠ_ಠ873 introduida per l'usuari si es bona o no*/
function ಠ_ಠ877(ಠ_ಠ873) {

    document.getElementById(ಠ_ಠ873).ಠ_ಠ883 = true; //Deshabilitem el boto de la ಠ_ಠ873
    document.getElementById(ಠ_ಠ873).classList.remove("letter"); //Borrem  la classe del boto

    if(ಠ_ಠ861.indexOf(ಠ_ಠ873) != -1) { //Mirem si la ಠ_ಠ873 esta dins de la ಠ_ಠ861
        for(var ಠ_ಠ867 = 0; ಠ_ಠ867 < ಠ_ಠ861.length; ಠ_ಠ867++) { //Recorrem la ಠ_ಠ861
            if(ಠ_ಠ861[ಠ_ಠ867]==ಠ_ಠ873) { //Si la ಠ_ಠ873 es igual a algune altre de la ಠ_ಠ861
                ಠ_ಠ862[ಠ_ಠ867] = ಠ_ಠ873; //Canviem la barra baixa per la ಠ_ಠ873 en qüestió
            }
            ಠ_ಠ863.ಠ_ಠ882 = ಠ_ಠ862.join(""); 
            document.getElementById(ಠ_ಠ873).classList.add("letter-correct"); //Afegim la class al boto
        }
    } else {
        ಠ_ಠ864--; //Restem 1 al comptador
        ಠ_ಠ865++; //Sumem 1 al comptador de errors
        document.getElementById(ಠ_ಠ873).classList.add("letter-incorrect"); //Afegim la class al boto de la ಠ_ಠ873
        document.getElementById("intents").ಠ_ಠ882 = ಠ_ಠ864; //Canviem el numero restants d'intents
        document.getElementById("image").ಠ_ಠ885 = "hm"+ಠ_ಠ865+".gif"; //Canviem la imatge del penjat
    }

    ಠ_ಠ878(); //Cridem la funció que comprovara si l'usuari a guanyat o no
}

/*Funció que comprova si lk'usuari ha endevinat la ಠ_ಠ861 o no*/
function ಠ_ಠ878() {
    if(ಠ_ಠ864==0) { //Si el comptador ha arribat a 0 signfica que l'usuari ha perdut perque no li quedan intents
    document.getElementById("butons").ಠ_ಠ882 = "<button value='Tornar a començar' onclick='ಠ_ಠ879()'>Tornar a començar</button>"; //Mostrem el boto de tornar a començar
    } else if (ಠ_ಠ862.indexOf("_") == -1) { //Si no quedan _ signifque que ja ha encertat totes les lletres ಠ_ಠ867 ha trobat al ಠ_ಠ861
        document.getElementById("image").ಠ_ಠ885 = "youwin.jpg"; //Canviem la imatge per la imatge de guanyador
        document.getElementById("butons").ಠ_ಠ882 = "<button value='Tornar a començar' onclick='ಠ_ಠ879()'>Tornar a començar</button>"; //Mostrem el boto de tornar a començar
    }
}

/*Funció que borra tot ಠ_ಠ867 torna a cridar-ho*/
function ಠ_ಠ879() {
    //Possarem un altre vegades els valors inicials a totes les variables utilutzades
    var ಠ_ಠ871 = document.getElementById("butons");
    ಠ_ಠ871.ಠ_ಠ882 = "";
    ಠ_ಠ861 = '';
    ಠ_ಠ862 = [];
    ಠ_ಠ863 = document.getElementById("ಠ_ಠ861");
    ಠ_ಠ864 = 6;
    document.getElementById("intents").ಠ_ಠ882 = ಠ_ಠ864;
    ಠ_ಠ865 = 1;
    document.getElementById("image").ಠ_ಠ885 = "hm"+ಠ_ಠ865+".gif";;
    //I tornarem a cridar la funció ಠ_ಠ880()
    ಠ_ಠ880();
}

/*Funció que cridara les altres funcions per començar a jugar*/
function ಠ_ಠ880() {
    ಠ_ಠ874();
    ಠ_ಠ875(ಠ_ಠ861.length);
    ಠ_ಠ876();
}
//Carreguem el joc un cop s'ha carregat la pagina
window.ಠ_ಠ887 = ಠ_ಠ880();

/*Funció que agafarea la ಠ_ಠ881 apretada per l'usuari ಠ_ಠ867 comprovara si es valida per el joc*/
function ಠ_ಠ881(ಠ_ಠ889) {
    //Agafar el keyCode
    var ಠ_ಠ872 = ಠ_ಠ889.keyCode;
    //Solament comprovarem si es una ಠ_ಠ873 sino no comprovarem la ಠ_ಠ881 apretada
    if(ಠ_ಠ872<=90 && ಠ_ಠ872>=65) {
       //Passem el codi a ಠ_ಠ873
        var ಠ_ಠ873 = String.fromCharCode(ಠ_ಠ872);
        //Comprovem
        ಠ_ಠ877(ಠ_ಠ873);  
    }  
}