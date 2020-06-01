import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_SPAWN_DOOR_3 extends PacketBase {
  gameId: bigint
  id: number
  open: boolean
}
