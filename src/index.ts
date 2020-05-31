import { fromBase64 } from './utils';
import * as fs from 'fs';
import { keyBy, sortBy } from 'lodash';
import fetch from 'node-fetch';
import { generatePacketClass } from './generate';
import { parseDefinition } from './parse';
import { generateModFile, generatePacketImport } from './templates';
import * as path from 'path';

async function getDefs() {
  const data = await fetch('https://raw.githubusercontent.com/tera-toolbox/tera-toolbox/master/data/data.json')
    .then(res => res.text())
    .then(body => JSON.parse(body));

  const decodedDefs = Object.entries<string>(data.protocol)
    .map(([key, value]) => {
      if (key.includes('.js')) return null;
      const [name, version] = key.split('.');
      return { name, version: parseInt(version), def: fromBase64(value, 'utf-8').split(/\r?\n/) };
    })
    .filter(value => !!value);

  const sorted = sortBy(decodedDefs, 'version');
  const keyed = keyBy(sorted, 'name');

  return Object.values(keyed);
}

function generateFiles(decodedDefs) {
  const types = [];
  const hooks = [];
  const imports = [];
  // @ts-ignore
  for (const { name, version, def } of decodedDefs) {
    console.log(name);
    const parsedDef = parseDefinition(def);

    const type = generatePacketClass(`${name}_${version}`, parsedDef.definition, parsedDef.firstLineComment);
    const hookDefinition = `  hook(packet: '${name}_${version}', version: ${version} | '*', options?: HookOptions, cb?: CallbackFunction<${name}_${version}>);`;
    types.push({ type, name: `${name}_${version}` });
    hooks.push(hookDefinition);
    imports.push(generatePacketImport(name, version));
  }

  return { types, hooks, imports };
}

async function main() {
  const rootPath = path.join(__dirname, '..', 'types');
  const decodedDefs = await getDefs();

  const { types, hooks, imports } = generateFiles(decodedDefs);

  for (const type of types) {
    fs.writeFileSync(path.join(rootPath, 'defs', `${type.name}.ts`), type.type);
  }

  const hook = generateModFile(imports, hooks);
  fs.writeFileSync(path.join(rootPath, 'lib', `Mod.ts`), hook);
}

main().catch(e => console.log(e));
