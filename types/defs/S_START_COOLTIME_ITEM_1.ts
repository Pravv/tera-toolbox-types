import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_START_COOLTIME_ITEM_1 extends PacketBase {
  item: number
  cooldown: number
}
