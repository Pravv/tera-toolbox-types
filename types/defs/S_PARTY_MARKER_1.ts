import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_PARTY_MARKER_1_markers {
  color: number
  target: bigint
}

export class S_PARTY_MARKER_1 extends PacketBase {
  markers: S_PARTY_MARKER_1_markers
}
