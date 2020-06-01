// # majorPatchVersion >= 77
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PLAYER_CHANGE_ALL_PROF_2 extends PacketBase {
  baseEnergy: number
  baseHerb: number
  baseBug: number
  baseMineral: number
  addEnergy: number
  addHerb: number
  addBug: number
  addMineral: number
}
