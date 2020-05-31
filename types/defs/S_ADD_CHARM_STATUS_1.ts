import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_ADD_CHARM_STATUS_1 extends PacketBase {
  target: bigint
  id: number
  status: number
  duration: number
}
