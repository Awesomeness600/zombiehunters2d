//////////////////* VARIABLES */////////////////////

//image variables
let shotgunImg;
let exitImg;
let gameLogo;
let gearIcon;
let notesIcon;
let guideIcon;
let medkitIcon;
let coinImg;
let teleportIcon;
let musketIcon;
let bombTexture;
let grenadeIcon;
let minigunImg;
let dirt;

//audio variables
let pistolShot;
let reloadPistol;
let drawKnife;
let swingKnife;
let drawRevolver;
let musketShot;

//consts
const minigunTimer = 15
const r = 30;

//declaring arrays
let zombies = [];
let crates = [];
let particles = [];

//declaring variables
let drawGrenade;
let grenadeHurt;
let grenadeX;
let grenadeY;
let shotDist;
let person;
let pauseSettings;

//changeable variables
let weapon = "revolver"
let gamePhase = "start"
let zombieHitSound = "on"
let revolverDrawSound = "on"
let knifeDrawSound = "on"
let shotgunEquipSound = "on"
let revolverShotSound = "on"
let musketShotSound = "on"
let knifeSliceSound = "on"
let shotgunShotSound = "on"
let keybindToggle = "off"
let audioToggle = "off"
let guideToggle = "off"
let settingsToggle = "off"
let notesToggle = "off"
let coins = 0;
let zombieRound = 1;
let numOfZombies = 1;
let shotgunShells = 5;
let revolverBarrel = 6;
let shotgunDamage;
let posX = 350;
let posY = 350;
let health = 100;
let cooldownReady = true;
let medkits = 0;
let teleports = 0;
let grenades = 0;
let musketAmmo = 0;
let musketBought = false