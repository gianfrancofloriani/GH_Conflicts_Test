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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var form = document.querySelector('.maschera'); //listener submit form di ingresso

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
}); //funzione che preleva squadre da file sorgente, crea tabella e relativi sfondi-gradiente

var getTeams =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var riempiTabella, i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            riempiTabella = document.getElementsByTagName('td');
            i = 0;
            footballDB.collection('classifica').orderBy('Points', 'desc').get().then(function (snapshot) {
              snapshot.docs.forEach(function (doc) {
                riempiTabella[i].innerText = doc.data().Name;
                riempiTabella[i + 1].innerText = doc.data().Points;
                riempiTabella[i].parentElement.style.backgroundImage = 'linear-gradient(to right,' + doc.data().Color1 + ',' + doc.data().Color2 + ')';
                riempiTabella[i].parentElement.style.color = 'black';
                riempiTabella[i].parentElement.style.fontWeight = 'bold';
                i += 3;
              });
            }).catch(function (err) {
              console.log(err);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTeams() {
    return _ref.apply(this, arguments);
  };
}(); //funzione che preleva giocatori da file sorgente e compila lista


var getPlayers =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var giocatori, por, dif, cen, att;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            giocatori = document.getElementsByTagName('li');
            por = 0;
            dif = 3;
            cen = 11;
            att = 19;
            footballDB.collection('rosa').get().then(function (snapshot) {
              snapshot.docs.forEach(function (doc) {
                switch (doc.data().Role) {
                  case 'gk':
                    giocatori[por].innerHTML = "<input type=\"checkbox\"> ".concat(doc.data().Name);
                    por++;
                    break;

                  case 'df':
                    giocatori[dif].innerHTML = "<input type=\"checkbox\"> ".concat(doc.data().Name);
                    dif++;
                    break;

                  case 'mf':
                    giocatori[cen].innerHTML = "<input type=\"checkbox\"> ".concat(doc.data().Name);
                    cen++;
                    break;

                  case 'st':
                    giocatori[att].innerHTML = "<input type=\"checkbox\"> ".concat(doc.data().Name);
                    att++;
                    break;

                  default:
                    console.log('ERROR:Role mismatch');
                    break;
                }
              });
            }).catch(function (err) {
              console.log(err);
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPlayers() {
    return _ref2.apply(this, arguments);
  };
}(); //funzione principale caricata dal body


function classifica() {
  getTeams();
  getPlayers();
} //funzione mostra/nascondi classifica legata al pulsante freccia


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
    for (var _i = start; _i < righeTabella.length; _i++) {
      righeTabella[_i].classList.remove('tr-hidden');
    }

    cambio.setAttribute('src', 'up_button.png');
    cambio.setAttribute('alt', 'hide table');
    cambio.setAttribute('onclick', 'hideshow(false)');
  }
}

function showRoles(role) {
  var gk = document.querySelector('.gk');
  var df = document.querySelector('.df');
  var mf = document.querySelector('.mf');
  var st = document.querySelector('.st');

  switch (role) {
    case 'gk':
      if (gk.classList.contains('d-none')) {
        gk.classList.remove('d-none');
      }

      df.classList.add('d-none');
      mf.classList.add('d-none');
      st.classList.add('d-none');
      break;

    case 'df':
      if (df.classList.contains('d-none')) {
        df.classList.remove('d-none');
      }

      gk.classList.add('d-none');
      mf.classList.add('d-none');
      st.classList.add('d-none');
      break;

    case 'mf':
      if (mf.classList.contains('d-none')) {
        mf.classList.remove('d-none');
      }

      gk.classList.add('d-none');
      df.classList.add('d-none');
      st.classList.add('d-none');
      break;

    case 'st':
      if (st.classList.contains('d-none')) {
        st.classList.remove('d-none');
      }

      gk.classList.add('d-none');
      df.classList.add('d-none');
      mf.classList.add('d-none');
      break;

    default:
      console.log('errore, role mismatch');
  }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54496" + '/');

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