import { BaseGraphQlParser } from './BaseGraphQlParser';
export declare class StardogGraphQlParser extends BaseGraphQlParser {
    private stardogGraphQlVisitor;
    constructor(options?: any);
    private visitCst;
    parse: (document: string, entryRule?: (idxInCallingRule?: number, ...args: any[]) => any) => {
        errors: any[];
        cst: any;
    };
    OperationDefinition: (idxInCallingRule?: number, ...args: any[]) => void;
    Directives: (idxInCallingRule?: number, ...args: any[]) => void;
    Field: (idxInCallingRule?: number, ...args: any[]) => void;
    Arguments: (idxInCallingRule?: number, ...args: any[]) => void;
    StardogArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    StardogDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    ConditionalStardogDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    SkipDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    IncludeDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    FilterDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    ConditionalStardogDirectiveArguments: (idxInCallingRule?: number, ...args: any[]) => any;
    BareStardogDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    OptionalDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    TypeDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    HideDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    BindDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    PrefixDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    ConfigDirective: (idxInCallingRule?: number, ...args: any[]) => any;
    ConfigDirectiveAlias: (idxInCallingRule?: number, ...args: any[]) => any;
    ConfigDirectiveGraph: (idxInCallingRule?: number, ...args: any[]) => any;
    ConfigDirectiveType: (idxInCallingRule?: number, ...args: any[]) => any;
    AliasArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    AliasArgumentField: (idxInCallingRule?: number, ...args: any[]) => any;
    GraphArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    EnumValueOrString: (idxInCallingRule?: number, ...args: any[]) => any;
    TypeArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    OrderByArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    OrderByArgumentField: (idxInCallingRule?: number, ...args: any[]) => any;
    OrderByArgumentFieldProperty: (idxInCallingRule?: number, ...args: any[]) => any;
    OrderByArgumentDescProperty: (idxInCallingRule?: number, ...args: any[]) => any;
    SkipArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    OffsetArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    FirstArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    LimitArgument: (idxInCallingRule?: number, ...args: any[]) => any;
    IriArgument: (idxInCallingRule?: number, ...args: any[]) => any;
}
