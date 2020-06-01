import { makeLookAheadIterator, NESTED_TYPES } from './utils';

export function parseDefinition(rawDefinition: string[]) {
  let firstLineComment = '';
  const iter = makeLookAheadIterator(rawDefinition);

  const firstLineRaw = iter.lookAhead(0);
  if (firstLineRaw.includes('majorPatchVersion')) {
    firstLineComment = firstLineRaw;
    try {
      iter.skip(1);
    } catch (e) {
      return { definition: [], firstLineComment };
    }
  }
  const parsed = parse(rawDefinition.slice(iter.position), 0);

  // TODO: :)
  const z = new Map();
  for (const def of parsed.definitions) {
    if (z.has(def.name)) {
      if (def.name === 'reaction') z.get(def.name).fields.push(...def.fields);
    } else {
      z.set(def.name, def);
    }
  }

  return { firstLineComment, definition: [...z.values()] };
}

interface Definition {
  name: string,
  type: string,
  subtype: string,
  comment: string

  fields: Definition[],
}

function parse(rawDefinition: string[], nesting = 0): { definitions: Definition[]; linesIngested } {
  const definitions = [];
  const iter = makeLookAheadIterator(rawDefinition);

  let currentComment = '';
  for (const lineRaw of iter) {
    const { name, comment, type, subtype, depth } = splitLine(lineRaw);
    currentComment += comment;

    if (nesting && depth < nesting) return { definitions, linesIngested: iter.position };
    if (!name) continue;
    if (type === 'ref') continue;

    if (NESTED_TYPES.includes(type) && !subtype) {
      const pos = iter.position;
      const result = parse(rawDefinition.slice(pos + 1), depth + 1);
      iter.skip(result.linesIngested);
      definitions.push({ name, type, subtype, fields: result.definitions, comment: currentComment });
      currentComment = '';
      continue;
    }

    definitions.push({ name, type, subtype, comment: currentComment });
    currentComment = '';
  }

  return { definitions, linesIngested: iter.position + 1 };
}


function splitLine(lineRaw) {
  const [line, commentRaw] = lineRaw.split('#').map(string => string.trim());

  const comment = commentRaw ? `  ${commentRaw}` : '';
  if (!line || line === '') return { comment };


  const match = line.match(/^((?:-\s*)*)(\S+?)(<\s*\S+\s*>)?(\[\s*\S+\s*\])?\s+(\S+)$/);
  if (!match) {
    console.log(`[parsers/def] parse error: malformed line\n ${line}`);
    throw Error();
  }
  const depth = match[1].replace(/[^-]/g, '').length;
  const type = match[2];
  const subtype = match[3] ? match[3].replace(/[\s<>]/g, '') : undefined;
  const name = match[5];

  return { comment, name, type, subtype, depth };
}
