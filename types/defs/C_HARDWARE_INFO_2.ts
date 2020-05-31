import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_HARDWARE_INFO_2 extends PacketBase {
  systemMemory: number
  videoMemory: number
  resWidth: number
  resHeight: number
  isFullScreen: boolean
  resScreenWidth: number
  resScreenHeight: number
  numDisplays: number
  resVirtualWidth: number
  resVirtualHeight: number
  physicalCores: number
  logicalCores: number
  os: string
  cpu: string
}
