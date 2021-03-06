import Phaser from 'phaser'
import ShakePositionPlugin from 'phaser3-rex-plugins/plugins/shakeposition-plugin.js'
import RexUIPlugin from 'phaser3-rex-plugins/dist/rexuiplugin.js'
import LOADER from './scenes/menus/LOADER.js'
import MenuEntry from './scenes/menus/menu_entry.js'
import MenuMain from './scenes/menus/menu_main.js'
import MenuCharacter from './scenes/menus/menu_character.js'
import MenuStages from './scenes/menus/menu_stages.js'
import MenuMultiplayer from './scenes/menus/menu_multiplayer.js'
import MenuJoin from './scenes/menus/menu_join.js'
import StageLoad from './scenes/stages/stage_load.js'
import StageTest from './scenes/stages/stage_test.js'
import StageField from './scenes/stages/stage_field.js'
import MenuCreate from './scenes/menus/menu_create.js'
import StageStonehenge from './scenes/stages/stage_stonehenge'
import Input from './scenes/input'
import HUD from './scenes/ingame_interface'
import MenuServer from './scenes/menus/menu_server'
import MenuLogin from './scenes/menus/menu_login'
const config = {
  type: Phaser.WEBGL,
  width: 480,
  height: 270,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    LOADER,
    MenuEntry,
    MenuMain,
    MenuCharacter,
    MenuMultiplayer,
    MenuCreate,
    MenuStages,
    MenuLogin,
    MenuJoin,
    MenuServer,
    StageLoad,
    StageTest,
    StageField,
    StageStonehenge,
    Input,
    HUD,
  ],
  title: 'Spell Might',
  autoFocus: true,
  input: {
    keyboard: true,
    mouse: true,
    gamepad: true,
  },
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  plugins: {
    global: [
      {
        key: 'rexShakePosition',
        plugin: ShakePositionPlugin,
        start: true,
      },
    ],
    scene: [
      {
        key: 'rexUI',
        plugin: RexUIPlugin,
        mapping: 'rexUI',
      },
    ],
  },
}

const game = new Phaser.Game(config)
