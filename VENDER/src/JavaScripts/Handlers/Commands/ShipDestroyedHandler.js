class ShipDestroyedHandler {
  static get ID() {
    return 6187;
  }

  constructor() {
    this._handler = function (e, a) {
      let parsed = JSON.parse(e.detail);
      let id = parsed[Variables.shipDestoyedId];

      if (a.targetShip && id === a.targetShip.id) {
        window.attackWindow.hp("");
        window.attackWindow.shd("");
        window.attackWindow.targetName("");
        a.resetTarget();
      }

      if (id === window.hero.id) 
        a.markHeroAsDead();

      if (window.pet.id != null && id === window.pet.id)
        window.hero.pet.handleUpdate({deadStatus: true});

      let ship = a.ships[id];
      if (ship)
        delete a.ships[id];
    }
  }

  get handler() {
    return this._handler;
  }
}
