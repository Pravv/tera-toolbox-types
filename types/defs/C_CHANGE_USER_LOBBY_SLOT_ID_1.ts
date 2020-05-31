import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class C_CHANGE_USER_LOBBY_SLOT_ID_1_characters {
  id: number
}

export class C_CHANGE_USER_LOBBY_SLOT_ID_1 extends PacketBase {
  characters: C_CHANGE_USER_LOBBY_SLOT_ID_1_characters
}
