class HeroDiedHandler {
  static get ID() {
    return 17172;
  }

  constructor() {
    this._handler = function (e, a) {
       a.markHeroAsDead();
    }
  }

    get handler() {
        return this._handler;
    }
}