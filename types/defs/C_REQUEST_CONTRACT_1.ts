import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_REQUEST_CONTRACT_1 extends PacketBase {
  type: number
  unk2: number
  unk3: number
  unk4: number
  name: string
  data: bytes
}
