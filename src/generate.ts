import { NESTED_TYPES } from './utils';
import * as template from './templates';

function stringToTsType(type) {
  if (['byte', 'uint16', 'uint32', 'int16', 'int32', 'float', 'double', 'angle'].includes(type)) return 'number';
  if (['bool'].includes(type)) return 'boolean';
  if (['int64', 'uint64'].includes(type)) return 'bigint';
  if (['string'].includes(type)) return 'string';
  if (['skillid', 'skillid32'].includes(type)) return 'SkillId';
  if (['vec3fa', 'vec3'].includes(type)) return 'Vec3';
  if (['customize'].includes(type)) return 'Customize';
  return type;
}

class Serializer {
  constructor(public packetName) {}

  bytes(varName) {
    return { field: `${varName}: number[]` };
  }

  array(varName, subtype, fields) {
    if (subtype) return { field: `${varName}: ${stringToTsType(subtype)}[]` };

    return this.object(varName, subtype, fields);
  }

  object(varName, subtype, fields) {
    const subclassName = `${this.packetName}_${varName}`;
    const { subClasses } = generate(subclassName, fields, false);

    return { field: `${varName}: ${subclassName}`, subClass: subClasses };
  }
}

export function generatePacketClass(packetName, definition, firstLineComment) {
  const { mainClass, subClasses } = generate(packetName, definition, true);

  return template.generatePacketFile(mainClass, subClasses, firstLineComment);
}

export function generate(packetName, definition, topLevel = false) {
  const serializer = new Serializer(packetName);
  const subClasses = [];
  const classProperties = [];

  for (const { name, type, fields, subtype, comment } of definition) {
    if (!NESTED_TYPES.includes(type)) {
      classProperties.push(`  ${name}: ${stringToTsType(type)}`);
      continue;
    }

    const serialized = serializer[type](name, subtype, fields);

    if (serialized.subClass) subClasses.push(...serialized.subClass);

    if (comment !== '') classProperties.push(`\n  /**\n   ${comment}\n  */`);
    classProperties.push(`  ${serialized.field}`);
  }

  const mainClass = template.generateClass(packetName, classProperties, topLevel);
  if (!topLevel) subClasses.push(mainClass);

  return { subClasses, mainClass };
}




