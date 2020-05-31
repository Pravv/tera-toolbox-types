import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_UPDATE_CONTENTS_ON_OFF_2 extends PacketBase {
  content: number
  disabled: boolean
}
