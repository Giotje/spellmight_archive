import Phaser from 'phaser'
import { CST } from '../../CST'
import PlayerController, { PLAYERS } from '../../playerControllers'

import ButtonOptions from '../../gameObjects/menu/options'

class MenuEntry extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.MENU.ENTRY })
  }
  create() {
    this.add
      .image(0, 0, CST.IMAGE.MENU.ENTRY_BG)
      .setOrigin(0)
      .setAlpha(0.3)
      .setScale(0.3)
    this.logo = this.add
      .text(
        this.game.renderer.width / 2, // Centered
        this.game.renderer.height / 2 - 30,
        'Spell Might',
        {
          fontFamily: 'Adventurer',
          fontSize: 60,
          resolution: 16,
        }
      )
      .setOrigin(0.5)
    this.playText = this.add
      .text(
        this.game.renderer.width / 2, // Centered
        this.game.renderer.height / 2 + 40,
        'PRESS ENTER /START',
        {
          fontFamily: 'Superscript',
          fontSize: 15,
          resolution: 14,
        }
      )
      .setOrigin(0.5)

    this.buttonOptions = new ButtonOptions({ Scene: this })

    // Add player controllers
    this.PlayerController = new PlayerController({
      Scene: this,
    })

    this.playTextInterval = 50

    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    )
    this.blackScreen = this.add
      .rectangle(
        0,
        0,
        this.game.renderer.width,
        this.game.renderer.height,
        0x000000,
        1
      )
      .setAlpha(0)
      .setOrigin(0)
    this.scene.get(CST.SCENES.INPUT).getCurrentScene(CST.SCENES.MENU.ENTRY)
  }

  getControls(key, playerIndex, status) {
    if (playerIndex !== 0) return
    if (status === 'down') {
      if (key === 'ENTER/START') this.enterGame()
    }
  }

  enterGame() {
    this.tweens.add({
      targets: this.buttonOptions,
      y: this.game.renderer.height + 50,
      ease: 'Power1',
      duration: 300,
    })
    this.tweens.add({
      targets: this.playText,
      y: -50,
      ease: 'Power1',
      duration: 300,
    })
    this.tweens.add({
      targets: this.logo,
      y: -100,
      ease: 'Power1',
      duration: 300,
    })
    this.tweens.add({
      targets: this.blackScreen,
      alpha: 1,
      ease: 'Power2',
      delay: 300,
      duration: 200,
      onComplete: () => {
        this.scene.start(CST.SCENES.MENU.MAIN)
        this.scene.get(CST.SCENES.INPUT).getCurrentScene(null)
      },
    })
  }

  update() {
    this.playTextInterval -= 1
    if (this.playTextInterval === 0) {
      this.playTextInterval = 50
      if (this.playText.alpha === 1) {
        this.playText.setAlpha(0)
      } else {
        this.playText.setAlpha(1)
      }
    }
  }
}

export default MenuEntry
