/* syntaxe commonJS ou nodeJS */
var mod = require("./moduleCommon1.js") ;
mod("bouh !") ;

var greetings = require("./moduleCommonMany.js") ;
greetings.sayHello() ;
greetings.sayBye() ;


/* syntaxe ecmascript 2015 */
import truc from './moduleES1.js' ;
truc() ;

//n'importer qu'un ou deux éléments du module :
import {machin, valeur} from './moduleESMany.js' ;
machin() ;
alert(valeur) ;

/*
import * as objetContenantTout from './moduleESMany.js' ;
objetContenantTout.chouette() ;
console.log(objetContenantTout.valeur) ;
*/