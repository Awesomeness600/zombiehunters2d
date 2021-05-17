function circRect(posX, posY, rad, rx, ry, rw, rh) {
  let testX = posX;
  let testY = posY;

  if (posX < rx) testX = rx; // test left edge
  else if (posX > rx + rw) testX = rx + rw; // right edge
  if (posY < ry) testY = ry; // top edge
  else if (posY > ry + rh) testY = ry + rh; // bottom edge

  let d = dist(posX, posY, testX, testY);

  if (d <= rad) {
    return true;
  }

  return false;

}

function smack(x, y) {
  numberOfHits = 0;
  if (circRect(x, y, r, _(width - 180 - 150, 'w'), _(height - 240, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(width - 200 - 150, 'w'), _(height - 250, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(width - 180 - 150, 'w'), _(height - 250, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(width - 190 - 150, 'w'), _(height - 260, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(180 - 150, 'w'), _(height - 190, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(200 - 150, 'w'), _(height - 200, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(180 - 150, 'w'), _(height - 200, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(190 - 150, 'w'), _(height - 210, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(width - 200 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (circRect(x, y, r,_(width - 375 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (circRect(x, y, r, _(width - 550 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (this.numberOfHits !== 0) {
    return false
  } else {
    return true
  }
}

function smackZ(x, y) {
  numberOfHits = 0;
  if (circRect(x, y, 25, _(width - 180 - 150, 'w'), _(height - 240, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(width - 200 - 150, 'w'), _(height - 250, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(width - 180 - 150, 'w'), _(height - 250, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(width - 190 - 150, 'w'), _(height - 260, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(180 - 150, 'w'), _(height - 190, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(200 - 150, 'w'), _(height - 200, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(180 - 150, 'w'), _(height - 200, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(190 - 150, 'w'), _(height - 210, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(width - 200 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(width - 375 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (circRect(x, y, 25, _(width - 550 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (this.numberOfHits !== 0) {
    return false
  } else {
    return true
  }
}

function smackC(x, y) {
  numberOfHits = 0;
  if (circRect(x, y, 15, _(width - 180 - 150, 'w'), _(height - 240, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(width - 200 - 150, 'w'), _(height - 250, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(width - 180 - 150, 'w'), _(height - 250, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(width - 190 - 150, 'w'), _(height - 260, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(180 - 150, 'w'), _(height - 190, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(200 - 150, 'w'), _(height - 200, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(180 - 150, 'w'), _(height - 200, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(190 - 150, 'w'), _(height - 210, 'h'), 50, 50)) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(width - 200 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(width - 375 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (circRect(x, y, 15, _(width - 550 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'))) {
    this.numberOfHits++
  }
  if (this.numberOfHits !== 0) {
    return false
  } else {
    return true
  }
}

function looky(rx, ry, rw, rl, x, y, zx, zy) {
  rx = floor(rx)
  ry = floor(ry)
  rw = floor(rw)
  rl = floor(rl)
  x = floor(x)
  y = floor(y)
  zx = floor(zx)
  zy = floor(zy)
  this.playerRight = false;
  this.playerLeft = false;
  this.playerTop = false;
  this.playerBottom = false;
  this.zombieRight = false;
  this.zombieLeft = false;
  this.zombieTop = false;
  this.zombieBottom = false;

  for (i = rx; i < rx + rw; i++) {
    if (i == x) {
      if (y < ry) {
        //there are on top off the rectangle
        this.playerTop = true;
      } else if (y > ry + rl) {
        //they are at the bottom of the rectangle
        this.playerBottom = true;
      }
    }
  }
  for (i = ry; i < ry + rl; i++) {
    if (i == y) {
      if (x < rx) {
        //there are on the left of the rectangle
        this.playerLeft = true;
      } else if (x > rx + rw) {
        //they are on the right of the rectangle
        this.playerRight = true;
      }
    }
  }

  //zombie pos
  for (i = rx; i < rx + rw; i++) {
    if (i == zx) {
      if (zy < ry) {
        //there are on top off the rectangle
        this.zombieTop = true;
      } else if (zy > ry + rl) {
        //they are at the bottom of the rectangle
        this.zombieBottom = true;
      }
    }
  }
  for (i = ry; i < ry + rl; i++) {
    if (i == zy) {
      if (zx < rx) {
        //there are on the left of the rectangle
        this.zombieLeft = true;
      } else if (zx > rx + rw) {
        //they are on the right of the rectangle
        this.zombieRight = true;
      }
    }
  }
  if (this.playerLeft && this.zombieRight || this.zombieLeft && this.playerRight || this.playerTop && this.zombieBottom || this.zombieTop && this.playerBottom) {
    return true;
  }
}

function vision(x, y, zx, zy) {
  numberOfHits = 0;
  if (looky(_(width - 180 - 150, 'w'), _(height - 240, 'h'), 50, 50, x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(width - 200 - 150, 'w'), _(height - 250, 'h'), 50, 50, x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(width - 180 - 150, 'w'), _(height - 250, 'h'), 50, 50, x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(width - 190 - 150, 'w'), _(height - 260, 'h'), 50, 50, x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(180 - 150, 'w'), _(height - 190, 'h'), 50, 50, x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(200 - 150, 'w'), _(height - 200, 'h'), 50, 50, x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(180 - 150, 'w'), _(height - 200, 'h'), 50, 50, x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(190 - 150, 'w'), _(height - 210, 'h'), 50, 50, x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(width - 200 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'), x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(width - 375 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'), x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (looky(_(width - 550 - 150, 'w'), _(30, 'h'), _(150, 'w'), _(250, 'h'), x, y, zx, zy)) {
    this.numberOfHits++
  }
  if (this.numberOfHits !== 0) {
    return false
  } else {
    return true
  }
}