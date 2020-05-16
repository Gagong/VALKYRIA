class Api {
    constructor() {
        this.gates = [];
        this.ships = {};
        this.battlestation = null;
        this.lastMovement = 0;
    }

    resetTarget() {
        this.targetShip = null;
        this.attacking = false;
        this.triedToLock = false;
        this.lockedShip = null;
    }

    markHeroAsDead() {
        this.heroDied = true;
        Injector.injectScript("window.heroDied = true;");
    }

    lockShip(ship) {
        if (!(ship instanceof Ship))
            return;

        if (this.ships[ship.id] == null)
            return;

        ship.update();
        let pos = ship.position;
        let scr = 'document.getElementById("preloader").lockShip(' + ship.id + ',' + Math.round(pos.x) + ',' + Math.round(pos.y) + ',' + Math.round(window.hero.position.x) + ',' + Math.round(window.hero.position.y) + ');';
        Injector.injectScript(scr);

        this.lockTime = $.now();
    }

    lockNpc(ship) {
        if (!(ship instanceof Ship))
            return;

        if (this.ships[ship.id] == null)
            return;

        this.lockTime = $.now();

        this.lockShip(ship);
    }

    startLaserAttack() {
        Injector.injectScript('document.getElementById("preloader").laserAttack()');
    }

}