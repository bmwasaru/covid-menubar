const { menubar } = require('menubar');
const path = require('path');

const iconPath = path.join(__dirname, 'covid.jpg');

const mb = menubar({
    icon: iconPath,
});

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
});