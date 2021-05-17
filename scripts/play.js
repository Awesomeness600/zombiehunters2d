function play() {
    showMap();
    showEntities();
    minigun();
    grenade();
    healthUI();
    showShop();
    gunUI();
    newRound();
}

function showMap() {
    //map
    image(dirt, 0, 0)
    dirt.resize(width - _(150, 'width'), height)
    fill(90)
    rect(_(width - 200 - 150, 'width'), _(30, 'height'), _(150, 'width'), _(250, 'height'))
    rect(_(width - 375 - 150, 'width'), _(30, 'height'), _(150, 'width'), _(250, 'height'))
    rect(_(width - 550 - 150, 'width'), _(30, 'height'), _(150, 'width'), _(250, 'height'))
    fill(0)
    text('Cabins', _(width - 345 - 150, 'width'), _(150, 'height'))
    fill(29.4, 42.5, 12.5)
    rect(_(180 - 150, 'width'), _(height - 190, 'height'), 50)
    rect(_(200 - 150, 'width'), _(height - 200, 'height'), 50)
    rect(_(180 - 150, 'width'), _(height - 200, 'height'), 50)
    rect(_(190 - 150, 'width'), _(height - 210, 'height'), 50)
    fill(29.4, 42.5, 12.5)
    rect(_(width - 180 - 150, 'w'), _(height - 240, 'h'), 50)
    rect(_(width - 200 - 150, 'w'), _(height - 250, 'h'), 50)
    rect(_(width - 180 - 150, 'w'), _(height - 250, 'h'), 50)
    rect(_(width - 190 - 150, 'w'), _(height - 260, 'h'), 50)
    textAlign(LEFT)
    cursor(CROSS)
    fill(0)
    strokeWeight(0.5)
    stroke(0)
}

function showEntities() {
    //your character
    person.move()
    person.show()
    if (weapon == 'knife') {
    person.knifeRadius()
    }

    //crates
    for (let i = 0; i < crates.length; i++) {
    crates[i].show()
    crates[i].give()
    }

    //zombies
    for (let i = 0; i < zombies.length; i++) {
    zombies[i].move()
    zombies[i].show()
    zombies[i].damage()
    }
}

function minigun() {
    // minigun
    if (weapon == "minigun") {
    if (mouseIsPressed) {
        console.log('shooting')
        for (let i = zombies.length - 1; i >= 0; i--) {
        if (zombies[i].contains(mouseX, mouseY) && vision(posX, posY, zombies[i].x, zombies[i].y)) {
            zombies[i].health -= 2
            if (zombies[i].health <= 0) {
            zombies.splice(i, 1);
            coins += floor(random(2, 5))
            }
        }
        }
    }
    }

    if (minigunTimer == 0) {
    clearInterval(intervalId)
    minigunTimer = 15
    console.log('clear')
    }
}

function grenade() {
    //grenades
    if (drawGrenade) {
    fill(0)
    ellipse(grenadeX, grenadeY, 60)
    if (!grenadeHurt) {
        for (let i = 0; i < 5; i++) {
        let p = new Particle();
        particles.push(p);
        }
        for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
        }
    }
    if (grenadeHurt) { 
        fill(255, 0, 0)
        ellipse(grenadeX, grenadeY, 80)
        let d = floor(dist(posX, posY, grenadeX, grenadeY))
        if (d < 80) {
        health -= 40
        }
        for (let i = 0; i < zombies.length; i++) {
        let d = floor(dist(zombies[i].x, zombies[i].y, grenadeX, grenadeY))
        if (d < 40 + 25) {
            zombies[i].health -= 40
            if (zombies[i].health <= 0) {
            zombies.splice(i, 1);
            }
        }
        }
    }
    fill(0)
    }
}

function healthUI() {
    //health
    strokeWeight(0.5)
    stroke(0)
    textSize(20)
    text(health, _(20, 'w'), _(20, 'h'))
    fill(255)
    noStroke()
    rect(_(width - 150, 'w'), _(100, 'h'), _(150, 'w'), _(100, 'h'))
    rect(_(width - 150, 'w'), 0, _(150, 'w'), height)
    fill(0)
    strokeWeight(0.5)
    stroke(0)
}

function showShop() {
    //musket
    if (musketBought == false) {
    image(musketIcon, _(width - 150, 'w'), _(400, 'h'))
    musketIcon.resize(_(150, 'w'), _(100, 'h'))
    text("70¢", _(width - 150, 'w'), _(500, 'h'))
    textSize(10)
    textAlign(CENTER)
    text("press 4 to use", _(width - 70, 'w'), _(500, 'h'))
    textSize(20)
    textAlign(LEFT)
    } else {
    image(musketAmmoImg, _(width - 150, 'w'), _(400, 'h'))
    musketAmmoImg.resize(_(150, 'w'), _(100, 'h'))

    text("25¢", _(width - 150, 'w'), _(500, 'h'))
    textSize(10)
    textAlign(CENTER)
    text("press 4 to use", _(width - 70, 'w'), _(500, 'h'))
    textSize(20)
    textAlign(LEFT)
    }
    text(musketAmmo, _(width - 30, 'w'), _(420, 'h'))

    //teleport
    image(teleportIcon, _(width - 150, 'w'), _(200, 'h'))
    teleportIcon.resize(_(150, 'w'), _(100, 'h'))
    text("35¢", _(width - 150, 'w'), _(300, 'h'))
    textSize(10)
    textAlign(CENTER)
    text("press 2 to use", _(width - 70, 'w'), _(300, 'h'))
    textSize(20)
    textAlign(LEFT)
    text(teleports, _(width - 20, 'w'), _(220, 'h'))

    //grenade
    image(grenadeIcon, _(width - 150, 'w'), _(300, 'h'))
    grenadeIcon.resize(_(150, 'w'), _(100, 'h'))
    text("50¢", _(width - 150, 'w'), _(400, 'h'))
    textSize(10)
    textAlign(CENTER)
    text("press 3 to use", _(width - 70, 'w'), _(400, 'h'))
    textSize(20)
    textAlign(LEFT)
    text(grenades, _(width - 20, 'w'), _(320, 'h'))

    //minigun
    image(minigunImg, _(width - 150, 'w'), _(505, 'h'))
    minigunImg.resize(_(150, 'w'), _(100, 'h'))
    text("70¢", _(width - 150, 'w'), _(600, 'h'))
    textSize(10)
    textAlign(CENTER)
    text("press 5 to use", _(width - 70, 'w'), _(600, 'h'))
    textSize(20)
    textAlign(LEFT)
    text(minigunTimer, _(width - 40, 'w'), _(520, 'h'))

    //medkit
    image(medkitIcon, _(width - 150, 'w'), _(100, 'h'))
    medkitIcon.resize(_(150, 'w'), _(100, 'h'))
    text("35¢", _(width - 150, 'w'), _(200, 'h'))
    textSize(10)
    textAlign(CENTER)
    text("press 1 to use", _(width - 70, 'w'), _(200, 'h'))
    textSize(20)
    textAlign(LEFT)
    text(medkits, _(width - 20, 'w'), _(120, 'h'))
    
    //coins
    image(coinImg, _(width - 150, 'w'), 0)
    coinImg.resize(_(150, 'w'), _(100, 'h'))
}

function gunUI() {
    //UI for guns 
    text('coins: ' + coins, _(width - 115, 'w'), _(100, 'h'))
    if (weapon == "shotgun") {
    image(shotgunImg, _(width - 150, 'w'), _(height - 100, 'h'))
    shotgunImg.resize(_(150, 'w'), _(100, 'h'))
    textSize(20)
    text(weapon, _(width - 120, 'w'), _(height - 10, 'h'))
    text(shotgunShells + '/5', _(width - 40, 'w'), _(height -80, 'h'))
    } else if (weapon == "knife") {
    image(knifeImg, _(width - 150, 'w'), _(height - 100, 'h'))
    knifeImg.resize(_(150, 'w'), _(100, 'h'))
    text(weapon, _(width - 120, 'w'), _(height - 10, 'h'))
    text('∞ - infinite', _(width - 110, 'w'), _(height -80, 'h'))
    } else if (weapon == "revolver") {
    image(revolverImg, _(width - 150, 'w'), _(height - 100, 'h'))
    revolverImg.resize(_(150, 'w'), _(100, 'h'))
    text(weapon, _(width - 140, 'w'), _(height - 10, 'h'))
    text(revolverBarrel + '/6', _(width - 40, 'w'), _(height -80, 'h'))
    } else if (weapon == "musket") {
    image(musketIcon, _(width - 150, 'w'), _(height - 100, 'h'))
    musketIcon.resize(_(150, 'w'), _(100, 'h'))
    text(weapon, _(width - 140, 'w'), _(height - 10, 'h'))
    text(musketAmmo + '/6', _(width - 40, 'w'), _(height -80, 'h'))
    }
}

function newRound() {
    //zombie code
    textSize(40)
    text(zombieRound, (_(width - 150, 'w')) / 2, 60)
    if (zombies.length == 0) {
    if (health !== 0 && health !== 100)
        if (health <= 90) {
        health += 10
        } else {
        health = 100
        }
    numOfZombies++
    for (let i = 0; i < numOfZombies; i++) {
        zombies[i] = new Zombie(200, 200, 40)
    }
    zombieRound++
    }
}