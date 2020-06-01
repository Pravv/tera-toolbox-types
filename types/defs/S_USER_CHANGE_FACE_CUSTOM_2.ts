import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_CHANGE_FACE_CUSTOM_2 extends PacketBase {
  gameId: bigint
  appearance: Customize
}
