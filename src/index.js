import'ace-css/css/ace.css'
import'font-awesome/css/font-awesome.css'

import'./index.html'

var Elm = require('./Main.elm')
var mountNode = document.getElementById('main')

var app = Elm.Main.embed(mountNode)