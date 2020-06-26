class GateInitHandler {
  static get ID() {
    return 12684;
  }

  constructor() {
    this._handler = function (e, a) {
      let parsedJson = JSON.parse(e.detail);
      let id = parsedJson[Variables.gateId];
      let typeId = parsedJson[Variables.gateType];
      
      a.gates.push(new Gate(parsedJson.x, parsedJson.y, parsedJson.factionId, id, typeId));
    }
  }


  get handler() {
    return this._handler;
  }
}