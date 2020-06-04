class GlobalSettings {
  constructor() {
   this._headerColor = "#191919";
   this._headerOpacity = "0.9"
   this._windowColor = "#191919";
   this._windowOpacity = "0.8";
   this._timerTick = 500;
   this._windowsToTabs = false;
  }

  get headerColor() {
    return this._headerColor;
  }

  get headerOpacity() {
    return this._headerOpacity;
  }

  get windowColor() {
    return this._windowColor;
  }

  get windowOpacity() {
    return this._windowOpacity;
  }

  get timerTick() {
    return this._timerTick;
  }

  get windowsToTabs() {
    return this._windowsToTabs;
  }
}