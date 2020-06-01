import { fromBase64 } from './utils';
import * as fs from 'fs';
import { keyBy, sortBy } from 'lodash';
import fetch from 'node-fetch';
import { generatePacketClass } from './generate';
import { parseDefinition } from './parse';
import { generateDefIndexFile, generateHookDeclaration, generateModFile, generatePacketImport } from './templates';
import * as path from 'path';

async function getDefs() {
  const data = await fetch('https://raw.githubusercontent.com/tera-toolbox/tera-toolbox/master/data/data.json')
    .then(res => res.text())
    .then(body => JSON.parse(body));

  const opcodes = Object.values(data.maps)[0];

  const decodedDefs = Object.entries<string>(data.protocol)
    .map(([key, value]) => {
      if (key.includes('.js')) return null;

      const [name, version] = key.split('.');
      if (!opcodes[name]) return null;

      return { name, version: parseInt(version), def: fromBase64(value, 'utf-8').split(/\r?\n/) };
    })
    .filter(value => !!value);

  const sorted = sortBy(decodedDefs, 'version');
  const keyed = keyBy(sorted, 'name');

  return Object.values(keyed);
}

function generateFiles(decodedDefs: { name: string; version: number; def: string[]; }[]) {
  const types = [];
  const hooks = [];
  const imports = [];

  for (const { name, version, def } of decodedDefs) {
    console.log(name);
    const parsedDef = parseDefinition(def);

    const type = generatePacketClass(`${name}_${version}`, parsedDef.definition, parsedDef.firstLineComment);
    const hook = generateHookDeclaration(name, version);
    types.push({ type, name: `${name}_${version}` });
    hooks.push(hook);
    //imports.push(generatePacketImport(name, version));
    imports.push(`${name}_${version}`);
  }

  return { types, hooks, imports };
}

async function main() {
  const rootPath = path.join(__dirname, '..', 'types');
  const decodedDefs = await getDefs();

  const { types, hooks, imports } = generateFiles(decodedDefs);

  cleanUp(rootPath);

  for (const type of types) {
    fs.writeFileSync(path.join(rootPath, 'defs', `${type.name}.ts`), type.type);
  }

  fs.writeFileSync(path.join(rootPath, 'defs', `index.ts`), generateDefIndexFile(imports));
  fs.writeFileSync(path.join(rootPath, 'lib', `Mod.ts`), generateModFile(imports, hooks));
}

main().catch(e => console.log(e));

function cleanUp(rootPath) {
  const files = fs.readdirSync(path.join(rootPath, 'defs'));

  for (const file of files) {
    if (file.startsWith('.')) continue;
    fs.unlinkSync(path.join(rootPath, 'defs', file));
  }
}
