import { app, BrowserWindow, shell } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';
import { spawn } from 'child_process';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let mainWindow = null;
let viteProcess = null;

function waitForPort(port) {
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + 30000;
    function attempt() {
      const req = http.get(`http://localhost:${port}`, (res) => {
        resolve(); res.resume();
      });
      req.on('error', () => {
        if (Date.now() > deadline) return reject(new Error('Timeout'));
        setTimeout(attempt, 500);
      });
      req.setTimeout(1000, () => { req.destroy(); setTimeout(attempt, 500); });
    }
    attempt();
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'FinTech Investment Platform',
    icon: path.join(__dirname, 'public', 'favicon.svg'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    show: false,
    backgroundColor: '#0f172a',
  });

  mainWindow.loadURL('http://localhost:5173');

  mainWindow.once('ready-to-show', () => mainWindow.show());

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith('http://localhost')) shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => { mainWindow = null; });
}

app.whenReady().then(async () => {
  viteProcess = spawn('npm', ['run', 'dev'], {
    shell: true,
    stdio: 'inherit',
    cwd: __dirname,
  });

  viteProcess.on('error', (err) => {
    console.error('Failed to start Vite:', err);
    app.quit();
  });

  try {
    await waitForPort(5173);
    createWindow();
  } catch (err) {
    console.error(err.message);
    app.quit();
  }
});

app.on('window-all-closed', () => {
  if (viteProcess) { viteProcess.kill(); viteProcess = null; }
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  if (viteProcess) viteProcess.kill();
});