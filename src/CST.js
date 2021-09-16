export const CST = {
  ABILITIES: {
    MAGE: {
      FIREBALL: {
        TEXTURE_KEY: 'ABILITY_MAGE_FIREBALL',
        ANIMATION_KEY: 'ABILITY_MAGE_FIREBALL_ANIMS',
        ICON: 'ABILITY_MAGE_FIREBALL_ICON',
      },
      BLINK: {
        ICON: 'ABILITY_MAGE_BLINK_ICON',
        TEXTURE_KEY: 'ABILITY_MAGE_BLINK',
        ANIMATION_KEY_START: 'ABILITY_MAGE_BLINK_ANIMS_START',
        ANIMATION_KEY_END: 'ABILITY_MAGE_BLINK_ANIMS_END',
      },
      BEAM: {
        ICON: 'ABILITY_MAGE_BEAM_ICON',
      },
    },
    WITCH: {
      HEX_BLAST: {
        ICON: 'ABILITY_WITCH_HEX_BLAST_ICON',
      },
      NEEDLES: {
        ICON: 'ABILITY_WITCH_NEEDLES_ICON',
      },
      METEOR_RAIN: {
        ICON: 'ABILITY_WITCH_METEOR_RAIN_ICON',
      },
    },
    BUTCHER: {
      CLEAVER: {
        TEXTURE_KEY: 'ABILITY_BUTCHER_CLEAVER',
        ANIMATION_KEY: 'ABILITY_BUTCHER_CLEAVER_ANIMS',
        ICON: 'ABILITY_BUTCHER_CLEAVER_ICON',
      },
      HOOK: {
        ICON: 'ABILITY_BUTCHER_HOOK_ICON',
      },
      RAGE: {
        ICON: 'ABILITY_BUTCHER_RAGE_ICON',
      },
    },
    FRAMES: {
      P1: {
        READY: 'ABILITY_FRAME_P1_READY',
        COOLDOWN: 'ABILITY_FRAME_P1_COOLDOWN',
      },
      P2: {
        READY: 'ABILITY_FRAME_P2_READY',
        COOLDOWN: 'ABILITY_FRAME_P2_COOLDOWN',
      },
      P3: {
        READY: 'ABILITY_FRAME_P3_READY',
        COOLDOWN: 'ABILITY_FRAME_P3_COOLDOWN',
      },
      P4: {
        READY: 'ABILITY_FRAME_P4_READY',
        COOLDOWN: 'ABILITY_FRAME_P4_COOLDOWN',
      },
    },
  },
  SCENES: {
    MENU: {
      LOAD: 'MENU_LOAD',
      ENTRY: 'MENU_ENTRY',
      MAIN: 'MENU_MAIN',
      CHARACTER: 'MENU_CHARACTER',
      STAGES: 'MENU_STAGES',
      MAP: 'MAP',
    },
    STAGES: {
      LOAD: 'STAGE_LOAD',
      TEST: 'STAGE_TEST',
      FIELD: 'STAGE_FIELD',
      STONEHENGE: 'STAGE_STONEHENGE',
    },
    INTERFACE: 'INTERFACE',
    INPUT: 'INPUT_SCENE',
  },
  IMAGE: {
    MENU: {
      ENTRY_BG: 'IMG_MENU_ENTRY_BG',
      MAIN_BG: 'IMG_MENU_MAIN_BG',
      LOGO: 'IMG_MENU_LOGO',
      BTN_PLAY: 'IMG_MENU_BUTTON_PLAY',
      BTN_OPTIONS: 'IMG_MENU_BUTTON_OPTIONS',
      PLAYERS_CONTROLLER: 'IMG_MENU_PLAYERS_CONTROLLER',
      PLAYERS_KEYBOARD: 'IMG_MENU_PLAYERS_KEYBOARD',
      DICE: 'IMG_MENU_DICE',
      P1_CURSOR: 'IMG_MENU_P1_CURSOR',
      P2_CURSOR: 'IMG_MENU_P2_CURSOR',
      P3_CURSOR: 'IMG_MENU_P3_CURSOR',
      P4_CURSOR: 'IMG_MENU_P4_CURSOR',
    },
    STAGES: {
      TEST: {
        BACKGROUND: 'IMG_STAGE_TEST_BG',
        FLOOR: 'IMG_STAGE_TEST_FLOOR',
      },
      FIELD: {
        BG: 'IMG_STAGE_FIELD_BG',
        FG: 'IMG_STAGE_FIELD_FG',
        COLL_GRASS: 'IMG_STAGE_FIELD_COLL_GRASS',
        COLL_PLANE: 'IMG_STAGE_FIELD_COLL_PLANE',
      },
      STONEHENGE: {
        FG: 'IMG_STAGE_STONEHENGE_FG',
        BG1: 'IMG_STAGE_STONEHENGE_BG1',
        BG2: 'IMG_STAGE_STONEHENGE_BG2',
        BG3: 'IMG_STAGE_STONEHENGE_BG3',
        RAIN: 'IMG_STAGE_STONEHENGE_RAIN',
      },
    },
    UI: {
      INGAME: {
        TIMER: 'IMG_UI_TIMER',
        CHARACTER_INFO: 'IMG_UI_CHARACTER_INFO',
        ARROW_RIGHT: 'IMG_UI_ARROW_RIGHT',
      },
      MENU: {
        BUTTON_BIG: 'IMG_UI_BUTTON_BIG',
        BUTTON_OPTIONS: 'IMG_UI_BUTTON_OPTIONS',
        MENU_BAR: 'IMG_MENU_BAR',
        MENU_SELECTED: 'IMG_MENU_SELECTED',
        MENU_ITEM: 'IMG_MENU_ITEM',
        BACK: 'BACK',
        READY: 'READY',
      },
    },
    CHARACTER: {
      MAGE: {
        PORTRAIT: 'IMG_CHARACTER_PORTAIT_MAGE',
      },
      WITCH: {
        PORTRAIT: 'IMG_CHARACTER_PORTRAIT_WITCH',
      },
      BUTCHER: {
        PORTRAIT: 'IMG_CHARACTER_PORTRAIT_BUTCHER',
      },
    },
  },
  TEXT: {
    UI: {
      INGAME: {
        TIMER: 'TEXT_UI_TIMER',
      },
    },
  },
  SPRITESHEET: {
    CHARACTERS: {
      TEST: 'SPR_CHARACTER_TEST',
      MAGE: {
        IMG: 'SPR_CHARACTER_MAGE',
        ABILITIES: {
          FIREBALL: {
            EXPLOSION: {
              IMG: 'SPR_CHARACTER_MAGE_ABILITY_FIREBALL_EXPLOSION_IMG',
              ANIM: 'SPR_CHARACTER_MAGE_ABILITY_FIREBALL_EXPLOSION_ANIM',
            },
            PARTICLE: 'SPR_CHARACTER_MAGE_ABILITY_FIREBALL_PARTICLE',
          },
        },
        CASTING: {
          IMG: 'SPR_CHARACTER_MAGE_CASTING_IMG',
          ANIM: 'SPR_CHARACTER_MAGE_CASTING_ANIM',
        },
      },
      WITCH: {
        SPR: 'SPR_CHARACTER_WITCH',
        ANIMS: {
          ATTACK: 'SPR_CHARACTER_WITCH_ATTACK',
          IDLE: 'SPR_CHARACTER_WITCH_IDLE',
          RUN: 'SPR_CHARACTER_WITCH_RUN',
          JUMP: 'SPR_CHARACTER_WITCH_JUMP',
        },
        ABILITIES: {
          AERIAL_BURST: {
            IMG: 'SPR_CHARACTER_WITCH_ABILITY_AERIAL_BURST_IMG',
            ANIM: 'SPR_CHARACTER_WITCH_ABILITY_AERIAL_BURST_ANIM',
          },
        },
      },
      BUTCHER: {
        SPR: 'SPR_CHARACTER_BUTCHER',
        ABILITIES: {
          CLEAVER: {
            IMG: 'SPR_CHARACTER_BUTCHER_CLEAVER_IMG',
            ANIM: 'SPR_CHARACTER_BUTCHER_ABILITY_CLEAVER_ANIM',
          },
          HOOK: {
            IMG: 'SPR_CHARACTER_BUTCHER_ABILITY_HOOK_IMG',
            ANIM: 'SPR_CHARACTER_BUTCHER_ABILITY_HOOK_ANIM',
          },
        },
        ANIMS: {
          IDLE: 'SPR_CHARACTER_BUTCHER_IDLE',
          RUN: 'SPR_CHARACTER_BUTCHER_RUN',
        },
      },
      DUST: {
        SPRINT: {
          IMG: 'SPR_CHARACTER_DUST_SPRINT',
          ANIM: 'SPR_CHARACTER_DUST_SPRINT_ANIM',
        },
        DODGE: {
          IMG: 'SPR_CHARACTER_DUST_DODGE',
          ANIM: 'SPR_CHARACTER_DUST_DODGE_ANIM',
        },
        JUMP: {
          IMG: 'SPR_CHARACTER_DUST_JUMP',
          ANIMS: {
            LAND: 'SPR_CHARACTER_DUST_JUMP_LAND_ANIM',
            JUMP: 'SPR_CHARACTER_DUST_JUMP_JUMP_ANIM',
          },
        },
      },
      SHIELD: {
        IMG: 'SPR_CHARACTER_SHIELD_IMG',
        ANIM: 'SPR_CHARACTER_SHIELD_ANIM',
      },
      HIT: {
        IMG: 'SPR_CHARACTER_HIT_IMG',
        ANIM: 'SPR_CHARACTER_HIT_ANIM',
      },
    },
  },
}
