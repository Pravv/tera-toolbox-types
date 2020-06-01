export function generatePacketFile(mainClass, subClasses, firstLineComment) {
  const commentTemplate = (firstLineComment && firstLineComment !== '') ? `// ${firstLineComment}` : '';

  return `\
${commentTemplate}
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  

${subClasses.join('\n')}
${mainClass}
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
${imports.join('\n')}

type CallbackFunction<PacketT> = (event: PacketT, fake?: boolean) => boolean | void;
export interface HookOptions { order?: number, filter?: { fake?: boolean, incoming?: boolean, modified?: boolean, silenced?: boolean } }

export interface Mod {
hook(packet: '*', version: 'raw', options?: HookOptions, cb?: (event: any, fake?: boolean) => boolean | void);
${hooks.join('\n')}
}
`.trimStart();
}

export function generatePacketImport(name: string, version: number) {
  return `import { ${name}_${version} } from '../defs/${name}_${version}';`;
}

export function generateHookDeclaration(name: string, version: number) {
  return `  hook(packet: '${name}_${version}', version: ${version} | '*', options?: HookOptions | CallbackFunction<${name}_${version}>, cb?: CallbackFunction<${name}_${version}>);`;
}
