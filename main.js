'use strict'

const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )
})
