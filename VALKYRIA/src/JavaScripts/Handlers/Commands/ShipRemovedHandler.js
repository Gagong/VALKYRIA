class ShipRemovedHandler {
  static get ID() {
    return 52;
  }

  constructor() {
    this._handler = function (e, a) {
      let parsed = JSON.parse(e.detail);
      let id = parsed.userId;

      if (a.targetShip && id === a.targetShip.id)
        a.resetTarget();

      let ship = a.ships[id];

      if (ship)
        delete a.ships[id];
    }
  }

  get handler() {
    return this._handler;
  }
}