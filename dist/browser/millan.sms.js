!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("sms",[],n):"object"==typeof exports?exports.sms=n():(e.millan=e.millan||{},e.millan.sms=n())}("undefined"!=typeof self?self:this,function(){return function(e){function n(n){for(var r,u,E=n[0],L=n[1],c=n[2],l=0,U=[];l<E.length;l++)u=E[l],o[u]&&U.push(o[u][0]),o[u]=0;for(r in L)Object.prototype.hasOwnProperty.call(L,r)&&(e[r]=L[r]);for(a&&a(n);U.length;)U.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,E=1;E<t.length;E++){var L=t[E];0!==o[L]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={4:0},i=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var E=("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[],L=E.push.bind(E);E.push=n,E=E.slice();for(var c=0;c<E.length;c++)n(E[c]);var a=L;return i.push([67,0,1]),t()}({40:function(e,n,t){"use strict";t.r(n),t.d(n,"smsTokenMap",function(){return L}),t.d(n,"smsTokenTypes",function(){return c});var r=t(0),o=t(5).sparqlTokenMap,i=/^\s*to\s*{/i,u=/((?:.|\s)*?)to\s*{/i,E=function(e,n,t){for(var r=0;r<e.length;r++)if(e[r]!==n);else{var o=e.slice(r+1);if(t.exec(o))return[e.slice(0,r)]}return null},L={STRING_LITERAL1:o.STRING_LITERAL1,STRING_LITERAL2:o.STRING_LITERAL2,STRING_LITERAL_LONG1:o.STRING_LITERAL_LONG1,STRING_LITERAL_LONG2:o.STRING_LITERAL_LONG2,IRIREF:o.IRIREF,PNAME_LN:o.PNAME_LN,PNAME_NS:o.PNAME_NS,NIL:o.NIL,DISTINCT:o.DISTINCT,VAR1:o.VAR1,VAR2:o.VAR2,BIND:o.BIND,AS:o.AS,WHERE:o.WHERE,LANGTAG:o.LANGTAG,INTEGER:o.INTEGER,DECIMAL:o.DECIMAL,DOUBLE:o.DOUBLE,INTEGER_POSITIVE:o.INTEGER_POSITIVE,DECIMAL_POSITIVE:o.DECIMAL_POSITIVE,DOUBLE_POSITIVE:o.DOUBLE_POSITIVE,INTEGER_NEGATIVE:o.INTEGER_NEGATIVE,DECIMAL_NEGATIVE:o.DECIMAL_NEGATIVE,DOUBLE_NEGATIVE:o.DOUBLE_NEGATIVE,TRUE:o.TRUE,FALSE:o.FALSE,BLANK_NODE_LABEL:o.BLANK_NODE_LABEL,ANON:o.ANON,A:o.A,FROM:o.FROM,PREFIX:o.PREFIX,Comment:o.Comment,Period:o.Period,Comma:o.Comma,LCurly:o.LCurly,RCurly:o.RCurly,LParen:o.LParen,RParen:o.RParen,WhiteSpace:o.WhiteSpace,DoubleCaret:o.DoubleCaret,Semicolon:o.Semicolon,LBracket:o.LBracket,RBracket:o.RBracket,Template:Object(r.createToken)({name:"Template",pattern:/template/i}),TO:Object(r.createToken)({name:"TO",pattern:/to/i}),Sql:Object(r.createToken)({name:"Sql",pattern:/sql/i}),GraphQl:Object(r.createToken)({name:"GraphQl",pattern:/graphql/i}),Json:Object(r.createToken)({name:"Json",pattern:/json/i}),Mapping:Object(r.createToken)({name:"Mapping",pattern:/mapping/i}),SqlBlock:Object(r.createToken)({name:"SqlBlock",pattern:function(e,n,t){void 0===n&&(n=0);var r=t.slice(-2),o=r[0],u=r[1];if(!o||!u||o.tokenType.tokenName!==L.Sql.tokenName||u.tokenType.tokenName!==L.LCurly.tokenName)return null;var c=e.slice(n);return E(c,"}",i)},line_breaks:!0}),JsonBlock:Object(r.createToken)({name:"JsonBlock",pattern:function(e,n,t){void 0===n&&(n=0);var r=t.slice(-1)[0];if(!r||r.tokenType.tokenName!==L.Json.tokenName)return null;var o=e.slice(n),i=u.exec(o);return i?i.slice(1):null},line_breaks:!0}),GraphQlBlock:Object(r.createToken)({name:"GraphQlBlock",pattern:function(e,n,t){void 0===n&&(n=0);var r=t.slice(-2),o=r[0],u=r[1];if(!o||!u||o.tokenType.tokenName!==L.GraphQl.tokenName||u.tokenType.tokenName!==L.LCurly.tokenName)return null;var c=e.slice(n);return E(c,"}",i)},line_breaks:!0})},c=[L.WhiteSpace,L.Comment,L.LParen,L.RParen,L.Period,L.Template,L.IRIREF,L.PNAME_LN,L.PNAME_NS,L.NIL,L.DISTINCT,L.VAR1,L.VAR2,L.BIND,L.AS,L.WHERE,L.TO,L.LANGTAG,L.INTEGER,L.DECIMAL,L.DOUBLE,L.INTEGER_POSITIVE,L.DECIMAL_POSITIVE,L.DOUBLE_POSITIVE,L.INTEGER_NEGATIVE,L.DECIMAL_NEGATIVE,L.DOUBLE_NEGATIVE,L.TRUE,L.FALSE,L.BLANK_NODE_LABEL,L.ANON,L.A,L.FROM,L.PREFIX,L.Comma,L.DoubleCaret,L.Semicolon,L.LBracket,L.RBracket,L.Sql,L.GraphQl,L.Json,L.Mapping,L.SqlBlock,L.JsonBlock,L.GraphQlBlock,L.LCurly,L.RCurly,L.STRING_LITERAL1,L.STRING_LITERAL2,L.STRING_LITERAL_LONG1,L.STRING_LITERAL_LONG2]},67:function(e,n,t){"use strict";t.r(n);var r,o=t(0),i=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},E=t(40),L=E.smsTokenTypes,c=E.smsTokenMap,a=function(e){function SmsParser(n){var t=e.call(this,L,u({outputCst:!0,recoveryEnabled:!0},n))||this;return t.tokenize=function(e){return t.lexer.tokenize(e).tokens},t.parse=function(e){t.input=t.lexer.tokenize(e).tokens;var n=t.MappingDoc();return{errors:t.errors,cst:n}},t.MappingDoc=t.RULE("MappingDoc",function(){t.MANY(function(){return t.SUBRULE(t.PrefixDecl)}),t.OPTION(function(){t.SUBRULE(t.MappingClause),t.MANY1(function(){t.CONSUME(c.Semicolon),t.SUBRULE1(t.MappingClause)})})}),t.MappingClause=t.RULE("MappingClause",function(){t.SUBRULE(t.MappingDecl),t.SUBRULE(t.FromClause),t.SUBRULE(t.ToClause),t.SUBRULE(t.WhereClause)}),t.MappingDecl=t.RULE("MappingDecl",function(){t.CONSUME(c.Mapping),t.OPTION(function(){return t.SUBRULE(t.iri)})}),t.FromClause=t.RULE("FromClause",function(){t.CONSUME(c.FROM),t.OR([{ALT:function(){return t.SUBRULE(t.SqlClause)}},{ALT:function(){return t.SUBRULE(t.JsonClause)}},{ALT:function(){return t.SUBRULE(t.GraphQlClause)}}])}),t.JsonClause=t.RULE("JsonClause",function(){t.CONSUME(c.Json),t.CONSUME(c.JsonBlock)}),t.GraphQlClause=t.RULE("GraphQlClause",function(){t.CONSUME(c.GraphQl),t.CONSUME(c.LCurly),t.CONSUME(c.GraphQlBlock),t.CONSUME(c.RCurly)}),t.SqlClause=t.RULE("SqlClause",function(){t.CONSUME(c.Sql),t.CONSUME(c.LCurly),t.CONSUME(c.SqlBlock),t.CONSUME(c.RCurly)}),t.ToClause=t.RULE("ToClause",function(){t.CONSUME(c.TO),t.SUBRULE(t.ConstructTemplate)}),t.WhereClause=t.RULE("WhereClause",function(){t.CONSUME(c.WHERE),t.CONSUME(c.LCurly),t.MANY(function(){return t.SUBRULE(t.Bind)}),t.CONSUME(c.RCurly)}),t.Bind=t.RULE("Bind",function(){t.CONSUME(c.BIND),t.CONSUME(c.LParen),t.SUBRULE(t.TemplateOrCast),t.CONSUME(c.AS),t.SUBRULE(t.Var),t.CONSUME(c.RParen)}),t.TemplateOrCast=t.RULE("TemplateOrCast",function(){t.OR([{ALT:function(){return t.SUBRULE(t.TemplateFunc)}},{ALT:function(){return t.SUBRULE(t.CastFunc)}}])}),t.CastFunc=t.RULE("CastFunc",function(){t.SUBRULE(t.iri),t.CONSUME(c.LParen),t.SUBRULE(t.Var),t.CONSUME(c.RParen)}),t.TemplateFunc=t.RULE("TemplateFunc",function(){t.CONSUME(c.Template),t.CONSUME(c.LParen),t.SUBRULE(t.String),t.CONSUME(c.RParen)}),t.PrefixDecl=t.RULE("PrefixDecl",function(){t.CONSUME(c.PREFIX),t.CONSUME(c.PNAME_NS),t.CONSUME(c.IRIREF)}),t.iri=t.RULE("iri",function(){t.OR([{ALT:function(){return t.CONSUME(c.IRIREF)}},{ALT:function(){return t.SUBRULE(t.PrefixedName)}}])}),t.PrefixedName=t.RULE("PrefixedName",function(){t.OR([{ALT:function(){return t.CONSUME(c.PNAME_LN)}},{ALT:function(){return t.CONSUME(c.PNAME_NS)}}])}),t.ConstructTemplate=t.RULE("ConstructTemplate",function(){t.CONSUME(c.LCurly),t.OPTION(function(){return t.SUBRULE(t.ConstructTriples)}),t.CONSUME(c.RCurly)}),t.ConstructTriples=t.RULE("ConstructTriples",function(){t.SUBRULE(t.TriplesSameSubject),t.OPTION(function(){t.CONSUME(c.Period),t.OPTION1(function(){return t.SUBRULE(t.ConstructTriples)})})}),t.TriplesSameSubject=t.RULE("TriplesSameSubject",function(){t.OR([{ALT:function(){t.SUBRULE(t.VarOrTerm),t.SUBRULE(t.PropertyListNotEmpty)}},{ALT:function(){t.SUBRULE(t.TriplesNode),t.SUBRULE(t.PropertyList)}}])}),t.VarOrTerm=t.RULE("VarOrTerm",function(){t.OR([{ALT:function(){return t.SUBRULE(t.Var)}},{ALT:function(){return t.SUBRULE(t.GraphTerm)}}])}),t.PropertyListNotEmpty=t.RULE("PropertyListNotEmpty",function(){t.SUBRULE(t.Verb),t.SUBRULE(t.ObjectList),t.MANY(function(){t.CONSUME(c.Semicolon),t.OPTION(function(){t.SUBRULE1(t.Verb),t.SUBRULE1(t.ObjectList)})})}),t.TriplesNode=t.RULE("TriplesNode",function(){t.OR([{ALT:function(){return t.SUBRULE(t.Collection)}},{ALT:function(){return t.SUBRULE(t.BlankNodePropertyList)}}])}),t.PropertyList=t.RULE("PropertyList",function(){t.OPTION(function(){return t.SUBRULE(t.PropertyListNotEmpty)})}),t.GraphTerm=t.RULE("GraphTerm",function(){t.OR([{ALT:function(){return t.SUBRULE(t.iri)}},{ALT:function(){return t.SUBRULE(t.RDFLiteral)}},{ALT:function(){return t.SUBRULE(t.NumericLiteral)}},{ALT:function(){return t.SUBRULE(t.BooleanLiteral)}},{ALT:function(){return t.SUBRULE(t.BlankNode)}},{ALT:function(){return t.CONSUME(c.NIL)}}])}),t.Verb=t.RULE("Verb",function(){t.OR([{ALT:function(){return t.SUBRULE(t.VarOrIri)}},{ALT:function(){return t.CONSUME(c.A)}}])}),t.ObjectList=t.RULE("ObjectList",function(){t.AT_LEAST_ONE_SEP({SEP:c.Comma,DEF:function(){return t.SUBRULE(t.Object)}})}),t.Object=t.RULE("Object",function(){t.SUBRULE(t.GraphNode)}),t.Collection=t.RULE("Collection",function(){t.CONSUME(c.LParen),t.AT_LEAST_ONE(function(){return t.SUBRULE(t.GraphNode)}),t.CONSUME(c.RParen)}),t.BlankNodePropertyList=t.RULE("BlankNodePropertyList",function(){t.CONSUME(c.LBracket),t.SUBRULE(t.PropertyListNotEmpty),t.CONSUME(c.RBracket)}),t.VarOrIri=t.RULE("VarOrIri",function(){t.OR([{ALT:function(){return t.SUBRULE(t.Var)}},{ALT:function(){return t.SUBRULE(t.iri)}}])}),t.RDFLiteral=t.RULE("RDFLiteral",function(){t.SUBRULE(t.String),t.OPTION(function(){return t.OR([{ALT:function(){return t.CONSUME(c.LANGTAG)}},{ALT:function(){t.CONSUME(c.DoubleCaret),t.SUBRULE(t.iri)}}])})}),t.NumericLiteral=t.RULE("NumericLiteral",function(){t.OR([{ALT:function(){return t.SUBRULE(t.NumericLiteralUnsigned)}},{ALT:function(){return t.SUBRULE(t.NumericLiteralPositive)}},{ALT:function(){return t.SUBRULE(t.NumericLiteralNegative)}}])}),t.NumericLiteralUnsigned=t.RULE("NumericLiteralUnsigned",function(){t.OR([{ALT:function(){return t.CONSUME(c.INTEGER)}},{ALT:function(){return t.CONSUME(c.DECIMAL)}},{ALT:function(){return t.CONSUME(c.DOUBLE)}}])}),t.NumericLiteralPositive=t.RULE("NumericLiteralPositive",function(){t.OR([{ALT:function(){return t.CONSUME(c.INTEGER_POSITIVE)}},{ALT:function(){return t.CONSUME(c.DECIMAL_POSITIVE)}},{ALT:function(){return t.CONSUME(c.DOUBLE_POSITIVE)}}])}),t.NumericLiteralNegative=t.RULE("NumericLiteralNegative",function(){t.OR([{ALT:function(){return t.CONSUME(c.INTEGER_NEGATIVE)}},{ALT:function(){return t.CONSUME(c.DECIMAL_NEGATIVE)}},{ALT:function(){return t.CONSUME(c.DOUBLE_NEGATIVE)}}])}),t.BooleanLiteral=t.RULE("BooleanLiteral",function(){t.OR([{ALT:function(){return t.CONSUME(c.TRUE)}},{ALT:function(){return t.CONSUME(c.FALSE)}}])}),t.BlankNode=t.RULE("BlankNode",function(){t.OR([{ALT:function(){return t.CONSUME(c.BLANK_NODE_LABEL)}},{ALT:function(){return t.CONSUME(c.ANON)}}])}),t.GraphNode=t.RULE("GraphNode",function(){t.OR([{ALT:function(){return t.SUBRULE(t.VarOrTerm)}},{ALT:function(){return t.SUBRULE(t.TriplesNode)}}])}),t.Var=t.RULE("Var",function(){t.OR([{ALT:function(){return t.CONSUME(c.VAR1)}},{ALT:function(){return t.CONSUME(c.VAR2)}}])}),t.String=t.RULE("String",function(){t.OR([{ALT:function(){return t.CONSUME(c.STRING_LITERAL1)}},{ALT:function(){return t.CONSUME(c.STRING_LITERAL2)}},{ALT:function(){return t.CONSUME(c.STRING_LITERAL_LONG1)}},{ALT:function(){return t.CONSUME(c.STRING_LITERAL_LONG2)}}])}),t.lexer=new o.Lexer(L),o.Parser.performSelfAnalysis(t),t}return i(SmsParser,e),SmsParser}(o.Parser);t.d(n,"smsTokens",function(){return l}),t.d(n,"SmsParser",function(){return a});var l=t(40)}})});
//# sourceMappingURL=millan.sms.js.map