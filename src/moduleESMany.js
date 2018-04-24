//syntaxe ecmascript 2015
export function machin() {
    let element = document.createElement("p") ;
    let t = document.createTextNode("Je suis un machin") ;
    element.appendChild(t) ;
    document.body.appendChild(element) ;
}

export function chouette() {
    let element = document.createElement("p") ;
    let t = document.createTextNode("Je suis chouette :-D") ;
    element.appendChild(t) ;
    document.body.appendChild(element) ;
}

export var valeur = 42 ;