import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_UNMOUNT_VEHICLE_EX_1 extends PacketBase {
  target: bigint
  vehicle: bigint
}
