import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_QUEST_BALLOON_1 extends PacketBase {
  /**
     used for Speech bubbles on npcs/some event notifications
  */
  source: bigint

  /**
     @monsterBehavior:messageId, targetname-used if message contains a name
  */
  message: string
}
