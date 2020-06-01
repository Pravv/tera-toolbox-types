export interface Vec3 {
  x: number;
  y: number;
  z: number;

  add(args: { x, y, z } | Vec3): Vec3

  sub(args: { x, y, z } | Vec3): Vec3

  mult(args: { x, y, z } | Vec3): Vec3

  div(args: { x, y, z } | Vec3): Vec3

  scale(m: number): Vec3

  rotate(r: number): Vec3

  normalize(): Vec3

  abs(): Vec3

  round(): Vec3

  addN(args: { x, y, z } | Vec3): Vec3

  subN(args: { x, y, z } | Vec3): Vec3

  multN(args: { x, y, z } | Vec3): Vec3

  divN(args: { x, y, z } | Vec3): Vec3

  scaleN(m: number): Vec3

  rotateN(r: number): Vec3

  normalizeN(): Vec3

  absN(): Vec3

  roundN(): Vec3

  length(): number

  sqrLength(): number

  dist2D(args: { x, y, z? } | Vec3): number

  sqrDist2D(args: { x, y, z? } | Vec3): number

  dist3D(args: { x, y, z } | Vec3): number

  sqrDist3D(args: { x, y, z } | Vec3): number

  angleTo(args: { x, y, z? } | Vec3): number

  isNaN(): boolean

  equals(args: { x, y, z } | Vec3): boolean

  clone(): Vec3

  toString(): string;
}

export class SkillId {
  reserved: number;
  npc: boolean;
  type;
  huntingZoneId: number;
  id: number;

  // @ts-ignore
  equals(obj: number | SkillId): boolean

  // @ts-ignore
  clone(): SkillId

  // @ts-ignore
  toString(): string

  // @ts-ignore
  static fromUint32(raw: number): SkillId

  // @ts-ignore
  toUint32(): number

  // @ts-ignore
  static fromUint64(raw: bigint): SkillId

  // @ts-ignore
  toUint64(): bigint
}

export interface Customize {
  unk: number;
  skinColor: number;
  faceStyle: number;
  faceDecal: number;
  hairStyle: number;
  hairColor: number;
  voice: number;
  tattoos: number;

  toUint64(): bigint
}

export class PacketBase {
  $incoming: boolean;
  $modified: boolean;
  $silenced: boolean;
  $fake: boolean;
}
