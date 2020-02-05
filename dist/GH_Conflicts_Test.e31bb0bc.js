// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
//import { format } from 'date-fns';
var form = document.querySelector('.maschera');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var nome = form.firstname.value;
  var cognome = form.lastname.value;
  var eta = form.old.value;
  var corpo = document.getElementsByTagName('body')[0];
  var chiudiScatola = document.getElementById('popup');

  if (eta < 18) {
    chiudiScatola.setAttribute('style', 'background-color:red');
    alert('Hey ' + nome + ' ' + cognome + " you can't stay here, you re underage!");
  } else {
    chiudiScatola.classList.replace('scatola', 'scatola_chiusa');
    corpo.classList.add('showbody');
    alert('Hey ' + nome + ' ' + cognome + ' you are ok dude, have a good time on my site');
  }
});

function classifica() {
  var seriea = [{
    Name: 'Juventus',
    Points: 51,
    Color1: '#FFFFFF',
    Color2: '#050505'
  }, {
    Name: 'Inter',
    Points: 47,
    Color1: '#0175C0',
    Color2: '#010203'
  }, {
    Name: 'Lazio',
    Points: 45,
    Color1: '#84D8FC',
    Color2: '#DDDDDF'
  }, {
    Name: 'Roma',
    Points: 38,
    Color1: '#F5B922',
    Color2: '#82142A'
  }, {
    Name: 'Atalanta',
    Points: 35,
    Color1: '#0060AD',
    Color2: '#1D1D1B'
  }, {
    Name: 'Cagliari',
    Points: 30,
    Color1: '#9B1226',
    Color2: '#0B294B'
  }, {
    Name: 'Parma',
    Points: 28,
    Color1: '#FFD200',
    Color2: '#22378C'
  }, {
    Name: 'Milan',
    Points: 28,
    Color1: '#DE1311',
    Color2: '#1C1317'
  }, {
    Name: 'Torino',
    Points: 27,
    Color1: '#8A1E03',
    Color2: '#FEFFF8'
  }, {
    Name: 'Hellas Verona',
    Points: 26,
    Color1: '#0850A1',
    Color2: '#FEE42C'
  }, {
    Name: 'Napoli',
    Points: 24,
    Color1: '#2192CC',
    Color2: '#FFFFFF'
  }, {
    Name: 'Bologna',
    Points: 24,
    Color1: '#002938',
    Color2: '#B32133'
  }, {
    Name: 'Fiorentina',
    Points: 24,
    Color1: '#5D44A8',
    Color2: '#FCFFFF'
  }, {
    Name: 'Udinese',
    Points: 24,
    Color1: '#FEFFFF',
    Color2: '#2E2B20'
  }, {
    Name: 'Sassuolo',
    Points: 22,
    Color1: '#0AA152',
    Color2: '#1D1E17'
  }, {
    Name: 'Sampdoria',
    Points: 19,
    Color1: '#0E1D99',
    Color2: '#FFFDFF'
  }, {
    Name: 'Lecce',
    Points: 16,
    Color1: '	#FDF201',
    Color2: '#E91D23'
  }, {
    Name: 'Spal',
    Points: 15,
    Color1: '#01A0F3',
    Color2: '#FCFDF2'
  }, {
    Name: 'Brescia',
    Points: 15,
    Color1: '#025BA6',
    Color2: '#FCFCFC'
  }, {
    Name: 'Genoa',
    Points: 14,
    Color1: '#AE1A11',
    Color2: '#05232C'
  }];
  seriea.sort(function (a, b) {
    if (a.Points < b.Points) {
      return 1;
    } else if (a.Name > b.Name) {
      return 1;
    } else {
      return -1;
    }
  });
  var tabella = document.getElementById('standing');
  var partenza = 1;

  for (var i = seriea.length - 1; i >= 0; i--) {
    var riga = tabella.insertRow(partenza);
    var nomeSquadra = riga.insertCell(0);
    var numeroPunti = riga.insertCell(1);
    var numeroPosizione = riga.insertCell(2);
    nomeSquadra.innerText = seriea[i].Name;
    numeroPunti.innerText = seriea[i].Points;
    numeroPosizione.innerText = partenza + i;
  }

  var creaGradiente = document.getElementsByTagName('tr');
  creaGradiente[0].style.backgroundColor = '#13273c';
  creaGradiente[0].style.color = 'white';

  for (var _i = 1; _i <= 20; _i++) {
    creaGradiente[_i].style.backgroundImage = 'linear-gradient(to right,' + seriea[_i - 1].Color1 + ',' + seriea[_i - 1].Color2 + ')';
    creaGradiente[_i].style.color = 'black';
    creaGradiente[_i].style.fontWeight = 'bold';
  }

  fillTeam();
}

function hideshow(show) {
  var righeTabella = document.getElementsByTagName('tr');
  var cambio = document.querySelector('.arrow');
  var start = 6;

  if (!show) {
    for (var i = start; i < righeTabella.length; i++) {
      righeTabella[i].classList.add('tr-hidden');
    }

    cambio.setAttribute('src', 'down_button.png');
    cambio.setAttribute('alt', 'show table');
    cambio.setAttribute('onclick', 'hideshow(true)');
  } else {
    for (var _i2 = start; _i2 < righeTabella.length; _i2++) {
      righeTabella[_i2].classList.remove('tr-hidden');
    }

    cambio.setAttribute('src', 'up_button.png');
    cambio.setAttribute('alt', 'hide table');
    cambio.setAttribute('onclick', 'hideshow(false)');
  }
}

function fillTeam() {
  var rosa = [{
    Name: 'Szczesny',
    Role: 'gk'
  }, {
    Name: 'Gollini',
    Role: 'gk'
  }, {
    Name: 'Sportiello',
    Role: 'gk'
  }, {
    Name: 'Bonucci',
    Role: 'df'
  }, {
    Name: 'Toloi',
    Role: 'df'
  }, {
    Name: 'Hateboer',
    Role: 'df'
  }, {
    Name: 'Djimsiti',
    Role: 'df'
  }, {
    Name: 'Smalling',
    Role: 'df'
  }, {
    Name: 'Danilo',
    Role: 'df'
  }, {
    Name: 'Kjaer',
    Role: 'df'
  }, {
    Name: 'Caceres',
    Role: 'df'
  }, {
    Name: 'Gomez',
    Role: 'mf'
  }, {
    Name: 'Callejon',
    Role: 'mf'
  }, {
    Name: 'Candreva',
    Role: 'mf'
  }, {
    Name: 'Pellegrini',
    Role: 'mf'
  }, {
    Name: 'Locatelli',
    Role: 'mf'
  }, {
    Name: 'Bentancour',
    Role: 'mf'
  }, {
    Name: 'Kluivert',
    Role: 'mf'
  }, {
    Name: 'Malinovskyi',
    Role: 'mf'
  }, {
    Name: 'Zapata',
    Role: 'st'
  }, {
    Name: 'Milik',
    Role: 'st'
  }, {
    Name: 'Cornelius',
    Role: 'st'
  }, {
    Name: 'Caprari',
    Role: 'st'
  }, {
    Name: 'Lapadula',
    Role: 'st'
  }, {
    Name: 'Okaka',
    Role: 'st'
  }];
  var giocatori = document.getElementsByTagName('li');
  var por = 0;
  var dif = 3;
  var cen = 11;
  var att = 19;

  for (var i = 0; i < rosa.length; i++) {
    switch (rosa[i].Role) {
      case 'gk':
        giocatori[por].innerText = rosa[i].Name;
        por++;
        break;

      case 'df':
        giocatori[dif].innerText = rosa[i].Name;
        dif++;
        break;

      case 'mf':
        giocatori[cen].innerText = rosa[i].Name;
        cen++;
        break;

      case 'st':
        giocatori[att].innerText = rosa[i].Name;
        att++;
        break;

      default:
        console.log('ERROR:Role mismatch');
        break;
    }
  }

  var prova = new Date(); //  let prova2= format(prova,'YYYY');

  console.log(prova); //  console.log(prova2);
  //console.log(dateFns.format(prova,'YYYY'));
}
},{}],"../../Users/Raul Cangemi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65128" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../Users/Raul Cangemi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/GH_Conflicts_Test.e31bb0bc.js.map