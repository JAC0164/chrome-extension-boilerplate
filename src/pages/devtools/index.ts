chrome.devtools.panels.create(
  'extension-boilerplate - Devtools',
  'icon-32.png',
  'panel.html',
  function (panel) {
    panel.onShown.addListener(onPanelShown);
    panel.onHidden.addListener(onPanelHidden);
  }
);

function onPanelShown() {
  chrome.runtime.sendMessage('unity-panel-shown');
}

function onPanelHidden() {
  chrome.runtime.sendMessage('unity-panel-hidden');
}
