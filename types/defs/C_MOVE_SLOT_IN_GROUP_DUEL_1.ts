import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_MOVE_SLOT_IN_GROUP_DUEL_1 extends PacketBase {
  fromteam: number
  fromslot: number
  toteam: number
  toslot: number
}
