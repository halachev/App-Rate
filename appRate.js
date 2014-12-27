// constructor
function AppRate() {

}

AppRate.prototype.openAppRate = function(title, descr, cancelButton, laterButton, confirmButton, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "AppRate", "openAppRate", [title, descr, cancelButton, laterButton, confirmButton]);
}

AppRate.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.AppRate = new AppRate();
  return window.plugins.apprate;
};

cordova.addConstructor(AppRate.install);