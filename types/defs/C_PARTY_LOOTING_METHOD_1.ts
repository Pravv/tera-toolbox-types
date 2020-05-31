import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_PARTY_LOOTING_METHOD_1 extends PacketBase {
  methodLoot: number
  rareGrade: number
  methodRare: number
  rareEquipment: boolean
  rareClass: boolean
  methodBound: number
}
