const {app, BrowserWindow} = require('electron');
const path = require('path');

const ENTRY_POINT = path.normalize('./src/view/index.html');
const WINDOW_SIZE = [1000, 800]; // [width, height]
const WINDOW_TITLE = 'An Electron app';


function createWindow () {
  const mainWindow = new BrowserWindow({
    width: WINDOW_SIZE[0],
    height: WINDOW_SIZE[1],
    // The property is only set to true later, when the window is fully loaded 
    show: false,
    title: WINDOW_TITLE,
    webPreferences: {nodeIntegration: true,}
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.loadFile(ENTRY_POINT);
}

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit(); })