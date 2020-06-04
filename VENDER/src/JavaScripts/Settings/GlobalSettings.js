class GlobalSettings {
  constructor() {
    let self = this;
    chrome.storage.local.get({
      headerColor: "#191919",
      headerOpacity: "0.9",
      windowColor: "#191919",
      windowOpacity: "0.8",
      timerTick: 50,
      windowsToTabs: false,
    }, items => {
      self._settings = items;
    });
  }

  get headerColor() {
    return this._settings.headerColor;
  }

  get headerOpacity() {
    return this._settings.headerOpacity;
  }

  get windowColor() {
    return this._settings.windowColor;
  }

  get windowOpacity() {
    return this._settings.windowOpacity;
  }

  get timerTick() {
    return this._settings.timerTick;
  }

  get windowsToTabs() {
    return this._settings.windowsToTabs;
  }
}