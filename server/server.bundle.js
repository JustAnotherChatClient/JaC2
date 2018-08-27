/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true
  },
  isActive: Boolean,
  createDate: Date,
  lastLogin: Date,
  status: String,
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  friends: [{
    _id: { type: String, ref: 'User' },
    isBlocked: Boolean
  }]

});

UserSchema.statics.addUser = function (user) {
  return new Promise(function (resolve, reject) {
    user.save(function (err, user) {
      if (err) reject(err);else resolve(user);
    });
  });
};

UserSchema.statics.updateUser = function (id, user) {
  return new Promise(function (resolve, reject) {
    User.findByIdAndUpdate(id, user, { new: true }, function (err, user) {
      if (err) reject(err);else resolve(user);
    });
  });
};

UserSchema.statics.getAllUsers = function () {
  return new Promise(function (resolve, reject) {
    User.find(function (err, users) {
      if (err) reject(err);else resolve(users);
    });
  });
};

UserSchema.statics.getUser = function (id) {
  return new Promise(function (resolve, reject) {
    User.findById(id, function (err, user) {
      if (err) reject(err);else resolve(user);
    });
  });
};

UserSchema.statics.getFriendsByUserId = function (id) {
  return new Promise(function (resolve, reject) {
    User.findById(id, function (err, user) {
      if (err) reject(err);else resolve(user.friends);
    });
  });
};

UserSchema.statics.getByEmail = function (email) {
  return new Promise(function (resolve, reject) {
    User.findOne({ email: email }, function (err, user) {
      if (err) reject(err);else resolve(user);
    });
  });
};

UserSchema.statics.getByUsername = function (username) {
  return new Promise(function (resolve, reject) {
    User.findOne({ username: username }, function (err, user) {
      if (err) reject(err);else resolve(user);
    });
  });
};

var User = mongoose.model('User', UserSchema);
exports.default = User;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _http = __webpack_require__(8);

var _http2 = _interopRequireDefault(_http);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(9);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = __webpack_require__(10);

var _compression2 = _interopRequireDefault(_compression);

var _cors = __webpack_require__(11);

var _cors2 = _interopRequireDefault(_cors);

var _bunyan = __webpack_require__(12);

var _bunyan2 = _interopRequireDefault(_bunyan);

var _expressBunyanLogger = __webpack_require__(13);

var _expressBunyanLogger2 = _interopRequireDefault(_expressBunyanLogger);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _router = __webpack_require__(14);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _express2.default();

server.locals.config = _config2.default;

var serverLog = _bunyan2.default.createLogger({
  name: _config2.default.serverName,
  serializers: {
    err: _bunyan2.default.stdSerializers.err
  },
  streams: [{
    type: 'rotating-file',
    path: _path2.default.resolve(__dirname, 'logs/server.log'),
    period: '1d',
    count: 7
  }]
});

server.locals.serverLog = serverLog;
exports.default = { serverLog: serverLog };

server.use((0, _expressBunyanLogger2.default)({
  name: _config2.default.serverName,
  streams: [{
    type: 'rotating-file',
    path: _path2.default.resolve(__dirname, 'logs/access.log'),
    period: '1d',
    count: 7
  }]
}));

var db = _mongoose2.default.connection;
db.openUri(_config2.default.mongodb.uri, _config2.default.mongodb.options);
db.on('error', function (err) {
  serverLog.error({ msg: err.message }, 'MongoDB connection error');
  throw new Error('unable to connect to database at ' + _config2.default.mongodb.uri + '. Error: ' + err.message);
});

server.use((0, _cors2.default)());
server.use(_bodyParser2.default.json());
server.use(_bodyParser2.default.urlencoded({ extended: true }));
server.use((0, _compression2.default)());

server.use((0, _router2.default)(_router2.default));

_http2.default.createServer(server).listen(_config2.default.PORT, function (error) {
  if (!error) {
    serverLog.info('Started JaC2 API Server in ' + process.env.NODE_ENV + ' environment on port ' + _config2.default.PORT);
    console.log('Running JaC2 API Server in ' + process.env.NODE_ENV + ' environment on port ' + _config2.default.PORT);
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bunyan");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-bunyan-logger");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _channel = __webpack_require__(15);

var _channel2 = _interopRequireDefault(_channel);

var _message = __webpack_require__(18);

var _message2 = _interopRequireDefault(_message);

var _user = __webpack_require__(21);

var _user2 = _interopRequireDefault(_user);

var _auth = __webpack_require__(23);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes() {
  var router = new _express.Router();

  router.get('/', function (req, res) {
    res.status(200).json({ connected: 'OK!' });
  });

  router.use('/api', (0, _channel2.default)());
  router.use('/api', (0, _message2.default)());
  router.use('/api', (0, _user2.default)());
  router.use('/api', (0, _auth2.default)());

  return router;
};

exports.default = routes;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _channel = __webpack_require__(16);

var _channel2 = _interopRequireDefault(_channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes() {
  var router = new _express.Router();

  router.post('/channel', _channel2.default.newChannel);
  router.get('/channel', _channel2.default.returnAllChannels);
  router.get('/channel/:id', _channel2.default.returnSpecificChannel);
  router.put('/channel/:id', _channel2.default.updateSpecificChannel);
  return router;
};

exports.default = routes;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _channel = __webpack_require__(17);

var _channel2 = _interopRequireDefault(_channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newChannel = function newChannel(req, res) {
  if (req.body) {
    var channel = new _channel2.default(req.body);
    _channel2.default.addChannel(channel).then(function (newChannel) {
      res.status(200).json({ status: 200, data: newChannel, message: 'Ok' });
    }).catch(function (err) {
      res.status(500).json({ status: 500, message: err.message });
    });
  } else throw new Error('unsuccessful. please check for valid input');
};

var returnAllChannels = function returnAllChannels(req, res) {
  _channel2.default.getAllChannels().then(function (activeChannel) {
    res.status(200).json({ status: 200, data: activeChannel, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var returnSpecificChannel = function returnSpecificChannel(req, res) {
  if (req.body) {
    var id = req.params.id;

    _channel2.default.getChannelById(id).then(function (newChannel) {
      res.status(200).json({ status: 200, data: newChannel, message: 'Ok' });
    }).catch(function (err) {
      res.status(500).json({ status: 500, message: err.message });
    });
  } else throw new Error('unsuccessful. please check for valid input');
};

var updateSpecificChannel = function updateSpecificChannel(req, res) {
  if (req.body) {
    var channel = {};
    Object.keys(req.body).forEach(function (key) {
      channel[key] = req.body[key];
    });
    var id = req.params.id;

    _channel2.default.updateChannel(id, channel).then(function (newChannel) {
      res.status(200).json({ status: 200, data: newChannel, message: 'Ok' });
    }).catch(function (err) {
      res.status(500).json({ status: 500, message: err.message });
    });
  } else throw new Error('unsuccessful. please check for valid input');
};

exports.default = {
  newChannel: newChannel, returnAllChannels: returnAllChannels, returnSpecificChannel: returnSpecificChannel, updateSpecificChannel: updateSpecificChannel
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var ChannelSchema = new Schema({
  owner: { type: String, ref: 'User' },
  isActive: Boolean,
  createDate: { type: Date, default: Date.now },
  name: String,
  members: [{
    _id: { type: String, ref: 'User' }
  }],
  messages: [{
    _id: { type: String, ref: 'Message' }
  }]

});

ChannelSchema.statics.addChannel = function (channel) {
  return new Promise(function (resolve, reject) {
    channel.save(function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

ChannelSchema.statics.updateChannel = function (_id, channel) {
  return new Promise(function (resolve, reject) {
    Channel.findByIdAndUpdate(_id, { $set: channel }, { new: true }, function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

ChannelSchema.statics.getAllChannels = function () {
  return new Promise(function (resolve, reject) {
    Channel.find(function (err, channels) {
      if (err) reject(err);else resolve(channels);
    });
  });
};

ChannelSchema.statics.getChannelById = function (_id) {
  return new Promise(function (resolve, reject) {
    Channel.findOne({ _id: _id }, function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

ChannelSchema.statics.getChannelByOwner = function (owner) {
  return new Promise(function (resolve, reject) {
    undefined.findOne({ owner: owner }, function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

var Channel = mongoose.model('Channel', ChannelSchema);
exports.default = Channel;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _message = __webpack_require__(19);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes() {
  var router = new _express.Router();

  router.post('/message', _message2.default.newMessage);
  router.get('/messages', _message2.default.getMessages);
  router.get('/messages/:owner', _message2.default.getMessagesByOwner);
  router.get('/message/:id', _message2.default.getMessageById);
  router.put('/message/:id', _message2.default.updateMessageById);
  router.delete('/message/:id', _message2.default.deleteMessageById);

  return router;
};

exports.default = routes;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = __webpack_require__(20);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newMessage = function newMessage(req, res) {
  var msg = new _message2.default(req.body);
  _message2.default.addMessage(msg).then(function (newMsg) {
    res.status(200).json({ status: 200, data: newMsg, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var deleteMessageById = function deleteMessageById(req, res) {
  var id = req.params.id;

  _message2.default.deleteMessage(id).then(function (delMsg) {
    res.status(200).json({ status: 200, data: delMsg, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var getMessageById = function getMessageById(req, res) {
  var id = req.params.id;

  _message2.default.getMessageById(id).then(function (getMsg) {
    res.status(200).json({ status: 200, data: getMsg, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var getMessages = function getMessages(req, res) {
  _message2.default.getMessages().then(function (getMessages) {
    res.status(200).json({ status: 200, data: getMessages, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var getMessagesByOwner = function getMessagesByOwner(req, res) {
  var owner = req.params.owner;

  _message2.default.getMessagesByOwner(owner).then(function (getMsgByOwner) {
    res.status(200).json({ status: 200, data: getMsgByOwner, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var updateMessageById = function updateMessageById(req, res) {
  if (req.body) {
    var message = {};
    Object.keys(req.body).forEach(function (key) {
      message[key] = req.body[key];
    });
    var id = req.params.id;

    _message2.default.updateMessage(id, message).then(function (updateMsg) {
      res.status(200).json({ status: 200, data: updateMsg, message: 'Ok' });
    }).catch(function (err) {
      res.status(500).json({ status: 500, message: err.message });
    });
  } else throw new Error('Error updating message!');
};

exports.default = {
  newMessage: newMessage,
  deleteMessageById: deleteMessageById,
  getMessageById: getMessageById,
  getMessages: getMessages,
  getMessagesByOwner: getMessagesByOwner,
  updateMessageById: updateMessageById
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  owner: { type: String, ref: 'User' },
  createDate: { type: Date, default: Date.now },
  content: String,
  contentType: String,
  isActive: Boolean,
  deletedBy: { type: String, ref: 'User' }
});

MessageSchema.statics.addMessage = function (message) {
  return new Promise(function (resolve, reject) {
    message.save(function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

MessageSchema.statics.deleteMessage = function (id) {
  return new Promise(function (resolve, reject) {
    Message.findByIdAndRemove(id, function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

MessageSchema.statics.getMessagesByOwner = function (owner) {
  return new Promise(function (resolve, reject) {
    Message.find({ owner: owner }, function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

MessageSchema.statics.getMessageById = function (id) {
  return new Promise(function (resolve, reject) {
    Message.findById(id, function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

MessageSchema.statics.getMessages = function () {
  return new Promise(function (resolve, reject) {
    Message.find(function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

MessageSchema.statics.updateMessage = function (id, message) {
  return new Promise(function (resolve, reject) {
    Message.findByIdAndUpdate(id, message, function (err, item) {
      if (err) reject(err);else resolve(item);
    });
  });
};

var Message = mongoose.model('Message', MessageSchema);
exports.default = Message;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _user = __webpack_require__(22);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes() {
  var router = new _express.Router();

  router.post('/user', _user2.default.newUser);
  router.get('/users', _user2.default.getUsers);
  router.get('/user/:id', _user2.default.getUserById);
  router.put('/user/:id', _user2.default.updateUserById);

  return router;
};

exports.default = routes;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newUser = function newUser(req, res) {
  var user = new _user2.default(req.body);
  _user2.default.addUser(user).then(function (newUser) {
    res.status(200).json({ status: 200, data: newUser, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var getUsers = function getUsers(req, res) {
  _user2.default.getAllUsers().then(function (getUsers) {
    res.status(200).json({ status: 200, data: getUsers, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var getUserById = function getUserById(req, res) {
  var id = req.params.id;

  _user2.default.getUser(id).then(function (getUserById) {
    res.status(200).json({ status: 200, data: getUserById, message: 'Ok' });
  }).catch(function (err) {
    res.status(500).json({ status: 500, message: err.message });
  });
};

var updateUserById = function updateUserById(req, res) {
  if (req.body) {
    var user = {};
    Object.keys(req.body).forEach(function (key) {
      user[key] = req.body[key];
    });
    var id = req.params.id;

    _user2.default.updateUser(id, user).then(function (updateUser) {
      res.status(200).json({ status: 200, data: updateUser, message: 'Ok' });
    }).catch(function (err) {
      res.status(500).json({ status: 500, message: err.message });
    });
  } else throw new Error('Error updating user!');
};

exports.default = {
  newUser: newUser,
  getUsers: getUsers,
  getUserById: getUserById,
  updateUserById: updateUserById
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _auth = __webpack_require__(24);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes() {
  var router = new _express.Router();

  router.post('/auth/signup', _auth2.default.signUp);
  router.post('/auth/login', _auth2.default.logIn);

  return router;
};

exports.default = routes;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

var _bcrypt = __webpack_require__(25);

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = __webpack_require__(26);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var signUp = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, password, email, firstName, lastName, hashPass, newUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (req.body) {
              _context.next = 3;
              break;
            }

            throw new Error('No data sent.');

          case 3:
            _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email, firstName = _req$body.firstName, lastName = _req$body.lastName;

            if (/\S+@\S+\.\S+/.test(email)) {
              _context.next = 6;
              break;
            }

            throw new Error('Invalid Email sent.');

          case 6:
            if (username) {
              _context.next = 8;
              break;
            }

            throw new Error('Username not sent.');

          case 8:
            if (password) {
              _context.next = 10;
              break;
            }

            throw new Error('Password not sent.');

          case 10:
            if (firstName) {
              _context.next = 12;
              break;
            }

            throw new Error('First Name not sent.');

          case 12:
            if (lastName) {
              _context.next = 14;
              break;
            }

            throw new Error('Last Name not sent.');

          case 14:
            _context.next = 16;
            return _bcrypt2.default.hash(password, 10);

          case 16:
            hashPass = _context.sent;
            newUser = new _user2.default({
              firstName: firstName,
              lastName: lastName,
              email: email,
              username: username,
              password: hashPass,
              isActive: true
            });
            _context.next = 20;
            return _user2.default.addUser(newUser);

          case 20:
            res.json({ status: 200, message: 'User saved successfully.' });
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context['catch'](0);

            if (_context.t0.code === 11000) res.json({ status: 500, message: 'An account for that username or email already exists.' });else res.json({ status: 500, message: 'Sign Up failed. Try again.', error: _context.t0 });

          case 26:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 23]]);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var logIn = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, usernameEmail, password, user, error, valid, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            if (req.body) {
              _context2.next = 3;
              break;
            }

            throw new Error('No data sent.');

          case 3:
            _req$body2 = req.body, usernameEmail = _req$body2.usernameEmail, password = _req$body2.password;

            if (usernameEmail) {
              _context2.next = 6;
              break;
            }

            throw new Error('Username or Email not sent.');

          case 6:
            if (password) {
              _context2.next = 8;
              break;
            }

            throw new Error('Password not sent.');

          case 8:
            user = null;
            error = null;
            _context2.next = 12;
            return _user2.default.getByEmail(usernameEmail);

          case 12:
            user = _context2.sent;

            if (user) {
              _context2.next = 17;
              break;
            }

            _context2.next = 16;
            return _user2.default.getByUsername(usernameEmail);

          case 16:
            user = _context2.sent;

          case 17:
            if (user) {
              _context2.next = 21;
              break;
            }

            error = new Error('There is no user with that username or email.');
            error.code = 1234;
            throw error;

          case 21:
            console.log(user);
            _context2.next = 24;
            return _bcrypt2.default.compare(password, user.password);

          case 24:
            valid = _context2.sent;

            if (!valid) {
              _context2.next = 30;
              break;
            }

            token = _jsonwebtoken2.default.sign(user.toObject(), _config2.default.tokenSecret);

            res.json({ status: 200, token: token, user: user, message: 'Login successful!' });
            _context2.next = 33;
            break;

          case 30:
            error = new Error('Incorrect password.');
            error.code = 4321;
            throw error;

          case 33:
            _context2.next = 39;
            break;

          case 35:
            _context2.prev = 35;
            _context2.t0 = _context2['catch'](0);

            console.log(_context2.t0);
            if (_context2.t0.code === 1234) res.json({ status: 500, message: _context2.t0.message });else if (_context2.t0.code === 4321) res.json({ status: 500, message: _context2.t0.message });else res.json({ status: 500, message: 'Login failed. Try again.', error: _context2.t0 });

          case 39:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 35]]);
  }));

  return function logIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var validate = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res, next) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            token = req.get('token');

            if (token) {
              _context3.next = 6;
              break;
            }

            throw new Error('No token found. Set header: token');

          case 6:
            decoded = _jsonwebtoken2.default.verify(token, _config2.default.tokenSecret);

            if (decoded) {
              _context3.next = 9;
              break;
            }

            throw new Error('Invalid token.');

          case 9:
            _context3.next = 11;
            return _user2.default.findById(decoded._id);

          case 11:
            user = _context3.sent;

            if (user) {
              _context3.next = 14;
              break;
            }

            throw new Error('Unauthorized.');

          case 14:
            next();

          case 15:
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3['catch'](0);

            res.json({ status: 404, message: _context3.t0.message });

          case 20:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 17]]);
  }));

  return function validate(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = {
  logIn: logIn,
  signUp: signUp,
  validate: validate
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })
/******/ ]);