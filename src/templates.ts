export function generatePacketFile(mainClass, subClasses, firstLineComment) {
  const commentTemplate = (firstLineComment && firstLineComment !== '') ? `// ${firstLineComment}` : '';
  subClasses.push(mainClass);
  return `\
${commentTemplate}
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'

${subClasses.join('\n')}
`.trimStart();
}

export function generateClass(name: string, classProperties: string[], baseClass = false) {
  const baseClassTemplate = baseClass ? ' extends PacketBase' : '';

  return `
export class ${name}${baseClassTemplate} {
${classProperties.join('\n')}
}`;
}

export function generateModFile(imports: string[], hooks: string[]) {
  return `\
import { ${imports.join(', ')} } from '../defs'

export type CallbackFunction<PacketT> = (event: PacketT, fake?: boolean) => boolean | void
export interface HookOptions { order?: number, filter?: { fake?: boolean, incoming?: boolean, modified?: boolean, silenced?: boolean } }
export type Hook<EventT, PacketT> = (packet: EventT, version: number | '*', options?: HookOptions | CallbackFunction<PacketT>, cb?: CallbackFunction<PacketT>) => boolean

export interface Mod {
  hook(packet: '*', version: 'raw', options?: HookOptions, cb?: (event: any, fake?: boolean) => boolean | void)
${hooks.join('\n')}
  [k: string]: any
}
`.trimStart();
}

export function generatePacketImport(name: string, version: number) {
  return `import { ${name}_${version} } from '../defs/${name}_${version}'`;
}

export function generateHookDeclaration(name: string, version: number) {
  // return `  hook(): Hook<'${name}', ${name}_${version}>;`;
  return `  hook(packet: '${name}', version: number | '*', options?: HookOptions | CallbackFunction<${name}_${version}>, cb?: CallbackFunction<${name}_${version}>)`;
}

export function generateDefIndexFile(defs) {
  return `\
  ${defs.map((name) => ` export { ${name} } from './${name}';`).join('  \n')}
`;
}
