import { Lexer, IToken, IRecognitionException, IParserConfig } from 'chevrotain';
import { TurtleParser } from '../turtle/TurtleParser';
export declare class SrsParser extends TurtleParser {
    private sparqlSrsVisitor;
    protected lexer: Lexer;
    protected namespacesMap: {};
    constructor(config?: Partial<IParserConfig>);
    private visitCst;
    private getSparqlRulesFromVisitor;
    protected resetManagedState: () => void;
    tokenize: (document: string) => IToken[];
    parse: (document: string) => {
        errors: IRecognitionException[];
        semanticErrors: IRecognitionException[];
        cst: any;
    };
    SrsDoc: (idxInCallingRule?: number, ...args: any[]) => any;
    RuleDoc: (idxInCallingRule?: number, ...args: any[]) => any;
    RuleClause: (idxInCallingRule?: number, ...args: any[]) => any;
    IfClause: (idxInCallingRule?: number, ...args: any[]) => any;
    ThenClause: (idxInCallingRule?: number, ...args: any[]) => any;
}