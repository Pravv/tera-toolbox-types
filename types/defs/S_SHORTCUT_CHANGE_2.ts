import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SHORTCUT_CHANGE_2 extends PacketBase {
  /**
     Changes shortcuts (hotbar)  Current zone the player is in (client seems to ignore this)
  */
  huntingZoneId: number

  /**
     Corresponds to entry in ShortcutSetList (DataCenter)
  */
  id: number

  /**
     false = Default shortcut set (id is ignored)
  */
  enable: boolean
}
