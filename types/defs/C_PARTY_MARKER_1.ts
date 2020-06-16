import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_PARTY_MARKER_1_markers {
  /**
     0 = red, 1 = yellow, 2 = blue
  */
  color: number

  /**
     entity id
  */
  target: bigint
}

export class C_PARTY_MARKER_1 extends PacketBase {
  markers: C_PARTY_MARKER_1_markers[]
}
