function settings() {
    fill(150)
    rect(0, 0, width, height)
    fill(0)
    text('Settings Coming Soon!', 0, 150)
    strokeWeight(0.5)
    stroke(0)
    fill(150)
    rect(0, 0, width / 2, height)
    rect(width / 2, 0, width / 2, height)
    fill(255)
    rect(0, 0, width, 100)
    noStroke()
    image(exitImg, 0, 0)
    exitImg.resize(100, 100)
    if (audioToggle == "on") {
      background(200, 30, 30)
      noStroke()
      fill(255)
      rect(0, 0, width, 100)
      image(exitImg, 0, 0)
      exitImg.resize(100, 100)
      textSize(30)
      text('Shotgun SoundFX:              ' + shotgunShotSound, 30, 160)
      text('Revolver SoundFX:             ' + revolverShotSound, 30, 190)
      text('Musket SoundFX:                ' + musketShotSound, 30, 220)
      text('Knife SoundFX:                   ' + knifeSliceSound, 30, 250)
      text('Shotgun Equip SoundFX:    ' + shotgunEquipSound, 30, 280)
      text('Revolver Equip SoundFX:   ' + revolverDrawSound, 30, 310)
      text('Knife Equip SoundFX:         ' + knifeDrawSound, 30, 340)
      text('Zombie Hit SoundFX:          ' + zombieHitSound, 30, 370)
      noFill()
      stroke(0)
      rect(0, 130, width, 30)
      rect(0, 160, width, 30)
      rect(0, 190, width, 30)
      rect(0, 220, width, 30)
      rect(0, 250, width, 30)
      rect(0, 280, width, 30)
      rect(0, 310, width, 30)
      rect(0, 340, width, 30)
    } else if (keybindToggle == "on") {
      background(30, 30, 200)
      noStroke()
      fill(255)
      rect(0, 0, width, 100)
      image(exitImg, 0, 0)
      exitImg.resize(100, 100)
    }
}
  
function howToPlay() {
    fill(150)
    rect(0, 0, width, height)
    fill(0)
    textSize(20)
    text('How To Play: ', 0, 120)
    text('W, A, S, and D to move around the map.', 0, 140)
    text('Left Click to shoot, but be mindful of your ammo.', 0, 160)
    text('E to refill your ammo (the small gray circles).', 0, 180)
    text('Q to cycle through your weapons.', 0, 200)
    text('SPACE to switch to a knife (which is infinite but only does 10 damage).', 0, 220)
    text('ESC to pause.', 0, 240)
    text('At round five new types of zombies appear', 0, 260)
    text('See How Long You Can Last!!', 0, 280)
  
    noStroke()
    fill(255)
    rect(0, 0, width, 100)
    image(exitImg, 0, 0)
    exitImg.resize(100, 100)
}

function patchNotes() {
  window.open('html/patchnotes.html', '_self')
  // fill(150)
  // rect(0, 0, width, height)
  // fill(0)
  // textSize(20)
  // text("Patch Notes: ", 10, 120)
  // text("v0.13 - Many Enemies Update", 10, 140)
  // text("added three new zombies", 10, 160)
  // text("purple: movement - 0.6, damage - 30, health - 150", 10, 180)
  // text('green: movement - 0.8, damage - 25, health - 120', 10, 200)
  // text("red: movement - 1, damage - 20, health - 100", 10, 220)
  // text('shotgun clip increased to 5', 10, 240)
  // text('player is now in "swat suit"', 10, 260)
  // text('credit 74-Up on youtube for drawings', 10, 280)
  // text("v0.12 - The Loading Screen Update :", 10, 300)
  // text("- Added dedicated guide and patch note buttons :", 10, 320)
  // text("- title screen now actually displays the title", 10, 340)
  // text('- credit 74-Up on youtube for drawings', 10, 360)
  // text("v0.11 - The Shotgun Patch", 10, 380)
  // text('- Fixed Shotgun Bugs and increased ammo to 4 shells', 10, 400)
  // text("Damages : < 75px = 80dmg, < 125px = 60, < 150px = 50, < 200px = 30dmg < 250 = 15dmg, > 300 = 5dmg", 10, 420)
  // text('credit 74-Up on youtube for drawings', 10, 440)

  // noStroke()
  // fill(255)
  // rect(0, 0, width, 100)
  // image(exitImg, 0, 0)
  // exitImg.resize(100, 100)
}

function start() {
  if (keyIsDown(32)) {
    gamePhase = "play"
  }
  background(255)
  imageMode(CORNER)
  image(guideIcon, width - width/7.5, 0)
  guideIcon.resize(width/7.5, height/4)

  image(notesIcon, width - width/7.5, (height/4))
  notesIcon.resize(width/7.5, height/4)

  image(gearIcon, width - width/7.5, (2 * (height/4)))
  gearIcon.resize(width/7.5, height/4)
  
  image(gearIcon, width - width/7.5, (3 * (height/4)))
  gearIcon.resize(width/7.5, height/4)

  image(gameLogo, 0, 0)
  gameLogo.resize(width - width/7.5, height)

  noFill()
  stroke(0.5)

  rect(width - width/7.5, 0, width/7.5, height/4)
  rect(width - width/7.5, height/4, width/7.5, height/4)
  rect(width - width/7.5, (2 * (height/4)), width/7.5, height/4)
  rect(width - width/7.5, (3 * (height/4)), width/7.5, height/4)

  fill(0, 255, 0)
  textAlign(CENTER)
  textSize(50)
  strokeWeight(4)
  fill(0)
  noStroke()
  textSize(20)
  textAlign(LEFT)
  textSize(50)
  text('Press SPACE to start!', 50, height - 100)
  if (guideToggle == "on") {
    howToPlay()
  }
  if (notesToggle == "on") {
    patchNotes()
  }
  if (settingsToggle == "on") {
    settings()
  }
}