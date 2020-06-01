import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_SITUATION_1 extends PacketBase {
  target: bigint
  creature: bigint
  emotion: number
}
