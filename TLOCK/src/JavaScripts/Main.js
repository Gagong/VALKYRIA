window.GlobalSettings = new GlobalSettings();
let api;

$(document).ready(function () {
    api = new Api();
    let preloader = $("#preloader").attr("wmode", "opaque");
    $("#preloader").remove();
    preloader.appendTo($("#container"));
    window.settings = new Settings();
    window.initialized = false;
    window.debug = false;
    window.tickTime = window.GlobalSettings.timerTick;

    let hm = new HandlersManager(api);
    hm.registerCommand(AssetCreatedHandler.ID, new AssetCreatedHandler());
    hm.registerCommand(GateInitHandler.ID, new GateInitHandler());
    hm.registerCommand(HeroDiedHandler.ID, new HeroDiedHandler());
    hm.registerCommand(HeroInitHandler.ID, new HeroInitHandler(init));
    hm.registerCommand(HeroUpdateHitpointsHandler.ID, new HeroUpdateHitpointsHandler());
    hm.registerCommand(ShipAttackHandler.ID, new ShipAttackHandler());
    hm.registerCommand(ShipCreateHandler.ID, new ShipCreateHandler());
    hm.registerCommand(ShipDestroyedHandler.ID, new ShipDestroyedHandler());
    hm.registerCommand(ShipMoveHandler.ID, new ShipMoveHandler());
    hm.registerCommand(ShipRemovedHandler.ID, new ShipRemovedHandler());
    hm.registerCommand(ShipSelectedHandler.ID, new ShipSelectedHandler());
    hm.registerEvent("updateHeroPos", new HeroPositionUpdateEventHandler());
    hm.listen();
});

function init() {
    if (window.initialized)
        return;
    console.log('Loaded')

    window.minimap = new Minimap(api);
    window.minimap.createWindow();

    window.attackWindow = new AttackWindow();
    window.attackWindow.createWindow();

    window.autolockWindow = new AutolockWindow();
    window.autolockWindow.createWindow();

    Injector.injectScriptFromResource("JavaScripts/Injectables/HeroPositionUpdater.js");

    window.setInterval(logic, window.tickTime);

    $(document).keyup(function (e) {
        let key = e.key;

        if (key === "x" || key === "z" || key === "ч" || key === "я") {
            let maxDist = 1000;
            let finDist = 1000000;
            let finalShip;
            console.log("Press key " + e.key)

            for (let property in api.ships) {
                let ship = api.ships[property];
                let dist = ship.distanceTo(window.hero.position);
                if (dist < maxDist && dist < finDist && ((window.settings.lockNpc && ship.isNpc && (key === "x" || key === "ч")) ||
                    (window.settings.lockPlayers && ship.isEnemy && (key === "z" || key === "я") && !ship.isNpc))) {
                    finalShip = ship;
                    finDist = dist;
                }
            }

            if (finalShip) {
                api.lockShip(finalShip);
                if (window.settings.autoattack) {
                    api.startLaserAttack();
                    api.lastAttack = $.now();
                    api.attacking = true;
                }
            }
        }
    });
}

function logic() {
    minimap.draw();
    window.dispatchEvent(new CustomEvent("logicEnd"));
}
