"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports["default"] = void 0;
var _WorkerModel = _interopRequireDefault(require("../../models/WorkerModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var addAddress = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$user, workerId, address, worker;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          workerId = (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user.userId;
          address = req.body;
          _context.next = 5;
          return _WorkerModel["default"].findById(workerId);
        case 5:
          worker = _context.sent;
          if (worker) {
            _context.next = 8;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 8:
          worker.billingAddress = address;
          _context.next = 11;
          return worker.save();
        case 11:
          return _context.abrupt("return", res.status(200).send());
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.sendStatus(400));
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function addAddress(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateBankInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$user2, workerId, bankInfo, worker;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          workerId = (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2.userId;
          bankInfo = req.body;
          _context2.next = 5;
          return _WorkerModel["default"].findById(workerId);
        case 5:
          worker = _context2.sent;
          if (worker) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 8:
          worker.bankInfo = bankInfo;
          _context2.next = 11;
          return worker.save();
        case 11:
          res.status(200).json({
            message: 'Bank information updated successfully.'
          });
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: 'An error occurred while updating the bank information.',
            error: _context2.t0
          });
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function updateBankInfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var addExperience = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$user3, workerId, experience, worker;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          workerId = (_req$user3 = req.user) === null || _req$user3 === void 0 ? void 0 : _req$user3.userId;
          experience = req.body;
          _context3.next = 5;
          return _WorkerModel["default"].findById(workerId);
        case 5:
          worker = _context3.sent;
          if (worker) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 8:
          if (!(worker.username != req.params.username)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: 'Bad request.'
          }));
        case 10:
          if (!worker.experiences) {
            worker.experiences = [];
          }
          worker.experiences.push(experience);
          _context3.next = 14;
          return worker.save();
        case 14:
          res.status(200).json({
            message: 'Experience added successfully.'
          });
          _context3.next = 21;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            message: 'An error occurred while adding the experience.',
            error: _context3.t0
          });
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 17]]);
  }));
  return function addExperience(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var editExperience = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$params, username, experienceId, _req$body, jobType, company, startDate, endDate, updatedWorker;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$params = req.params, username = _req$params.username, experienceId = _req$params.experienceId;
          _req$body = req.body, jobType = _req$body.jobType, company = _req$body.company, startDate = _req$body.startDate, endDate = _req$body.endDate; // New values to be updated
          _context4.next = 5;
          return _WorkerModel["default"].findOneAndUpdate({
            username: username,
            'experiences._id': experienceId
          }, {
            $set: {
              'experiences.$.jobType': jobType,
              'experiences.$.company': company,
              'experiences.$.startDate': startDate,
              'experiences.$.endDate': endDate
            }
          }, {
            "new": true
          } // This option returns the updated document
          );
        case 5:
          updatedWorker = _context4.sent;
          if (updatedWorker) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'Worker or experience not found'
          }));
        case 8:
          return _context4.abrupt("return", res.status(200).json(updatedWorker));
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: _context4.t0
          }));
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function editExperience(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteExperience = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$user4, workerId, experienceId, worker;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          workerId = (_req$user4 = req.user) === null || _req$user4 === void 0 ? void 0 : _req$user4.userId;
          experienceId = req.params.experienceId;
          _context5.next = 5;
          return _WorkerModel["default"].findById(workerId);
        case 5:
          worker = _context5.sent;
          if (worker) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'Worker not found.'
          }));
        case 8:
          if (worker.experiences) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'No experiences found for this worker.'
          }));
        case 10:
          worker.experiences = worker.experiences.filter(function (exp) {
            return exp._id.toString() !== experienceId;
          });
          _context5.next = 13;
          return worker.save();
        case 13:
          res.status(200).json({
            message: 'Experience deleted successfully.'
          });
          _context5.next = 19;
          break;
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: 'An error occurred while deleting the experience.',
            error: _context5.t0
          });
        case 19:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 16]]);
  }));
  return function deleteExperience(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateProfile = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$user5, workerId, allowedFields, updateData, updatedWorker;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          workerId = (_req$user5 = req.user) === null || _req$user5 === void 0 ? void 0 : _req$user5.userId;
          allowedFields = ['bio'];
          updateData = {};
          allowedFields.forEach(function (field) {
            if (req.body[field] !== undefined) {
              updateData[field] = req.body[field];
            }
          });
          if (!(Object.keys(updateData).length === 0)) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: 'No valid fields to update.'
          }));
        case 7:
          _context6.next = 9;
          return _WorkerModel["default"].findOneAndUpdate({
            _id: workerId
          }, {
            $set: updateData
          }, {
            "new": true
          });
        case 9:
          updatedWorker = _context6.sent;
          res.status(200).json({
            message: 'Profile updated successfully.',
            updatedWorker: updatedWorker
          });
          _context6.next = 16;
          break;
        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: 'An error occurred while updating the worker profile.',
            error: _context6.t0
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 13]]);
  }));
  return function updateProfile(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateProfile = updateProfile;
var WorkerEditController = {
  addAddress: addAddress,
  updateBankInfo: updateBankInfo,
  addExperience: addExperience,
  deleteExperience: deleteExperience,
  editExperience: editExperience,
  updateProfile: updateProfile
};
var _default = WorkerEditController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfV29ya2VyTW9kZWwiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJhZGRBZGRyZXNzIiwiX3JlZiIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJfcmVxJHVzZXIiLCJ3b3JrZXJJZCIsImFkZHJlc3MiLCJ3b3JrZXIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidXNlciIsInVzZXJJZCIsImJvZHkiLCJXb3JrZXJNb2RlbCIsImZpbmRCeUlkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJiaWxsaW5nQWRkcmVzcyIsInNhdmUiLCJzZW5kIiwidDAiLCJzZW5kU3RhdHVzIiwiX3giLCJfeDIiLCJ1cGRhdGVCYW5rSW5mbyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfcmVxJHVzZXIyIiwiYmFua0luZm8iLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJfeDMiLCJfeDQiLCJhZGRFeHBlcmllbmNlIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9yZXEkdXNlcjMiLCJleHBlcmllbmNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwidXNlcm5hbWUiLCJwYXJhbXMiLCJleHBlcmllbmNlcyIsImNvbnNvbGUiLCJsb2ciLCJfeDUiLCJfeDYiLCJlZGl0RXhwZXJpZW5jZSIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfcmVxJHBhcmFtcyIsImV4cGVyaWVuY2VJZCIsIl9yZXEkYm9keSIsImpvYlR5cGUiLCJjb21wYW55Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInVwZGF0ZWRXb3JrZXIiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJmaW5kT25lQW5kVXBkYXRlIiwiJHNldCIsIl94NyIsIl94OCIsImRlbGV0ZUV4cGVyaWVuY2UiLCJfcmVmNSIsIl9jYWxsZWU1IiwiX3JlcSR1c2VyNCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImZpbHRlciIsImV4cCIsIl9pZCIsInRvU3RyaW5nIiwiX3g5IiwiX3gxMCIsInVwZGF0ZVByb2ZpbGUiLCJfcmVmNiIsIl9jYWxsZWU2IiwiX3JlcSR1c2VyNSIsImFsbG93ZWRGaWVsZHMiLCJ1cGRhdGVEYXRhIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiZmllbGQiLCJfeDExIiwiX3gxMiIsIldvcmtlckVkaXRDb250cm9sbGVyIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXJzL1dvcmtlci9Xb3JrZXJFZGl0Q29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB7IElXb3JrZXIgfSBmcm9tICdAL2FwcC9pbnRlcmZhY2VzL21vZGVscy9Xb3JrZXInXG5pbXBvcnQgV29ya2VyTW9kZWwgZnJvbSAnQC9hcHAvbW9kZWxzL1dvcmtlck1vZGVsJ1xuXG5jb25zdCBhZGRBZGRyZXNzID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRcdGNvbnN0IGFkZHJlc3MgPSByZXEuYm9keVxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHR3b3JrZXIuYmlsbGluZ0FkZHJlc3MgPSBhZGRyZXNzXG5cblx0XHRhd2FpdCB3b3JrZXIuc2F2ZSgpXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKClcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAwKVxuXHR9XG59XG5cbmNvbnN0IHVwZGF0ZUJhbmtJbmZvID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXHRcdGNvbnN0IGJhbmtJbmZvID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZClcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXG5cdFx0d29ya2VyLmJhbmtJbmZvID0gYmFua0luZm9cblxuXHRcdGF3YWl0IHdvcmtlci5zYXZlKClcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdCYW5rIGluZm9ybWF0aW9uIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LicgfSlcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIGJhbmsgaW5mb3JtYXRpb24uJyxcblx0XHRcdGVycm9yLFxuXHRcdH0pXG5cdH1cbn1cblxuY29uc3QgYWRkRXhwZXJpZW5jZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHRjb25zdCBleHBlcmllbmNlID0gcmVxLmJvZHlcblxuXHRcdGNvbnN0IHdvcmtlcjogSVdvcmtlciB8IG51bGwgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kQnlJZCh3b3JrZXJJZClcblxuXHRcdGlmICghd29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG5vdCBmb3VuZC4nIH0pXG5cdFx0fVxuXHRcdGlmICh3b3JrZXIudXNlcm5hbWUgIT0gcmVxLnBhcmFtcy51c2VybmFtZSkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0JhZCByZXF1ZXN0LicgfSlcblx0XHR9XG5cblx0XHRpZiAoIXdvcmtlci5leHBlcmllbmNlcykge1xuXHRcdFx0d29ya2VyLmV4cGVyaWVuY2VzID0gW11cblx0XHR9XG5cdFx0d29ya2VyLmV4cGVyaWVuY2VzLnB1c2goZXhwZXJpZW5jZSlcblxuXHRcdGF3YWl0IHdvcmtlci5zYXZlKClcblx0XHRyZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdFeHBlcmllbmNlIGFkZGVkIHN1Y2Nlc3NmdWxseS4nIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyB0aGUgZXhwZXJpZW5jZS4nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSlcblx0fVxufVxuXG5jb25zdCBlZGl0RXhwZXJpZW5jZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7IHVzZXJuYW1lLCBleHBlcmllbmNlSWQgfSA9IHJlcS5wYXJhbXNcblx0XHRjb25zdCB7IGpvYlR5cGUsIGNvbXBhbnksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gcmVxLmJvZHkgLy8gTmV3IHZhbHVlcyB0byBiZSB1cGRhdGVkXG5cblx0XHRjb25zdCB1cGRhdGVkV29ya2VyID0gYXdhaXQgV29ya2VyTW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcblx0XHRcdHsgdXNlcm5hbWU6IHVzZXJuYW1lLCAnZXhwZXJpZW5jZXMuX2lkJzogZXhwZXJpZW5jZUlkIH0sXG5cdFx0XHR7XG5cdFx0XHRcdCRzZXQ6IHtcblx0XHRcdFx0XHQnZXhwZXJpZW5jZXMuJC5qb2JUeXBlJzogam9iVHlwZSxcblx0XHRcdFx0XHQnZXhwZXJpZW5jZXMuJC5jb21wYW55JzogY29tcGFueSxcblx0XHRcdFx0XHQnZXhwZXJpZW5jZXMuJC5zdGFydERhdGUnOiBzdGFydERhdGUsXG5cdFx0XHRcdFx0J2V4cGVyaWVuY2VzLiQuZW5kRGF0ZSc6IGVuZERhdGUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0eyBuZXc6IHRydWUgfSAvLyBUaGlzIG9wdGlvbiByZXR1cm5zIHRoZSB1cGRhdGVkIGRvY3VtZW50XG5cdFx0KVxuXG5cdFx0aWYgKCF1cGRhdGVkV29ya2VyKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnV29ya2VyIG9yIGV4cGVyaWVuY2Ugbm90IGZvdW5kJyB9KVxuXHRcdH1cblxuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkV29ya2VyKVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yIH0pXG5cdH1cbn1cblxuY29uc3QgZGVsZXRlRXhwZXJpZW5jZSA9IGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB3b3JrZXJJZCA9IHJlcS51c2VyPy51c2VySWRcblx0XHRjb25zdCBleHBlcmllbmNlSWQgPSByZXEucGFyYW1zLmV4cGVyaWVuY2VJZFxuXG5cdFx0Y29uc3Qgd29ya2VyOiBJV29ya2VyIHwgbnVsbCA9IGF3YWl0IFdvcmtlck1vZGVsLmZpbmRCeUlkKHdvcmtlcklkKVxuXG5cdFx0aWYgKCF3b3JrZXIpIHtcblx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdXb3JrZXIgbm90IGZvdW5kLicgfSlcblx0XHR9XG5cblx0XHRpZiAoIXdvcmtlci5leHBlcmllbmNlcykge1xuXHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0XHQuc3RhdHVzKDQwNClcblx0XHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnTm8gZXhwZXJpZW5jZXMgZm91bmQgZm9yIHRoaXMgd29ya2VyLicgfSlcblx0XHR9XG5cblx0XHR3b3JrZXIuZXhwZXJpZW5jZXMgPSB3b3JrZXIuZXhwZXJpZW5jZXMuZmlsdGVyKFxuXHRcdFx0KGV4cCkgPT4gZXhwLl9pZC50b1N0cmluZygpICE9PSBleHBlcmllbmNlSWRcblx0XHQpXG5cblx0XHRhd2FpdCB3b3JrZXIuc2F2ZSgpXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnRXhwZXJpZW5jZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIHRoZSBleHBlcmllbmNlLicsXG5cdFx0XHRlcnJvcixcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9maWxlID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHdvcmtlcklkID0gcmVxLnVzZXI/LnVzZXJJZFxuXG5cdFx0Y29uc3QgYWxsb3dlZEZpZWxkcyA9IFsnYmlvJ11cblxuXHRcdGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHt9XG5cblx0XHRhbGxvd2VkRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG5cdFx0XHRpZiAocmVxLmJvZHlbZmllbGRdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dXBkYXRlRGF0YVtmaWVsZF0gPSByZXEuYm9keVtmaWVsZF1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0aWYgKE9iamVjdC5rZXlzKHVwZGF0ZURhdGEpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ05vIHZhbGlkIGZpZWxkcyB0byB1cGRhdGUuJyB9KVxuXHRcdH1cblxuXHRcdGNvbnN0IHVwZGF0ZWRXb3JrZXIgPSBhd2FpdCBXb3JrZXJNb2RlbC5maW5kT25lQW5kVXBkYXRlKFxuXHRcdFx0eyBfaWQ6IHdvcmtlcklkIH0sXG5cdFx0XHR7ICRzZXQ6IHVwZGF0ZURhdGEgfSxcblx0XHRcdHsgbmV3OiB0cnVlIH1cblx0XHQpXG5cblx0XHRyZXNcblx0XHRcdC5zdGF0dXMoMjAwKVxuXHRcdFx0Lmpzb24oeyBtZXNzYWdlOiAnUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseS4nLCB1cGRhdGVkV29ya2VyIH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHRoZSB3b3JrZXIgcHJvZmlsZS4nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSlcblx0fVxufVxuXG5jb25zdCBXb3JrZXJFZGl0Q29udHJvbGxlciA9IHtcblx0YWRkQWRkcmVzcyxcblx0dXBkYXRlQmFua0luZm8sXG5cdGFkZEV4cGVyaWVuY2UsXG5cdGRlbGV0ZUV4cGVyaWVuY2UsXG5cdGVkaXRFeHBlcmllbmNlLFxuXHR1cGRhdGVQcm9maWxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrZXJFZGl0Q29udHJvbGxlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsSUFBQUEsWUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQWtELFNBQUFELHVCQUFBRSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxvQkFBQSxrQkFGbEQscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBVCxHQUFBLEVBQUFVLEdBQUEsRUFBQUMsSUFBQSxJQUFBWCxHQUFBLENBQUFVLEdBQUEs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