class Variables {
  //START ATTACK SECTION

  /*
  28|{
    "damage":843,
    "_-gK":0,
    "_-oG":false,
    "_-F5B":171660368, = attackerId
    "_-ip":150200289, = attackedId
    "_-wi":{"_-x3e":0},
    "_-J1Y":332, = attackHp
    "_-l4Q":174 = attackShd
  }
  */

  static get attackerId() { //
    return "_-c3k";
  }

  static get attackedId() { //
    return "_-U3P";
  }

  static get attackHp() { //
    return "_-D57"; 
  }

  static get attackShd() { //
    return "_-Vb"; 
  }

  //END ATTACH SECTION

  //START MOVE DURATION SECTION

  /*
  90|{
    "x":18549,
    "userId":150200265,
    "y":8742,
    "_-np":1604 = moveDuration
  }
  */

  static get moveDuration() { //
    return "_-Wt"; 
  }

  //END MOVE DURATION SECTION

  //START SHIP DESTROYED SECTION

  /*
  30|{
    "_-41f":150200289, = shipDestroyedId
    "_-y13":0
  }
  */

  static get shipDestoyedId() { //
    return "_-41f"; 
  }

  //END SHIP DESTROYED SECTION

  //START INIT SECTION

  /*
  49|{
    "shield":0,
    "factionId":3,
    "speed":294,
    "uridium":26,
    "_-e42":true,
    "premium":false,
    "clanTag":"",
    "typeId":"ship_liberator",
    "_-A5b":0,
    "level":2,
    "_-R1E":0,
    "_-62y":0, = maxShd
    "_-X3l":49,
    "jackpot":0,
    "_-W2H":400,
    "_-855":116000, = initHp
    "x":18396,
    "y":11241,
    "userName":"TLOCK2",
    "_-2n":1,
    "_-8z":16000,
    "_-64o":true,
    "cloaked":false,
    "userId":171660368,
    "_-s1m":11250,
    "_-3n":116000, = maxHp
    "mapId":11,
    "_-R3f":0,
    "modifier":[],
    "_-71f":1,
    "_-E2s":400,
    "credits":2800
  }
  */

  static get heroInitMaxHp() { //
    return "_-d3G";
  }

  static get heroInitMaxShd() { //
    return "_-Y45";
  }

  static get heroInitHp() { //
    return "_-A4c";
  }

  //END INIT SECTION

  //START UPDATE HP SECTION

  /*
  1300|{
    "_-R1E":0,
    "hitpoints":90286,
    "_-b3X":116000, = updateMaxHp
    "_-r1M":16000
  }
  */

  static get hpUpdateMaxHp() { //
    return "_-43H";
  }

  //END UPDATE HP SECTION

  //START SHIPSELECT SECTION

  /*
  50|{
    "shield":21750,
    "_-a2v":3,
    "userId":171552975,
    "_-8z":64000, = maxShd
    "hitpoints":174635,
    "_-d2k":false,
    "_-62y":21751,
    "_-R1E":0,
    "_-b3X":270000 = maxHp
  }
  */

  static get selectMaxHp() { //
    return "_-43H"; 
  }

  static get selectMaxShd() { //
    return "_-Y45";
  }

  //END SHIPSELECT SECTION

  //START SHIP CREATE SECTION

  /*
  83|{
    "_-R3f":0,
    "typeId":"112",
    "_-A5b":0,
    "_-2n":0,
    "_-o2S":0,
    "_-m3a":0,
    "_-J4M":{"_-Eq":0},
    "_-Gg":false,
    "cloaked":false,
    "_-l1A":{"type":0}, = clanDiplomacy
    "npc":true,
    "userId":150201129,
    "y":18329,
    "userName":"-=[ Barracuda ]=-",
    "x":25093,
    "_-71f":3,
    "_-64o":false,
    "modifier":[],
    "clanTag":"",
    "_-N4t":"",
    "factionId":0
  }
  */

  static get clanDiplomacy() { //
    return "_-1o";
  }

  //END SHIP CREATE SECTION

  //START CBS SECTION

  /*
  26629|{
    "userName":"Kepler",
    "clanTag":"",
    "factionId":3,
    "_-Vz":true,
    "assetId":150000643,
    "_-g2x":65538,
    "_-V4o":{"type":0}, = clanDiplomacy
    "_-I1W":false,
    "_-71f":1048592,
    "_-R3f":38631,
    "_-H4N":false,
    "_-D1h":10624, = X
    "type":{"_-Cw":36},
    "_-f2y":false,
    "modifier":[{"count":1,"userId":150000643,"_-Z3l":"","attribute":41158,"modifier":33,"activated":true}],
    "_-jA":2443 = Y
  }
  */

  static get assetCreateY() { //
    return "_-u3I";
  }

  static get assetCreateX() { //
    return "_-aP";
  }

  static get battlestationClanDiplomacy() { //
    return "_-j3o";
  }

  //END CBS SECTION

  //START GATES SECTION

  /*
  3389|{
    "x":2000,
    "y":2000,
    "_-E3p":true,
    "_-H4N":true,
    "factionId":0,
    "_-g2x":1, = gateType
    "_-op":[],
    "_-12v":150000184 = gateId
  }
  */

  static get gateId() { //
    return "_-X4y";
  }

  static get gateType() { //
    return "_-I5K";
  }

  //END GATES SECTION

  //START PET SECTION

  /*
  155|{
    "x":23559,
    "_-a2v":22,
    "_-R3f":0,
    "y":19331,
    "clanTag":"",
    "_-E23":"P/E/T",
    "_-d2i":secured, = petId
    "_-71f":3,
    "_-m4P":secured, = petMasterId
    "_-Y4J":633,
    "factionId":1,
    "_-J4M":{"_-Eq":0},
    "_-J1Q":20
  }
  */

  static get petId() { //
    return "_-uU";
  }

  static get petMasterId() { //
    return "_-A3w";
  }

  //END PET SECTION
}
