import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_PLAYER_LOCATION_5 extends PacketBase {
  loc: Vec3
  w: number

  /**
     Your w direction but while in an action that allows you to look around example: Gunner Blast/Arcane Barrage
  */
  lookDirection: number
  dest: Vec3
  type: number

  /**
     0 = running, 1 = walking, 2 = falling, 5 = jumping,  6 = jump intersection and end when something is blocking the path and the player can't  travel in the X and Y axis(it will then wait and resume if possible)  8 = swimming, 9 = stop swimming, 10 = falling after jumping  movement speed while jumping in a direction
  */
  jumpDistance: number
  inShuttle: boolean

  /**
     Operating System uptime (ms)
  */
  time: number
}
