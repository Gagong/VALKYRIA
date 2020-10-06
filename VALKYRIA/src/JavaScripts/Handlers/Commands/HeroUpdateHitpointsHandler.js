class HeroUpdateHitpointsHandler {
  static get ID() {
    return 1300;
  }

  constructor() {
    this._handler = (e, a) => {
      let parsedJson = JSON.parse(e.detail);

      window.hero.maxHp = parsedJson[Variables.hpUpdateMaxHp];
      window.hero.hp = parsedJson.hitpoins;
    }
  }

  get handler() {
    return this._handler;
  }
}
