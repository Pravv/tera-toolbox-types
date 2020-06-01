import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_EDIT_BLOCKED_USER_MEMO_1 extends PacketBase {
  id: number
  memo: string
}
