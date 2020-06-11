class PetGearUpdatedEventHandler{
  constructor() {
    this._handler = function (e) {
      let gearStatus = e.detail.split("|").map(status => parseInt(status));
      let gear = {
        cooldownId: gearStatus[0],
        status: gearStatus[1],
      };

      window.hero.pet.handleUpdate({gear});
    }
  }

  get handler() {
    return this._handler;
  }
}