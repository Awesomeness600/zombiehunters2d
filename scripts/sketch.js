function preload() {
  dirt = loadImage('images/dirt.JPG')
  musketAmmoImg = loadImage('images/bullets.JPG')
  minigunImg = loadImage('images/LMG.JPG')
  grenadeIcon = loadImage('images/grenade.JPG')
  bombTexture = loadImage('images/explosion-texture.jpg')
  musketShot = loadSound("audio/rifle-shot .m4a")
  musketIcon = loadImage('images/musket.jpeg')
  teleportIcon = loadImage('images/teleporticon.JPG')
  coinImg = loadImage('images/coin.jpeg')
  medkitIcon = loadImage('images/medkit.JPG')
  gearIcon = loadImage('images/gearicon.JPG')
  notesIcon = loadImage('images/patchnotesicon.JPG')
  guideIcon = loadImage('images/guideicon.JPG')
  exitImg = loadImage('images/exit.JPG')
  gameLogo = loadImage('images/gamelogo.jpg')
  shotgunImg = loadImage("images/shotgun.jpeg")
  knifeImg = loadImage("images/knife.jpeg")
  revolverImg = loadImage("images/revolver.JPG")
  hit = loadSound("audio/kick.m4a")
  shotgunShot = loadSound("audio/shotgun-shot.m4a")
  shotgunCocking = loadSound("audio/shotgun-cocking.m4a")
  drawRevolver = loadSound("audio/equip-revolver.m4a")
  pistolShot = loadSound("audio/pistol.m4a")
  reloadPistol = loadSound("audio/reload .m4a")
  drawKnife = loadSound("audio/knife-drawn.m4a")
  swingKnife = loadSound("audio/knife-slice.m4a")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  person = new Person();
  for (let i = 0; i < 1; i++) {
    crates[i] = new Crate()
  }
  for (let i = 0; i < numOfZombies; i++) {
    zombies[i] = new Zombie(_(200, 'width'), _(200, 'height'), 40)
  }
}

function _(num, param) {
  if (param === "width" || param === width || param === 'w') {
        return (num * width)/1500
    } else if (param === "height" || param === height || param === 'h') {
        return (num * height)/890
    }
}

function draw() {
  resizeCanvas(windowWidth, windowHeight)
  if (gamePhase == "play") {
    play()
  } else if (gamePhase == "pause") {
    textAlign(CENTER)
    text('you are paused', width / 2, height / 2)
    text('hit space to unpause', width / 2, height / 2 - _(50, 'height'))
    textAlign(LEFT)
    if (pauseSettings == "on") {
      background(200, 30, 30)
      noStroke()
      fill(255)
      rect(0, 0, width, _(100, 'w'))
      image(exitImg, 0, 0)
      exitImg.resize(_(100, 'w'), _(100, 'h'))
      textSize(30)
      text('Shotgun SoundFX:              ' + shotgunShotSound, _(30, 'w'), _(160, 'h'))
      text('Revolver SoundFX:             ' + revolverShotSound, _(30, 'w'), _(190, 'h'))
      text('Musket SoundFX:                ' + musketShotSound, _(30, 'w'), _(220, 'h'))
      text('Knife SoundFX:                   ' + knifeSliceSound, _(30, 'w'), _(250, 'h'))
      text('Shotgun Equip SoundFX:    ' + shotgunEquipSound, _(30, 'w'), _(280, 'h'))
      text('Revolver Equip SoundFX:   ' + revolverDrawSound, _(30, 'w'), _(310, 'h'))
      text('Knife Equip SoundFX:         ' + knifeDrawSound, _(30, 'w'), _(340, 'h'))
      text('Zombie Hit SoundFX:          ' + zombieHitSound, _(30, 'w'), _(370, 'h'))
      noFill()
      stroke(0)
      rect(0, _(130, 'h'), width, _(30, 'w'))
      rect(0, _(160, 'h'), width, _(30, 'w'))
      rect(0, _(190, 'h'), width, _(30, 'w'))
      rect(0, _(220, 'h'), width, _(30, 'w'))
      rect(0, _(250, 'h'), width, _(30, 'w'))
      rect(0, _(280, 'h'), width, _(30, 'w'))
      rect(0, _(310, 'h'), width, _(30, 'w'))
      rect(0, _(340, 'h'), width, _(30, 'w'))
    }

  } else if (gamePhase == "start") {
    start()
  } else if (gamePhase == "dead") {
    background(255, 0, 0)
    textAlign(CENTER)
    textSize(50)
    text('Man That Really Sucks That U Died LOL', width / 2, height / 2)
    text('you died on round ' + numOfZombies, width / 2, _(height / 2 + 50, 'h'))
    text('press SPACE to play again', width / 2, _(height / 2 + 200, 'h'))
  }
}

function mouseClicked() {
  if (gamePhase == "play") {
    if (mouseX < _(width - 150, 'w')) {
      if (weapon == "revolver") {
        if (revolverBarrel > 0) {
          revolverBarrel--
          if (revolverShotSound == "on") {
            pistolShot.play()
          }
          for (let i = zombies.length - 1; i >= 0; i--) {
            if (zombies[i].contains(mouseX, mouseY) && vision(posX, posY, zombies[i].x, zombies[i].y)) {
              zombies[i].health -= 25
              if (zombies[i].health <= 0) {
                zombies.splice(i, 1);
                coins += floor(random(2, 5))
              }
            }
          }
        }
      } else if (weapon == "knife") {
        if (knifeSliceSound == "on") {
          swingKnife.play()
        }
        for (let i = zombies.length - 1; i >= 0; i--) {
          if (zombies[i].contains(mouseX, mouseY) && zombies[i].hitZone(posX, posY) && vision(posX, posY, zombies[i].x, zombies[i].y)) {
            zombies[i].health -= 10
            if (zombies[i].health <= 0) {
              zombies.splice(i, 1);
              coins += floor(random(2, 5))
            }
          }
        }
      } else if (weapon == "shotgun") {
        if (shotgunShells > 0) {
          for (let i = zombies.length - 1; i >= 0; i--) {
            zombies[i].distBetween()
            if (zombies[i].health <= 0) {
              zombies.splice(i, 1);
              coins += floor(random(2, 5))
            }
          }
        }
        if (shotgunShells !== 0) {
          if (shotgunShotSound == "on")
            shotgunShot.play()
          shotgunShells--
        }
      } else if (weapon == "musket") {
        if (musketAmmo > 0) {
          musketAmmo--
          if (musketShotSound == "on") {
            musketShot.play()
          }
          for (let i = zombies.length - 1; i >= 0; i--) {
            if (zombies[i].contains(mouseX, mouseY) && vision(posX, posY, zombies[i].x, zombies[i].y)) {
              zombies[i].health -= 60
              if (zombies[i].health <= 0) {
                zombies.splice(i, 1);
                coins += floor(random(2, 5))
              }
            }
          }
        }
      }
    }
    if (mouseX > _(width - 150, 'w')) {
      if (mouseY < _(200, 'h') && mouseY > _(100, 'h')) {
        if (coins >= 35) {
          medkits++
          coins -= 35
        }
      } else if (mouseY < _(300, 'h') && mouseY > _(200, 'h')) {
        if (coins >= 35) {
          teleports++
          coins -= 35
        }
      } else if (mouseY < _(400, 'h') && mouseY > _(300, 'h')) {
        if (coins >= 50) {
          grenades++
          coins -= 50
        }
      } else if (mouseY < _(500, 'h') && mouseY > _(400, 'h')) {
        if (musketBought == false) {
          if (coins >= 70) {
            musketBought = true;
            coins -= 70
          }
        } else {
          if (coins >= 25) {
            musketAmmo = 6;
            coins -= 25
          }
        }
      } else if (mouseY < _(600, 'h') && mouseY > _(500, 'h')) {
        if (coins >= 70 && minigunTimer == 15) {
          coins -= 70
          weapon = "minigun"
          setTimeout(function() {
            weapon = "shotgun";
          }, minigunTimer * 1000)
          intervalId = setInterval(function() {
            minigunTimer--;
          }, 1000)
        }
      }
    }
  } else if (gamePhase == "start") {
    if (mouseX > _(width - 150, 'w')) {
      if (mouseY < _(200, 'h') && settingsToggle == "off" && notesToggle == "off") {
        guideToggle = "on";
      } else if (mouseY < _(450, 'h') && guideToggle == "off" && settingsToggle == "off") {
        notesToggle = "on";
      } else if (mouseY < _(650, 'h') && notesToggle == "off" && guideToggle == "off") {
        settingsToggle = "on"
        setTimeout(function() {
          keybindToggle = "off";
        }, .0000000000000000000000000000001)
      }
    }
    if (guideToggle == "on") {
      if (mouseX < _(100, 'w')) {
        if (mouseY < _(100, 'h')) {
          guideToggle = "off"
        }
      }
    }
    if (notesToggle == "on") {
      if (mouseX < _(100, 'w')) {
        if (mouseY < _(100, 'h')) {
          notesToggle = "off"
        }
      }
    }
    if (settingsToggle == "on") {
      if (mouseY < _(100, 'h')) {
        if (mouseX < _(100, 'w') && keybindToggle == "off" && audioToggle == "off") {
          settingsToggle = "off"
        } else if (mouseX < _(100, 'w') && settingsToggle == "on" && audioToggle == "off") {
          keybindToggle = "off"
        } else if (mouseX < _(100, 'w') && settingsToggle == "on" && keybindToggle == "off") {
          audioToggle = "off"
        }
      }
      if (mouseY > _(100, 'h')) {
        if (mouseX < width / 2 && keybindToggle == "off") {
          audioToggle = "on"
          keybindToggle = "off"
        } else if (mouseX > width / 2 && audioToggle == "off") {
          keybindToggle = "on"
          audioToggle = "off"
        }
      }
      if (audioToggle == "on") {
        if (mouseY < _(160, 'h') && mouseY > _(130, 'h')) {
          if (shotgunShotSound == "on") {
            shotgunShotSound = "off"
          } else {
            shotgunShotSound = "on"
          }
        } else if (mouseY < _(190, 'h')) {
          if (revolverShotSound == "on") {
            revolverShotSound = "off"
          } else {
            revolverShotSound = "on"
          }
        } else if (mouseY < _(220, 'h')) {
          if (musketShotSound == "on") {
            musketShotSound = "off"
          } else {
            musketShotSound = "on"
          }
        } else if (mouseY < _(250, 'h')) {
          if (knifeSliceSound == "on") {
            knifeSliceSound = "off"
          } else {
            knifeSliceSound = "on"
          }
        } else if (mouseY < _(280, 'h')) {
          if (shotgunEquipSound == "on") {
            shotgunEquipSound = "off"
          } else {
            shotgunEquipSound = "on"
          }
        } else if (mouseY < _(310, 'h')) {
          if (revolverDrawSound == "on") {
            revolverDrawSound = "off"
          } else {
            revolverDrawSound = "on"
          }
        } else if (mouseY < _(340, 'h')) {
          if (knifeDrawSound == "on") {
            knifeDrawSound = "off"
          } else {
            knifeDrawSound = "on"
          }
        } else if (mouseY < _(370, 'h')) {
          if (zombieHitSound == "on") {
            zombieHitSound = "off"
          } else {
            zombieHitSound = "on"
          }
        }
      }
    }
  } else if (gamePhase == "dead") {} else if (gamePhase == "pause") {
    if (mouseX > width - _(200, 'w') && mouseY < _(200, 'h')) {
      pauseSettings == off
      console.log('off')
    } else if (mouseX < _(200, 'w') && mouseY < _(200, 'h')) {
      pauseSettings == on
      console.log('on')
    }
  }
}

function keyPressed() {
  if (gamePhase == "play") {
    if (keyCode == 81) {
      if (weapon == "knife" || weapon == 'musket') {
        if (revolverDrawSound == "on") {
          drawRevolver.play()
        }
        weapon = "revolver"
      }
      if (weapon == "revolver") {
        if (shotgunEquipSound == "on")
          shotgunCocking.play()
        weapon = "shotgun"
      } else if (weapon == "shotgun") {

        if (revolverDrawSound == "on") {
          drawRevolver.play()
        }
        weapon = "revolver"
      }
    } else if (keyCode == 32) {
      if (knifeDrawSound == "on") {
        drawKnife.play()
      }
      weapon = "knife"
    } else if (keyCode == 49) {
      if (medkits > 0) {
        if (health <= 60) {
          health += 40
        } else {
          health = 100
        }
        medkits--
      }
    } else if (keyCode == 50) {
      if (teleports > 0) {
        posX = mouseX
        posY = mouseY
        teleports--
      }
      print(width)
    } else if (keyCode == 52) {
      weapon = "musket"
    } else if (keyCode == 51) {
      if (grenades > 0) {
        if (!drawGrenade) {
          grenades--
          grenadeX = mouseX
          grenadeY = mouseY
          drawGrenade = true
          setTimeout(function() {
            grenadeHurt = true;
            setTimeout(function() {
              grenadeHurt = false;
              drawGrenade = false;
            }, 2500)
          }, 1000)
        }
      }
    }
  } else if (gamePhase == "dead") {
    if (keyCode == 32) {
      location.reload()
    }
  } else if (gamePhase == "pause") {
    if (keyCode == 32) {
      gamePhase = "play"
    }
  }
}