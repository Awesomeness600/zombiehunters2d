class Zombie {
    constructor() {
      if (numOfZombies > 4) {
        this.randomNumber = floor(random(0, 4))
      } else {
        this.randomNumber = 2
      }
      if (this.randomNumber == 1) {
        this.red = 200;
        this.green = 22;
        this.blue = 12;
        this.speed = 1;
        this.hurt = 20;
        this.health = 100
      } else if (this.randomNumber == 2 || this.randomNumber == 3) {
        this.red = 30;
        this.green = 115;
        this.blue = 20;
        this.speed = 0.8;
        this.hurt = 25;
        this.health = 120
      } else {
        this.red = 120;
        this.green = 25;
        this.blue = 148;
        this.speed = 0.6
        this.hurt = 30;
        this.health = 150
      }
      this.timer = 2;
      this.randomize()
    }
    randomize() {
      this.x = random(0, width - _(150, 'w'));
      this.y = random(0, height);
      if (this.x == posX || this.y == posY) {
        this.randomize()
      }
      if (!smackZ(this.x, this.y)) {
        this.randomize()
      }
    }
    move() {
      if (this.x !== posX) {
        if (this.x > posX) {
          if (smackZ(this.x - this.speed, this.y)) {
            this.x = this.x - this.speed
          }
        } else if (this.x < posX) {
          if (smackZ(this.x + this.speed, this.y)) {
            this.x = this.x + this.speed
          }
        }
      }
      if (this.y !== posY) {
        if (this.y > posY) {
          if (smackZ(this.x, this.y - this.speed)) {
            this.y = this.y - this.speed
          }
        } else if (this.y < posY) {
          if (smackZ(this.x, this.y + this.speed)) {
            this.y = this.y + this.speed
          }
        }
      }
    }
  
    show() {
      //fill(30, 115, 20)
      fill(this.red, this.green, this.blue)
      ellipse(this.x, this.y, 50, 50)
      fill(0)
      textSize(11)
      text(this.health, this.x, this.y - 5)
    }
  
    damage() {
      if (cooldownReady) {
        let d = floor(dist(posX, posY, this.x, this.y))
        if (d < 30 + 25) {
          health -= this.hurt
          if (zombieHitSound == "on") {
            hit.play()
          }
          cooldownReady = false
        }
      } else {
        if (frameCount % 60 == 0 && this.timer > 0) {
          this.timer--;
        }
        if (this.timer == 0) {
          cooldownReady = true
          this.timer = 2;
        }
      }
      if (health <= 0) {
        gamePhase = "dead"
      }
    }
  
    contains(px, py) {
      let d = dist(px, py, this.x, this.y);
      if (d < 50) {
        return true;
      } else {
        return false;
      }
    }
  
    distBetween() {
      shotDist = dist(this.x, this.y, posX, posY)
      if (shotDist < 75) {
        shotgunDamage = 80;
      } else if (shotDist < 125 && shotDist > 75) {
        shotgunDamage = 60
      } else if (shotDist < 150 && shotDist > 125) {
        shotgunDamage = 50
      } else if (shotDist < 200 && shotDist > 150) {
        shotgunDamage = 30
      } else if (shotDist < 250 && shotDist > 200) {
        shotgunDamage = 15
      } else if (shotDist < 300 && shotDist > 250) {
        shotgunDamage = 10
      } else if (shotDist > 300) {
        shotgunDamage = 5
      }
      if (this.contains(mouseX, mouseY) && vision(posX, posY, this.x, this.y)) {
        this.health -= shotgunDamage
      }
    }
  
    hitZone(px, py) {
      let d = dist(px, py, this.x, this.y)
      if (d < 75) {
        return true;
      } else {
        return false;
      }
    }
}
  
class Crate {
    constructor() {
      this.randomize()
    }
  
    randomize() {
      this.x1 = random(0, width - _(150, 'w'));
      this.y1 = random(0, height);
      if (!smackC(this.x1, this.y1)) {
        this.randomize()
      }
    }
  
    show() {
      fill(80)
      this.x = this.x1
      this.y = this.y1
  
      ellipse(this.x, this.y, 30)
    }
  
    give() {
      let d = dist(posX, posY, this.x, this.y)
      if (d < 30 + 15) {
        fill(0)
        textAlign(CENTER)
        text('press E to pick up', this.x, this.y + 15)
        textAlign(LEFT)
        fill(80)
        if (keyIsDown(69)) {
          revolverBarrel = 6;
          shotgunShells = 5;
          for (let i = crates.length - 1; i >= 0; i--) {
            crates.splice(i, 1)
            reloadPistol.play()
          }
          for (let i = 0; i < 1; i++) {
            crates[i] = new Crate()
          }
        }
      }
    }
}
  
class Person {
    constructor() {}
  
    move() {
      if (keyIsDown(87) && keyIsDown(68)) {
        if (smack(posX, posY - 1.25)) {
          posY = posY - 1.25;
        }
        if (smack(posX + 1.25, posY)) {
          posX = posX + 1.25;
        }
      } else if (keyIsDown(87) && keyIsDown(65)) {
        if (smack(posX, posY - 1.25)) {
          posY = posY - 1.25;
        }
        if (smack(posX - 1.25, posY)) {
          posX = posX - 1.25;
        }
      } else if (keyIsDown(83) && keyIsDown(68)) {
        if (smack(posX, posY + 1.25)) {
          posY = posY + 1.25;
        }
        if (smack(posX + 1.25, posY)) {
          posX = posX + 1.25;
        }
      } else if (keyIsDown(83) && keyIsDown(65)) {
        if (smack(posX, posY + 1.25)) {
          posY = posY + 1.25;
        }
        if (smack(posX - 1.25, posY)) {
          posX = posX - 1.25;
        }
      } else if (keyIsDown(87)) {
        if (smack(posX, posY - 1.25)) {
          posY = posY - 1.25;
        }
      } else if (keyIsDown(83)) {
        if (smack(posX, posY + 2)) {
          posY = posY + 2;
        }
      } else if (keyIsDown(68)) {
        if (smack(posX + 2, posY)) {
          posX = posX + 2;
        }
      } else if (keyIsDown(65)) {
        if (smack(posX - 2, posY)) {
          posX = posX - 2;
        }
      }
  
      //dont walk of walls
      if (posX > width - _(150, 'w')) {
        posX = width - _(150, 'w');
      } else if (posX < 0) {
        posX = 0;
      } else if (posY > height) {
        posY = height;
      } else if (posY < 0) {
        posY = 0;
      }
  
      if (keyIsDown(27)) {
        gamePhase = "pause"
      }
    }
  
    knifeRadius() {
      noFill(220)
      ellipse(posX, posY, 100, 100)
    }
  
    show() {
      fill(25)
      ellipse(posX, posY, 60, 60)
      textSize(20)
      fill(255)
      text('SWAT', posX - 26, posY + 5)
    }
}
  
class Particle {
    constructor() {
      this.x = grenadeX;
      this.y = grenadeY;
      this.vx = random(-1, 1);
      this.vy = random(-5, -1);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      //stroke(255);
      fill(255, this.alpha);
      ellipse(this.x, this.y, 16);
    }
}