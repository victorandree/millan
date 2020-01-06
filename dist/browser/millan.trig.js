!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("trig",[],t):"object"==typeof exports?exports.trig=t():(e.millan=e.millan||{},e.millan.trig=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(t){for(var r,c,a=t[0],u=t[1],E=t[2],R=0,f=[];R<a.length;R++)c=a[R],o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(L&&L(t);f.length;)f.shift()();return i.push.apply(i,E||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={7:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var E=0;E<a.length;E++)t(a[E]);var L=u;return i.push([68,0,1]),n()}({13:function(e,t,n){"use strict";n.d(t,"a",function(){return TurtleParser});var r,o=n(0),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=n(9),u=a.turtleTokenTypes,E=a.turtleTokenMap,TurtleParser=function(e){function TurtleParser(t,n,r,i){void 0===t&&(t={}),void 0===n&&(n=u),void 0===r&&(r=n),void 0===i&&(i=!0);var a=e.call(this,n,c({outputCst:!0,recoveryEnabled:!0},t))||this;return a.namespacesMap={},a.semanticErrors=[],a.resetManagedState=function(){a.namespacesMap={},a.semanticErrors=[]},a.tokenize=function(e){return a.lexer.tokenize(e).tokens},a.parse=function(e,t){void 0===t&&(t="standard"),a.input=a.lexer.tokenize(e).tokens;var n=a.turtleDoc(0,[t]),r=a.errors.slice(),o=a.semanticErrors.slice();return a.resetManagedState(),{errors:r,semanticErrors:o,cst:n}},a.turtleDoc=a.RULE("turtleDoc",function(e){var t="stardog"===e;a.MANY(function(){return a.SUBRULE(a.statement,{ARGS:[t]})})}),a.statement=a.RULE("statement",function(e){a.OR([{ALT:function(){return a.SUBRULE(a.directive)}},{ALT:function(){a.SUBRULE(a.triples,{ARGS:[e]}),a.CONSUME(E.Period)}}])}),a.directive=a.RULE("directive",function(){a.OR([{ALT:function(){return a.SUBRULE(a.prefixID)}},{ALT:function(){return a.SUBRULE(a.base)}},{ALT:function(){return a.SUBRULE(a.sparqlPrefix)}},{ALT:function(){return a.SUBRULE(a.sparqlBase)}}])}),a.prefixID=a.RULE("prefixID",function(){a.CONSUME(E.TTL_PREFIX);var e=a.CONSUME(E.PNAME_NS),t=a.CONSUME(E.IRIREF),n=e.image.slice(0,-1),r=t.image;a.namespacesMap[n]=r,a.CONSUME(E.Period)}),a.base=a.RULE("base",function(){a.CONSUME(E.TTL_BASE),a.CONSUME(E.IRIREF),a.CONSUME(E.Period)}),a.sparqlBase=a.RULE("sparqlBase",function(){a.CONSUME(E.BASE),a.CONSUME(E.IRIREF)}),a.sparqlPrefix=a.RULE("sparqlPrefix",function(){a.CONSUME(E.PREFIX);var e=a.CONSUME(E.PNAME_NS),t=a.CONSUME(E.IRIREF),n=e.image.slice(0,-1),r=t.image;a.namespacesMap[n]=r}),a.triples=a.RULE("triples",function(e){a.OR([{ALT:function(){a.SUBRULE(a.subject),a.SUBRULE1(a.predicateObjectList,{ARGS:[e]})}},{GATE:function(){return Boolean(e)},ALT:function(){a.SUBRULE(a.EmbeddedTriplePattern),a.SUBRULE(a.predicateObjectList)}},{ALT:function(){a.SUBRULE(a.blankNodePropertyList,{ARGS:[e]}),a.OPTION(function(){return a.SUBRULE2(a.predicateObjectList,{ARGS:[e]})})}}])}),a.EmbeddedTriplePattern=a.RULE("EmbeddedTriplePattern",function(){a.CONSUME(E.LEmbed),a.SUBRULE(a.triples),a.CONSUME(E.REmbed)}),a.predicateObjectList=a.RULE("predicateObjectList",function(e){a.SUBRULE(a.verb),a.OR([{ALT:function(){return a.SUBRULE(a.objectList,{ARGS:[e]})}},{GATE:function(){return Boolean(e)},ALT:function(){a.SUBRULE(a.EmbeddedPredicateObjectList),a.SUBRULE(a.object,{ARGS:[e]})}}]),a.MANY(function(){a.CONSUME(E.Semicolon),a.OPTION(function(){a.SUBRULE1(a.verb),a.OR1([{ALT:function(){return a.SUBRULE1(a.objectList,{ARGS:[e]})}},{GATE:function(){return Boolean(e)},ALT:function(){a.SUBRULE1(a.EmbeddedPredicateObjectList),a.SUBRULE1(a.object,{ARGS:[e]})}}])})})}),a.EmbeddedPredicateObjectList=a.RULE("EmbeddedPredicateObjectList",function(){a.CONSUME(E.LCurly),a.SUBRULE(a.predicateObjectList),a.CONSUME(E.RCurly)}),a.subject=a.RULE("subject",function(){a.OR([{ALT:function(){return a.SUBRULE(a.iri)}},{ALT:function(){return a.SUBRULE(a.BlankNode)}},{ALT:function(){return a.SUBRULE(a.collection)}}])}),a.predicate=a.RULE("predicate",function(){a.SUBRULE(a.iri)}),a.objectList=a.RULE("objectList",function(e){a.SUBRULE(a.object,{ARGS:[e]}),a.MANY(function(){a.CONSUME(E.Comma),a.SUBRULE1(a.object,{ARGS:[e]})})}),a.verb=a.RULE("verb",function(){a.OR([{ALT:function(){return a.SUBRULE(a.predicate)}},{ALT:function(){return a.CONSUME(E.A)}}])}),a.literal=a.RULE("literal",function(){a.OR([{ALT:function(){return a.SUBRULE(a.RDFLiteral)}},{ALT:function(){return a.SUBRULE(a.NumericLiteral)}},{ALT:function(){return a.SUBRULE(a.BooleanLiteral)}}])}),a.blankNodePropertyList=a.RULE("blankNodePropertyList",function(e){a.CONSUME(E.LBracket),a.SUBRULE(a.predicateObjectList,{ARGS:[e]}),a.CONSUME(E.RBracket)}),a.object=a.RULE("object",function(e){a.OR([{ALT:function(){return a.SUBRULE(a.iri)}},{ALT:function(){return a.SUBRULE(a.BlankNode)}},{ALT:function(){return a.SUBRULE(a.collection)}},{ALT:function(){return a.SUBRULE(a.blankNodePropertyList,{ARGS:[e]})}},{ALT:function(){return a.SUBRULE(a.literal)}}])}),a.collection=a.RULE("collection",function(){a.CONSUME(E.LParen),a.MANY(function(){return a.SUBRULE(a.object)}),a.CONSUME(E.RParen)}),a.NumericLiteral=a.RULE("NumericLiteral",function(){a.OR([{ALT:function(){return a.CONSUME(E.INTEGER)}},{ALT:function(){return a.CONSUME(E.DECIMAL)}},{ALT:function(){return a.CONSUME(E.DOUBLE)}}])}),a.RDFLiteral=a.RULE("RDFLiteral",function(){a.SUBRULE(a.String),a.OPTION(function(){a.OR([{ALT:function(){return a.CONSUME(E.LANGTAG)}},{ALT:function(){a.CONSUME(E.DoubleCaret),a.SUBRULE(a.iri)}}])})}),a.BooleanLiteral=a.RULE("BooleanLiteral",function(){a.OR([{ALT:function(){return a.CONSUME(E.TRUE)}},{ALT:function(){return a.CONSUME(E.FALSE)}}])}),a.String=a.RULE("String",function(){a.OR([{ALT:function(){return a.CONSUME(E.STRING_LITERAL_QUOTE)}},{ALT:function(){return a.CONSUME(E.STRING_LITERAL_SINGLE_QUOTE)}},{ALT:function(){return a.CONSUME(E.STRING_LITERAL_LONG_SINGLE_QUOTE)}},{ALT:function(){return a.CONSUME(E.STRING_LITERAL_LONG_QUOTE)}}])}),a.iri=a.RULE("iri",function(){a.OR([{ALT:function(){return a.CONSUME(E.IRIREF)}},{ALT:function(){return a.SUBRULE(a.PrefixedName)}}])}),a.PrefixedName=a.RULE("PrefixedName",function(){var e=a.OR([{ALT:function(){return a.CONSUME(E.PNAME_LN)}},{ALT:function(){return a.CONSUME(E.PNAME_NS)}}]);e.image.slice(0,e.image.indexOf(":"))in a.namespacesMap||a.semanticErrors.push({name:"NoNamespacePrefixError",message:"A prefix was used for which there was no namespace defined.",token:e,context:{ruleStack:a.getHumanReadableRuleStack(),ruleOccurrenceStack:a.RULE_OCCURRENCE_STACK.slice()},resyncedTokens:[]})}),a.BlankNode=a.RULE("BlankNode",function(){a.OR([{ALT:function(){return a.CONSUME(E.BLANK_NODE_LABEL)}},{ALT:function(){return a.CONSUME(E.ANON)}}])}),a.lexer=new o.Lexer(r),i&&o.Parser.performSelfAnalysis(a),a}return i(TurtleParser,e),TurtleParser}(o.Parser)},42:function(e,t,n){"use strict";n.r(t),n.d(t,"trigTokenMap",function(){return a}),n.d(t,"trigTokenTypes",function(){return E});var r=n(9),o=n(5),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=n(9).turtleTokenTypes,a=i({GRAPH:o.sparqlTokenMap.GRAPH},r.turtleTokenMap),u=c.indexOf(r.turtleTokenMap.PN_CHARS_BASE),E=c.slice(0,u).concat([o.sparqlTokenMap.GRAPH],c.slice(u))},68:function(e,t,n){"use strict";n.r(t);var r,o=n(0),TurtleParser=n(13),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=n(42),a=c.trigTokenMap,u=c.trigTokenTypes,E=function(e){function TrigParser(t,n,r,i){void 0===n&&(n=u),void 0===r&&(r=u),void 0===i&&(i=!0);var c=e.call(this,t,n,r,!1)||this;return c.parse=function(e,t){void 0===t&&(t="standard"),c.input=c.lexer.tokenize(e).tokens;var n=c.trigDoc(0,[t]),r=c.errors.slice(),o=c.semanticErrors.slice();return c.resetManagedState(),{errors:r,semanticErrors:o,cst:n}},c.trigDoc=c.RULE("trigDoc",function(e){var t="stardog"===e;c.MANY(function(){c.OR([{ALT:function(){return c.SUBRULE(c.directive)}},{ALT:function(){return c.SUBRULE(c.block,{ARGS:[t]})}}])})}),c.block=c.RULE("block",function(e){c.OR([{ALT:function(){return c.SUBRULE(c.triplesOrGraph,{ARGS:[e]})}},{ALT:function(){return c.SUBRULE(c.wrappedGraph,{ARGS:[e]})}},{ALT:function(){return c.SUBRULE(c.triples2)}},{ALT:function(){c.CONSUME(a.GRAPH),c.SUBRULE(c.labelOrSubject),c.SUBRULE1(c.wrappedGraph,{ARGS:[e]})}}])}),c.triplesOrGraph=c.RULE("triplesOrGraph",function(e){var t=!1;c.OR([{ALT:function(){return c.SUBRULE(c.labelOrSubject)}},{GATE:function(){return Boolean(e)},ALT:function(){var e=c.SUBRULE(c.EmbeddedTriplePattern);t="EmbeddedTriplePattern"===e.name}}]),c.OR1([{GATE:function(){return!t},ALT:function(){return c.SUBRULE(c.wrappedGraph,{ARGS:[e]})}},{ALT:function(){c.SUBRULE(c.predicateObjectList),c.CONSUME(a.Period)}}])}),c.triples2=c.RULE("triples2",function(){c.OR([{ALT:function(){c.SUBRULE(c.blankNodePropertyList),c.OPTION(function(){return c.SUBRULE(c.predicateObjectList)}),c.CONSUME(a.Period)}},{ALT:function(){c.SUBRULE(c.collection),c.SUBRULE1(c.predicateObjectList),c.CONSUME1(a.Period)}}])}),c.wrappedGraph=c.RULE("wrappedGraph",function(e){c.CONSUME(a.LCurly),c.OPTION(function(){return c.SUBRULE(c.triplesBlock,{ARGS:[e]})}),c.CONSUME(a.RCurly)}),c.triplesBlock=c.RULE("triplesBlock",function(e){c.SUBRULE(c.triples,{ARGS:[e]}),c.OPTION(function(){c.CONSUME(a.Period),c.OPTION1(function(){return c.SUBRULE(c.triplesBlock,{ARGS:[e]})})})}),c.labelOrSubject=c.RULE("labelOrSubject",function(){c.OR([{ALT:function(){return c.SUBRULE(c.iri)}},{ALT:function(){return c.SUBRULE(c.BlankNode)}}])}),i&&o.Parser.performSelfAnalysis(c),c}return i(TrigParser,e),TrigParser}(TurtleParser.a);n.d(t,"trigTokens",function(){return L}),n.d(t,"TrigParser",function(){return E});var L=n(42)},9:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(2),i=n(3),c=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\[uU]|\\(.)/g,a={"\\":"\\","'":"'",'"':'"',n:"\n",r:"\r",t:"\t",f:"\f",b:"\b",_:"_","~":"~",".":".","-":"-","!":"!",$:"$","&":"&","(":"(",")":")","*":"*","+":"+",",":",",";":";","=":"=","/":"/","?":"?","#":"#","@":"@","%":"%"},u=/^"([^"\\\r\n]+)"/,E=/^'([^'\\\r\n]+)'/,L=/^"((?:[^"\\\r\n]|\\.)*)"(?=[^"])/,R=/^'((?:[^'\\\r\n]|\\.)*)'(?=[^'])/,f=/^"""([^"\\]*(?:(?:\\.|"(?!""))[^"\\]*)*)"""/,l=/^'''([^'\\]*(?:(?:\\.|'(?!''))[^'\\]*)*)'''/,U=/[\x00-\x20<>\\"\{\}\|\^\`]/,S=/^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/,s=/^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/,p=function(e){try{return e.replace(c,function(e,t,n,r){if(t)return String.fromCharCode(parseInt(t,16));if(n){var o=parseInt(n,16);return o<=65535?String.fromCharCode(o):String.fromCharCode(55296+(o-=65536)/1024,56320+(1023&o))}var i=a[r];if(!i)throw new Error;return i})}catch(e){return null}};n.d(t,"turtleTokenMap",function(){return A}),n.d(t,"turtleTokenTypes",function(){return N});var T=n(5).sparqlTokenMap,O=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,A={Comment:Object(r.createToken)({name:"Comment",pattern:/#[^\n]*/,group:"comments"}),LBracket:T.LBracket,RBracket:T.RBracket,LCurly:T.LCurly,RCurly:T.RCurly,LParen:T.LParen,RParen:T.RParen,Period:T.Period,WhiteSpace:T.WhiteSpace,TRUE:Object(r.createToken)({name:"TRUE",pattern:/true/}),FALSE:Object(r.createToken)({name:"FALSE",pattern:/false/}),DoubleCaret:T.DoubleCaret,LEmbed:T.LEmbed,REmbed:T.REmbed,Comma:T.Comma,Semicolon:T.Semicolon,A:T.A,PREFIX:T.PREFIX,BASE:T.BASE,PNAME_NS:T.PNAME_NS,PNAME_LN:T.PNAME_LN,BLANK_NODE_LABEL:T.BLANK_NODE_LABEL,TTL_BASE:Object(r.createToken)({name:"TTL_BASE",pattern:/@base/}),TTL_PREFIX:Object(r.createToken)({name:"TTL_PREFIX",pattern:/@prefix/}),LANGTAG:T.LANGTAG,INTEGER:Object(r.createToken)({name:"INTEGER",pattern:o.a.and(o.a.option(/[+-]/),/\d+/)}),DECIMAL:Object(r.createToken)({name:"DECIMAL",pattern:o.a.and(o.a.option(/[+-]/),/(\d*\.\d+)/)}),DOUBLE:Object(r.createToken)({name:"DOUBLE",pattern:o.a.and(o.a.option(/[+-]/),o.a.or(o.a.and(/\d+\.\d*/,i.k),o.a.and(/\.\d+/,i.k),o.a.and(/\d+/,i.k)))}),EXPONENT:Object(r.createToken)({name:"EXPONENT",pattern:i.k}),ECHAR:Object(r.createToken)({name:"ECHAR",pattern:i.j}),ANON:T.ANON,PLX:Object(r.createToken)({name:"PLX",pattern:i.t}),PERCENT:T.PERCENT,HEX:Object(r.createToken)({name:"HEX",pattern:i.l}),STRING_LITERAL_LONG_SINGLE_QUOTE:Object(r.createToken)({name:"STRING_LITERAL_LONG_SINGLE_QUOTE",pattern:function(e,t){void 0===t&&(t=0);var n=l.exec(e.slice(t));return n&&null!==p(n[1])?n:null},line_breaks:!0}),STRING_LITERAL_LONG_QUOTE:Object(r.createToken)({name:"STRING_LITERAL_LONG_QUOTE",pattern:function(e,t){void 0===t&&(t=0);var n=f.exec(e.slice(t));return n&&null!==p(n[1])?n:null},line_breaks:!0}),STRING_LITERAL_QUOTE:Object(r.createToken)({name:"STRING_LITERAL_QUOTE",pattern:function(e,t){void 0===t&&(t=0);var n=e.slice(t),r=u.exec(n);return r||((r=L.exec(n))?null===p(r[1])?null:r:null)},line_breaks:!1}),STRING_LITERAL_SINGLE_QUOTE:Object(r.createToken)({name:"STRING_LITERAL_SINGLE_QUOTE",pattern:function(e,t){void 0===t&&(t=0);var n=e.slice(t),r=E.exec(n);return r||((r=R.exec(n))?null===p(r[1])?null:r:null)},line_breaks:!1}),UCHAR:Object(r.createToken)({name:"UCHAR",pattern:function(e,t){return void 0===t&&(t=0),O.exec(e.slice(t))},line_breaks:!1}),IRIREF:Object(r.createToken)({name:"IRIREF",pattern:function(e,t){void 0===t&&(t=0);var n=e.slice(t),r=s.exec(n);if(r)return r;if(!(r=S.exec(n)))return null;var o=p(r[1]);return null===o||U.test(o)?null:r},line_breaks:!1}),PN_CHARS_BASE:Object(r.createToken)({name:"PN_CHARS_BASE",pattern:i.x}),PN_CHARS_U:Object(r.createToken)({name:"PN_CHARS_U",pattern:i.y}),PN_CHARS:Object(r.createToken)({name:"PN_CHARS",pattern:i.w}),PN_PREFIX:Object(r.createToken)({name:"PN_PREFIX",pattern:i.B}),PN_LOCAL:Object(r.createToken)({name:"PN_LOCAL",pattern:i.z}),PN_LOCAL_ESC:Object(r.createToken)({name:"PN_LOCAL_ESC",pattern:i.A}),Unknown:Object(r.createToken)({name:"Unknown",pattern:/\w+/})},N=[A.Comment,T.ANON,T.LBracket,T.RBracket,T.LCurly,T.RCurly,T.LParen,T.RParen,T.WhiteSpace,A.TRUE,A.FALSE,T.Comma,T.Semicolon,T.PNAME_NS,T.A,T.PREFIX,T.BASE,T.PNAME_LN,T.BLANK_NODE_LABEL,A.TTL_BASE,A.TTL_PREFIX,T.LANGTAG,A.DOUBLE,A.DECIMAL,T.Period,T.DoubleCaret,A.LEmbed,A.REmbed,A.IRIREF,A.STRING_LITERAL_LONG_SINGLE_QUOTE,A.STRING_LITERAL_LONG_QUOTE,A.STRING_LITERAL_QUOTE,A.STRING_LITERAL_SINGLE_QUOTE,A.INTEGER,A.EXPONENT,A.PLX,T.PERCENT,A.HEX,A.PN_CHARS_BASE,A.PN_CHARS_U,A.PN_CHARS,A.PN_PREFIX,A.PN_LOCAL,A.PN_LOCAL_ESC,A.ECHAR,A.UCHAR,A.Unknown]}})});
//# sourceMappingURL=millan.trig.js.map