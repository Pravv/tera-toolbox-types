import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_USER_CHANGE_NAME_1 extends PacketBase {
  gameId: bigint
  name: string
}
