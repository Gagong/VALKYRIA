class ShipSelectedHandler {
  static get ID() {
    return 7422;
  }

  constructor() {
    this._handler = function (e, a) {
      let parsedJson = JSON.parse(e.detail);
      let ship = a.ships[parsedJson.userId];

      ship.maxHp = parsedJson[Variables.selectMaxHp];
      ship.maxShd = parsedJson[Variables.selectMaxShd];
      ship.hp = parsedJson.hitpoints;
      ship.shd = parsedJson.shield;

      window.attackWindow.hp(parsedJson.hitpoints);
      window.attackWindow.shd(parsedJson.shield);
      window.attackWindow.targetName(ship.name);

      if (ship)
        a.lockedShip = ship;
    }
  }

  get handler() {
    return this._handler;
  }
}