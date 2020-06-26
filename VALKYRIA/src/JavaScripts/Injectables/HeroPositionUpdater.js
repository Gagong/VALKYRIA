window.setInterval(function () {
    if (!window.heroDied) {
        let response = document.getElementById("preloader").getHero();
        document.dispatchEvent(new CustomEvent("updateHeroPos", {
            detail: response
        }));
    }
}, window.tickTime);