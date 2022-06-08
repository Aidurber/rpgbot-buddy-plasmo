export const ABBREVIATION_MAP = {
  AcInc: "Acquistions Incorporated",
  DMG: "Dungeon Master's Guide",
  EGtW: "Explorer's Guide to Wildemount",
  ERLW: "Eberron: Rising From The Last War",
  EEPC: "Elemental Evil Player's Companion",
  FToD: "Fizban's Treasure of Dragons",
  GGtR: "Guildmasters' Guide to Ravnica",
  "ID:RotF": "Icewind Dale: Rime of the Frostmaiden",
  LR: "Locathah Rising",
  MM: "Monster Manual",
  MOoT: "Mystic Odysseys of Theros",
  MToF: "Mordenkainen's Tome of Foes",
  OGA: "One Grung Above",
  PHB: "Players Handbook",
  SCAG: "Sword Coast Adventurer's Guide",
  SCoC: "Strixhaven: A Curriculum of Chaos",
  TCoE: "Tasha's Cauldron of Everything",
  VGtM: "Volo's Guide to Monsters",
  WBtW: "The Wild Beyond the Witchlight",
  WGtE: "Wayfarer's Guide to Eberron",
  XGtE: "Xanathar's Guide to Everything",
}

export type SourceBook = keyof typeof ABBREVIATION_MAP

export const ABBREVIATIONS: SourceBook[] = Object.keys(
  ABBREVIATION_MAP,
) as SourceBook[]
