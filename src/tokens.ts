// @ts-ignore: import types for declarations
import { createToken, Lexer, TokenType } from 'chevrotain';
import { terminals } from './terminals';
import { keywords } from './keywords';

export const tokenMap = {
  IRIREF: terminals.IRIREF,
  LANGTAG: terminals.LANGTAG,
  INTEGER: terminals.INTEGER,
  DECIMAL: terminals.DECIMAL,
  DOUBLE: terminals.DOUBLE,
  INTEGER_POSITIVE: terminals.INTEGER_POSITIVE,
  DECIMAL_POSITIVE: terminals.DECIMAL_POSITIVE,
  DOUBLE_POSITIVE: terminals.DOUBLE_POSITIVE,
  INTEGER_NEGATIVE: terminals.INTEGER_NEGATIVE,
  DECIMAL_NEGATIVE: terminals.DECIMAL_NEGATIVE,
  DOUBLE_NEGATIVE: terminals.DOUBLE_NEGATIVE,
  STRING_LITERAL1: terminals.STRING_LITERAL1,
  STRING_LITERAL2: terminals.STRING_LITERAL2,
  STRING_LITERAL_LONG1: terminals.STRING_LITERAL_LONG1,
  STRING_LITERAL_LONG2: terminals.STRING_LITERAL_LONG2,
  NIL: terminals.NIL,
  ANON: terminals.ANON,
  PNAME_NS: terminals.PNAME_NS,
  PNAME_LN: terminals.PNAME_LN,
  BLANK_NODE_LABEL: terminals.BLANK_NODE_LABEL,
  VAR1: terminals.VAR1,
  VAR2: terminals.VAR2,
  PERCENT: terminals.PERCENT,

  Comment: createToken({
    name: 'Comment',
    pattern: /\#.+\n/,
    group: 'comments',
  }),
  LCurly: createToken({ name: 'LCurly', pattern: '{' }),
  RCurly: createToken({ name: 'RCurly', pattern: '}' }),
  LParen: createToken({ name: 'LParen', pattern: '(' }),
  RParen: createToken({ name: 'RParen', pattern: ')' }),
  WhiteSpace: createToken({
    name: 'WhiteSpace',
    pattern: /\s+/,
    group: Lexer.SKIPPED,
    line_breaks: true,
  }),

  Star: createToken({
    name: 'Star',
    pattern: '*',
  }),

  Unknown: createToken({
    name: 'Unknown',
    pattern: /\w+/,
  }),

  Period: createToken({
    name: 'Period',
    pattern: '.',
  }),

  QuestionMark: createToken({
    name: 'QuestionMark',
    pattern: '?',
  }),

  Plus: createToken({
    name: 'Plus',
    pattern: '+',
  }),

  Minus: createToken({
    name: 'Minus',
    pattern: '-',
  }),

  LBracket: createToken({
    name: 'LBracket',
    pattern: '[',
  }),

  RBracket: createToken({
    name: 'RBracket',
    pattern: ']',
  }),

  Semicolon: createToken({
    name: 'Semicolon',
    pattern: ';',
  }),

  Comma: createToken({
    name: 'Comma',
    pattern: ',',
  }),

  Pipe: createToken({
    name: 'Pipe',
    pattern: '|',
  }),

  ForwardSlash: createToken({
    name: 'ForwardSlash',
    pattern: '/',
  }),

  Caret: createToken({
    name: 'Caret',
    pattern: '^',
  }),

  DoubleCaret: createToken({
    name: 'DoubleCaret',
    pattern: '^^',
  }),

  Bang: createToken({
    name: 'Bang',
    pattern: '!',
  }),

  LogicalOr: createToken({
    name: 'LogicalOr',
    pattern: '||',
  }),

  LogicalAnd: createToken({
    name: 'LogicalAnd',
    pattern: '&&',
  }),

  Equals: createToken({
    name: 'Equals',
    pattern: '=',
  }),

  NotEquals: createToken({
    name: 'NotEquals',
    pattern: '!=',
  }),

  LessThan: createToken({
    name: 'LessThan',
    pattern: '<',
  }),

  GreaterThan: createToken({
    name: 'GreaterThan',
    pattern: '>',
  }),

  LessThanEquals: createToken({
    name: 'LessThanEquals',
    pattern: '<=',
  }),

  GreaterThanEquals: createToken({
    name: 'GreaterThanEquals',
    pattern: '>=',
  }),

  SELECT: keywords.SELECT,
  CONSTRUCT: keywords.CONSTRUCT,
  DISTINCT: keywords.DISTINCT,
  START: keywords.START,
  END: keywords.END,
  VIA: keywords.VIA,
  PATHS: keywords.PATHS,
  CYCLIC: keywords.CYCLIC,
  SHORTEST: keywords.SHORTEST,
  AS: keywords.AS,
  WHERE: keywords.WHERE,
  A: keywords.A,
  GroupBy: keywords.GroupBy,
  OrderBy: keywords.OrderBy,
  By: keywords.By,
  BASE: keywords.BASE,
  PREFIX: keywords.PREFIX,
  DESCRIBE: keywords.DESCRIBE,
  ASK: keywords.ASK,
  FROM: keywords.FROM,
  REDUCED: keywords.REDUCED,
  NAMED: keywords.NAMED,
  HAVING: keywords.HAVING,
  ASC: keywords.ASC,
  DESC: keywords.DESC,
  OFFSET: keywords.OFFSET,
  LIMIT: keywords.LIMIT,
  VALUES: keywords.VALUES,
  LOAD: keywords.LOAD,
  SILENT: keywords.SILENT,
  INTO: keywords.INTO,
  CLEAR: keywords.CLEAR,
  DROP: keywords.DROP,
  CREATE: keywords.CREATE,
  ADD: keywords.ADD,
  TO: keywords.TO,
  MOVE: keywords.MOVE,
  COPY: keywords.COPY,
  INSERT_DATA: keywords.INSERT_DATA,
  DELETE_DATA: keywords.DELETE_DATA,
  DELETE_WHERE: keywords.DELETE_WHERE,
  WITH: keywords.WITH,
  DELETE: keywords.DELETE,
  INSERT: keywords.INSERT,
  USING: keywords.USING,
  DEFAULT: keywords.DEFAULT,
  GRAPH: keywords.GRAPH,
  ALL: keywords.ALL,
  OPTIONAL: keywords.OPTIONAL,
  SERVICE: keywords.SERVICE,
  BIND: keywords.BIND,
  UNDEF: keywords.UNDEF,
  MINUS: keywords.MINUS,
  UNION: keywords.UNION,
  FILTER: keywords.FILTER,
  STR: keywords.STR,
  LANG: keywords.LANG,
  LANGMATCHERS: keywords.LANGMATCHERS,
  DATATYPE: keywords.DATATYPE,
  BOUND: keywords.BOUND,
  IRI: keywords.IRI,
  URI: keywords.URI,
  BNODE: keywords.BNODE,
  RAND: keywords.RAND,
  ABS: keywords.ABS,
  CEIL: keywords.CEIL,
  FLOOR: keywords.FLOOR,
  ROUND: keywords.ROUND,
  CONCAT: keywords.CONCAT,
  STRLEN: keywords.STRLEN,
  UCASE: keywords.UCASE,
  LCASE: keywords.LCASE,
  ENCODE_FOR_URI: keywords.ENCODE_FOR_URI,
  CONTAINS: keywords.CONTAINS,
  STRSTARTS: keywords.STRSTARTS,
  STRENDS: keywords.STRENDS,
  STRBEFORE: keywords.STRBEFORE,
  STRAFTER: keywords.STRAFTER,
  YEAR: keywords.YEAR,
  MONTH: keywords.MONTH,
  DAY: keywords.DAY,
  HOURS: keywords.HOURS,
  MINUTES: keywords.MINUTES,
  SECONDS: keywords.SECONDS,
  TIMEZONE: keywords.TIMEZONE,
  TZ: keywords.TZ,
  NOW: keywords.NOW,
  UUID: keywords.UUID,
  STRUUID: keywords.STRUUID,
  MD5: keywords.MD5,
  SHA1: keywords.SHA1,
  SHA256: keywords.SHA256,
  SHA384: keywords.SHA384,
  SHA512: keywords.SHA512,
  COALESCE: keywords.COALESCE,
  IF: keywords.IF,
  STRLANG: keywords.STRLANG,
  STRDT: keywords.STRDT,
  sameTerm: keywords.sameTerm,
  isIRI: keywords.isIRI,
  isURI: keywords.isURI,
  isBlank: keywords.isBlank,
  isLiteral: keywords.isLiteral,
  isNumeric: keywords.isNumeric,
  REGEX: keywords.REGEX,
  SUBSTR: keywords.SUBSTR,
  REPLACE: keywords.REPLACE,
  EXISTS: keywords.EXISTS,
  NOT_EXISTS: keywords.NOT_EXISTS,
  COUNT: keywords.COUNT,
  SUM: keywords.SUM,
  MIN: keywords.MIN,
  AVG: keywords.AVG,
  SAMPLE: keywords.SAMPLE,
  GROUP_CONCAT: keywords.GROUP_CONCAT,
  SEPARATOR: keywords.SEPARATOR,
  TRUE: keywords.TRUE,
  FALSE: keywords.FALSE,
  IN: keywords.IN,
  NOT_IN: keywords.NOT_IN,
  MAX_LENGTH: keywords.MAX_LENGTH,
  MAX: keywords.MAX,
};

export const allTokens = [
  tokenMap.NIL,
  tokenMap.ANON,
  tokenMap.LCurly,
  tokenMap.RCurly,
  tokenMap.LParen,
  tokenMap.RParen,
  tokenMap.WhiteSpace,
  tokenMap.IRIREF,
  tokenMap.LANGTAG,
  tokenMap.DOUBLE,
  tokenMap.DECIMAL,
  tokenMap.INTEGER,
  tokenMap.DOUBLE_POSITIVE,
  tokenMap.DECIMAL_POSITIVE,
  tokenMap.INTEGER_POSITIVE,
  tokenMap.DOUBLE_NEGATIVE,
  tokenMap.DECIMAL_NEGATIVE,
  tokenMap.INTEGER_NEGATIVE,
  tokenMap.STRING_LITERAL1,
  tokenMap.STRING_LITERAL2,
  tokenMap.STRING_LITERAL_LONG1,
  tokenMap.STRING_LITERAL_LONG2,
  tokenMap.PNAME_NS,
  tokenMap.PNAME_LN,
  tokenMap.BLANK_NODE_LABEL,
  tokenMap.VAR1,
  tokenMap.VAR2,
  tokenMap.Comment,
  tokenMap.SELECT,
  tokenMap.CONSTRUCT,
  tokenMap.DISTINCT,
  tokenMap.Star,
  tokenMap.WHERE,
  tokenMap.GroupBy,
  tokenMap.OrderBy,
  tokenMap.By,
  tokenMap.Period,
  tokenMap.QuestionMark,
  tokenMap.Plus,
  tokenMap.Minus,
  tokenMap.LBracket,
  tokenMap.RBracket,
  tokenMap.PERCENT,
  tokenMap.BASE,
  tokenMap.PREFIX,
  tokenMap.DESCRIBE,
  tokenMap.ASK,
  tokenMap.FROM,
  tokenMap.REDUCED,
  tokenMap.NAMED,
  tokenMap.HAVING,
  tokenMap.ASC,
  tokenMap.DESC,
  tokenMap.OFFSET,
  tokenMap.LIMIT,
  tokenMap.VALUES,
  tokenMap.LOAD,
  tokenMap.SILENT,
  tokenMap.INTO,
  tokenMap.AS,
  tokenMap.CLEAR,
  tokenMap.DROP,
  tokenMap.CREATE,
  tokenMap.ADD,
  tokenMap.TO,
  tokenMap.MOVE,
  tokenMap.COPY,
  tokenMap.INSERT_DATA,
  tokenMap.DELETE_DATA,
  tokenMap.DELETE_WHERE,
  tokenMap.WITH,
  tokenMap.DELETE,
  tokenMap.INSERT,
  tokenMap.USING,
  tokenMap.DEFAULT,
  tokenMap.GRAPH,
  tokenMap.ALL,
  tokenMap.OPTIONAL,
  tokenMap.SERVICE,
  tokenMap.BIND,
  tokenMap.UNDEF,
  tokenMap.MINUS,
  tokenMap.UNION,
  tokenMap.FILTER,
  tokenMap.LANGMATCHERS,
  tokenMap.LANG,
  tokenMap.DATATYPE,
  tokenMap.BOUND,
  tokenMap.IRI,
  tokenMap.URI,
  tokenMap.BNODE,
  tokenMap.RAND,
  tokenMap.ABS,
  tokenMap.CEIL,
  tokenMap.FLOOR,
  tokenMap.ROUND,
  tokenMap.CONCAT,
  tokenMap.STRLEN,
  tokenMap.UCASE,
  tokenMap.LCASE,
  tokenMap.ENCODE_FOR_URI,
  tokenMap.CONTAINS,
  tokenMap.STRSTARTS,
  tokenMap.STRENDS,
  tokenMap.STRBEFORE,
  tokenMap.STRAFTER,
  tokenMap.YEAR,
  tokenMap.MONTH,
  tokenMap.DAY,
  tokenMap.HOURS,
  tokenMap.MINUTES,
  tokenMap.SECONDS,
  tokenMap.TIMEZONE,
  tokenMap.TZ,
  tokenMap.NOW,
  tokenMap.UUID,
  tokenMap.STRUUID,
  tokenMap.MD5,
  tokenMap.SHA1,
  tokenMap.SHA256,
  tokenMap.SHA384,
  tokenMap.SHA512,
  tokenMap.COALESCE,
  tokenMap.IF,
  tokenMap.STRLANG,
  tokenMap.STRDT,
  tokenMap.STR,
  tokenMap.sameTerm,
  tokenMap.isIRI,
  tokenMap.isURI,
  tokenMap.isBlank,
  tokenMap.isLiteral,
  tokenMap.isNumeric,
  tokenMap.REGEX,
  tokenMap.SUBSTR,
  tokenMap.REPLACE,
  tokenMap.EXISTS,
  tokenMap.NOT_EXISTS,
  tokenMap.COUNT,
  tokenMap.SUM,
  tokenMap.MIN,
  tokenMap.MAX_LENGTH,
  tokenMap.MAX,
  tokenMap.START,
  tokenMap.END,
  tokenMap.VIA,
  tokenMap.PATHS,
  tokenMap.CYCLIC,
  tokenMap.SHORTEST,
  tokenMap.AVG,
  tokenMap.SAMPLE,
  tokenMap.GROUP_CONCAT,
  tokenMap.SEPARATOR,
  tokenMap.TRUE,
  tokenMap.FALSE,
  tokenMap.Semicolon,
  tokenMap.Comma,
  tokenMap.Pipe,
  tokenMap.ForwardSlash,
  tokenMap.DoubleCaret,
  tokenMap.Caret,
  tokenMap.LogicalOr,
  tokenMap.LogicalAnd,
  tokenMap.NotEquals,
  tokenMap.Bang,
  tokenMap.Equals,
  tokenMap.LessThanEquals,
  tokenMap.GreaterThanEquals,
  tokenMap.LessThan,
  tokenMap.GreaterThan,
  tokenMap.IN,
  tokenMap.NOT_IN,
  tokenMap.A,
  tokenMap.Unknown,
];
