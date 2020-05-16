class HeroPositionUpdateEventHandler {
  constructor() {
    this._handler = function (e) {
      let positions = e.detail.split("|");
      window.hero.setPosition(positions[0], positions[1]);
      window.shipconfig = parseInt(positions[2]);
    }
  }

  get handler() {
    return this._handler;
  }
}