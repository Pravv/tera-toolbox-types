import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_WEAK_POINT_1 extends PacketBase {
  /**
     can be yourself or an npc
  */
  target: bigint
  runemarksRemoved: number
  runemarksAdded: number

  /**
     0 = simply remove/add runemark  1 = detonate runemarks (runeburst/shining crescent)  2 = expired  3 = reclaimed (if you use reclamation, or the target dies)
  */
  type: number

  /**
     if type = 2 or type = 3 due to target dying, this is zero
  */
  skill: number
}
