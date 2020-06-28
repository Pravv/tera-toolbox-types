import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_LOADING_SCREEN_CONTROL_INFO_2 extends PacketBase {
  /**
     false = use built-in loading screens, true = use loading screens from DownloadedResources.dat
  */
  enableCustom: boolean
}
