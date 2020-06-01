// # majorPatchVersion >= 85
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_REQUEST_USER_PAPERDOLL_INFO_WITH_GAMEID_3 extends PacketBase {
  gameId: bigint
  zoom: boolean
}
