import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_LOGIN_ACCOUNT_INFO_2 extends PacketBase {
  accountId: bigint
  serverName: string
}
