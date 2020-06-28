import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_START_ACTION_SCRIPT_3 extends PacketBase {
  gameId: bigint

  /**
     teleportal animation script : 40 9C 00 00 == 40000
  */
  script: number

  /**
     0?
  */
  unk2: number
}
