import { Manifest } from './types/manifest';

export const manifest: Manifest = {
  manifest_version: 3,
  name: 'Chrome Extension Boilerplate',
  description: 'A chrome extension boilerplate built with React, TypeScript, and Tailwindcss.',
  options_page: 'pages/options/index.html',
  version: '0.0.1',
  background: {
    service_worker: 'scripts/background/index.js',
  },
  action: {
    default_popup: 'pages/popup/index.html',
    default_icon: 'images/icon-32.png',
  },
  chrome_url_overrides: {
    newtab: 'pages/newtab/index.html',
  },
  icons: {
    16: 'images/icon-16.png',
    32: 'images/icon-32.png',
    48: 'images/icon-48.png',
    128: 'images/icon-128.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['scripts/content/index.js'],
    },
  ],
  devtools_page: 'pages/devtools/index.html',
  web_accessible_resources: [
    {
      resources: ['styles/content.css', 'images/icon-128.png', 'images/icon-32.png'],
      matches: [],
    },
  ],
};
