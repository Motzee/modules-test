//syntaxe ecmascript 2015  pour une seule fonction
let truc = function() {
    let element = document.createElement("p") ;
    let t = document.createTextNode("test d'un ES2015 solitaire") ;
    element.appendChild(t) ;
    document.body.appendChild(element) ;
}

export default truc ;