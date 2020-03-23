class Radio {
  private station: number;

  turnOn() {
    console.log("Radio: turning on.");
  }

  turnOff() {
    console.log("Radio: turning off.");
  }

  setStation(station: number) {
    console.log(`Radio: setting station to ${station}`);
    this.station = station;
  }
}

class CDPlayer {
  private cd: string;

  turnOn() {
    console.log("CDPlayer: turning on.");
  }

  turnOff() {
    console.log("CDPlayer: turning off.");
  }

  setCD(cd: string) {
    console.log(`CDPlayer: setting CD to ${cd}`);
    this.cd = cd;
  }

  play() {
    console.log(`CDPlayer: playing ${this.cd}`);
  }
}

class Display {
  private backgroundColor: string;

  turnOn() {
    console.log("Display: turning on.");
  }

  turnOff() {
    console.log("Display: turning off.");
  }

  setBackgroundColor(color: string) {
    console.log(`Display: setting background color to ${color}`);
    this.backgroundColor = color;
  }
}

class Equalizer {
  private bass: number = 0;
  private treble: number = 0;

  setBass(bass: number) {
    console.log(`Equalizer: bass set to ${bass}`);
    this.treble = bass;
  }

  setTreble(treble: number) {
    console.log(`Equalizer: treble set to ${treble}`);
    this.treble = treble;
  }
}

class HeadUnitFacade {
  private radio: Radio;
  private cdPlayer: CDPlayer;
  private display: Display;
  private equalizer: Equalizer;

  constructor(
    radio: Radio,
    cdPlayer: CDPlayer,
    display: Display,
    equalizer: Equalizer
  ) {
    this.radio = radio;
    this.cdPlayer = cdPlayer;
    this.display = display;
    this.equalizer = equalizer;
  }

  playRock() {
    console.log(`\nLet's Rock!`);
    this.display.turnOn();
    this.display.setBackgroundColor("blue");

    this.radio.turnOff();

    this.equalizer.setBass(6);
    this.equalizer.setTreble(1);

    this.cdPlayer.turnOn();
    this.cdPlayer.setCD("Breaking Benjamin");
    this.cdPlayer.play();
  }

  turnOff() {
    console.log(`\nTurning off head unit...`);
    this.cdPlayer.turnOff();
    this.radio.turnOff();
    this.display.turnOff();
  }
}

const myRadio = new Radio();
const myCDPlayer = new CDPlayer();
const myDisplay = new Display();
const myEqualizer = new Equalizer();

const myHeadUnit = new HeadUnitFacade(
  myRadio,
  myCDPlayer,
  myDisplay,
  myEqualizer
);

myHeadUnit.playRock();

myHeadUnit.turnOff();
